import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './appHeader';
import routes from '../configs/routes';

import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AddDishPage from '../pages/AddDish';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import PlannerPage from '../pages/Planner';
import NotFoundPage from '../pages/NotFound';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route path={routes.ADD_DISH} component={AddDishPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
      <Route exact path={routes.ABOUT} component={AboutPage} />
      <Route exact path={routes.CONTACT} component={ContactPage} />
      <Route exact path={routes.DELIVERY} component={DeliveryPage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
      <Route exact path={routes.PLANNER} component={PlannerPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);
export default App;
