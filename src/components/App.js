import React, { Component } from 'react';
import UserAuthorizationForm from './userAuthorization/UserAuthorization';
import Menu from './menu/Menu';
import Header from './appHeader/App-Header';
import DishList from '../data/DishList.json';
import DishComment from './dishComments/DishComment';
import OrderHistory from './orderHistory/OrderHistory';
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
