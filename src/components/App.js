import React, { Component } from 'react';
import UserAuthorizationForm from './userAuthorization';
import Menu from './menu';
import Header from './appHeader';
import DishList from '../data/DishList.json';
import DishComment from './dishComments';
import OrderHistory from './orderHistory';
import Orders from '../data/order-history.json';

export default class App extends Component {
  state = {
    id: 5,
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <Header />
        <UserAuthorizationForm />
        <Menu dishList={DishList} />
        <DishComment id={id} />
        <OrderHistory orders={Orders} />
      </div>
    );
  }
}
