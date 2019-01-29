import { combineReducers } from 'redux';

import {
  dishesReducer,
  entityReducer,
  errorReducer,
  loadingReducer,
  availableCategoriesReducer,
  filterByCategoryReducer,
  filterByNameReducer,
} from '../modules/menu/duck/reducers';

import cartReducer from '../modules/cart/duck/reducers';

export default combineReducers({
  dishListIds: dishesReducer,
  cart: cartReducer,
  entities: entityReducer,
  availableCategories: availableCategoriesReducer,
  filterByCategory: filterByCategoryReducer,
  filterByName: filterByNameReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
