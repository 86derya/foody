// import React from 'react';
import { connect } from 'react-redux';

import CartView from './CartView';
import { cartActions, cartSelectors } from './duck';

const mapStateToProps = state => ({
  dishes: cartSelectors.getCartItems(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});
const mapDispatchToProps = {
  onDecrementDish: cartActions.decrementQty,
  onIncrementDish: cartActions.incrementQty,
  onDeleteDishFromCart: cartActions.deleteFromCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartView);
