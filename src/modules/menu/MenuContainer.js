import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import styles from './MenuGrid.module.css';
import MenuGrid from './MenuGridView';
import MenuFilterInput from './MenuFilterInputView';
import * as API from '../../services/apiMenu';
import Spinner from '../../components/spinner';

const filterDishes = (dishes, filter) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

const categoriesOption = [];
API.getCategories().then(categories =>
  categories.map(category =>
    categoriesOption.push({ value: category.name, label: category.name }),
  ),
);

export default class Menu extends Component {
  state = {
    isLoading: false,
    filterBy: '',
    filteredDishesbyName: [],
    dishes: [],
    selectedCategory: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const category = getCategoryFromProps(this.props);

    API.getMenuItemsWithCategory(category).then(response =>
      this.setState({
        dishes: response,
        selectedCategory: category,
        isLoading: false,
      }),
    );
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    API.getMenuItemsWithCategory(nextCategory).then(dishes =>
      this.setState({ dishes }),
    );
  }

  handleFilterByNameChange = ({ target: { value } }) => {
    const { dishes, filterBy } = this.state;
    this.setState({
      filterBy: value,
      filteredDishesbyName: filterDishes(dishes, filterBy),
    });
  };

  handleCategoryChange = option => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${option.value}`,
    });
    this.setState({ selectedCategory: option.value });
  };

  handleClearFilter = () => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
    });
    this.setState({
      selectedCategory: null,
      filteredDishesbyName: [],
      filterBy: '',
    });
  };

  render() {
    const {
      isLoading,
      filterBy,
      dishes,
      selectedCategory,
      filteredDishesbyName,
    } = this.state;
    const { match, location } = this.props;
    const category = getCategoryFromProps(this.props);

    return (
      <section className={styles.menu}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.container}>
            {category && (
              <div>
                <button
                  className={styles.button__clearFilter}
                  type="button"
                  onClick={this.handleClearFilter}
                >
                  X
                </button>
                <p className={styles.selectedCategory__descr}>
                  Selected Category: <span>{selectedCategory}</span>
                </p>
              </div>
            )}
            <Select
              className={styles.select}
              options={categoriesOption}
              value={selectedCategory}
              onChange={this.handleCategoryChange}
              placeholder="Select Category"
            />
            <MenuFilterInput
              value={filterBy}
              onFilterByChange={this.handleFilterByNameChange}
            />
            <Link
              className={styles.addDish__link}
              to={{
                pathname: `${match.url}/add`,
                state: { from: location },
              }}
            >
              <button type="button">Добавить блюдо</button>
            </Link>
            {filterBy ? (
              <MenuGrid dishList={filteredDishesbyName} {...this.props} />
            ) : (
              <MenuGrid dishList={dishes} {...this.props} />
            )}
          </div>
        )}
      </section>
    );
  }
}
