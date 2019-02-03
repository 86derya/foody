import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './spinner';

import Header from './appHeader';
import routes from '../configs/routes';
import Cart from './modules/cart';

const AsyncMenuPage = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "Menu-page" */),
);
const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItem' /* webpackChunkName: "Menu_Item-page" */),
);
const AsyncAddDishPage = lazy(() =>
  import('../pages/AddDish' /* webpackChunkName: "Menu_AddDish-page" */),
);
const AsyncAboutPage = lazy(() =>
  import('../pages/About' /* webpackChunkName: "About-page" */),
);
const AsyncContactPage = lazy(() =>
  import('../pages/Contact' /* webpackChunkName: "Contact-page" */),
);
const AsyncDeliveryPage = lazy(() =>
  import('../pages/Delivery' /* webpackChunkName: "Delivery-page" */),
);
const AsyncAccountPage = lazy(() =>
  import('../pages/Account' /* webpackChunkName: "Account-page" */),
);
const AsyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistory' /* webpackChunkName: "OrderHistory-page" */),
);
const AsyncPlannerPage = lazy(() =>
  import('../pages/Planner' /* webpackChunkName: "Planner-page" */),
);
const AsyncNotFoundPage = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "NotFound-page" */),
);
const AsyncCartPage = lazy(() =>
  import('../pages/Cart' /* webpackChunkName: "Cart-page" */),
);
const AsyncHomePage = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "Home-page" */),
);
const App = () => (
  <>
    <Header />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route
          exact
          path={routes.MENU}
          component={props => <AsyncMenuPage {...props} />}
        />
        <Route
          path={routes.ADD_DISH}
          component={props => <AsyncAddDishPage {...props} />}
        />
        <Route
          path={routes.MENU_ITEM}
          component={props => <AsyncMenuItemPage {...props} />}
        />
        <Route exact path={routes.ABOUT} component={() => <AsyncAboutPage />} />
        <Route
          exact
          path={routes.CONTACT}
          component={() => <AsyncContactPage />}
        />
        <Route
          exact
          path={routes.DELIVERY}
          component={() => <AsyncDeliveryPage />}
        />
        <Route
          exact
          path={routes.ACCOUNT}
          component={() => <AsyncAccountPage />}
        />
        <Route
          exact
          path={routes.ORDER_HISTORY}
          component={() => <AsyncOrderHistoryPage />}
        />
        <Route
          exact
          path={routes.PLANNER}
          component={() => <AsyncPlannerPage />}
        />
        <Route exact path={routes.HOME} component={() => <AsyncHomePage />} />
        <Cart exact path={routes.CART} component={() => <AsyncCartPage />} />
        <Route component={() => <AsyncNotFoundPage />} />
      </Switch>
    </Suspense>
  </>
);
export default App;
