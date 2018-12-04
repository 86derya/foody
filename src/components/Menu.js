import React, { Component } from 'react';
import MenuGrid from './MenuGrid';
import MenuFilterInput from './MenuFilterInput';

const filterDishes = (dishes, filter) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

export default class Menu extends Component {
  state = {
    dishes: this.props.dishList,
    filterBy: '',
  };

  handleFilterChange = ({ target }) => {
    this.setState({
      filterBy: target.value,
    });
  };

  render() {
    const { dishes, filterBy } = this.state;
    const filteredDishes = filterDishes(dishes, filterBy);

    return (
      <section>
        {' '}
        <MenuFilterInput
          value={filterBy}
          onFilterByChange={this.handleFilterChange}
        />{' '}
        <MenuGrid dishList={filteredDishes} />{' '}
      </section>
    );
  }
}
