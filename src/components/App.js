import React from 'react';
import UserAuthorizationForm from './UserAuthorization';
import Menu from './Menu';
import Header from './App-Header';
import DishList from '../data/DishList.json';
import DishComment from './DishComment';
import OrderHistory from './OrderHistory';
import Orders from '../data/order-history.json';

const App = () => (
  <div>
    {' '}
    <Header /> <hr /> <UserAuthorizationForm /> <hr />{' '}
    <Menu dishList={DishList} /> <DishComment id={1} /> <hr />{' '}
    <OrderHistory orders={Orders} />{' '}
  </div>
);
export default App;
