import React from 'react';
import UserAuthorizationForm from './userAuthorization';
import Menu from './menu';
import Header from './appHeader';
import DishList from '../data/DishList.json';
import DishComment from './dishComments';
import OrderHistory from './orderHistory';
import Orders from '../data/order-history.json';

const App = () => (
  <div>
    <Header />
    <UserAuthorizationForm />
    <Menu dishList={DishList} />
    <DishComment />
    <OrderHistory orders={Orders} />
  </div>
);
export default App;
