import React from 'react';
import MenuItem from '../modules/menu/menuItem/DishContainer';

const MenuItemPage = ({ match, location, history }) => (
  <>
    <MenuItem id={match.params.id} location={location} history={history} />
  </>
);
export default MenuItemPage;
