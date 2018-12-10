import React from 'react';
import UserAuthorizationForm from './userAuthorization/UserAuthorization';
import Menu from './menu/Menu';
import Header from './appHeader/App-Header';
import DishList from '../data/DishList.json';
import DishComment from './dishComments/DishComment';
import OrderHistory from './orderHistory/OrderHistory';
import Orders from '../data/order-history.json';

const App = () => (
  <div>
    <Header />
    <UserAuthorizationForm />
    <Menu dishList={DishList} />
    <DishComment id={1} />
    <OrderHistory orders={Orders} />
  </div>
);
export default App;
