import React, { Component } from 'react';
import styles from './MenuGrid.module.css';
import MenuGrid from './MenuGrid';
import MenuFilterInput from './MenuFilterInput';

const filterDishes = (dishes, filter) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

export default class Menu extends Component {
  state = {
    filterBy: '',
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({
      filterBy: value,
    });
  };

  render() {
    const { filterBy } = this.state;
    const { dishList } = this.props;
    const filteredDishes = filterDishes(dishList, filterBy);

    return (
      <section className={styles.menu}>
        <div className={styles.container}>
          <MenuFilterInput
            value={filterBy}
            onFilterByChange={this.handleFilterChange}
          />
          {filterBy ? (
            <MenuGrid dishList={filteredDishes} />
          ) : (
            <MenuGrid dishList={dishList} />
          )}
        </div>
      </section>
    );
  }
}
