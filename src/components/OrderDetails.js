import React from 'react';

const OrderDetails = ({ order }) => (
  <div>
    {' '}
    <ul>
      {' '}
      <li> Date: {order.date} </li> <li> Address: {order.address} </li>{' '}
      <li> Price: {order.price} </li> <li> Rated: {order.rating} </li>{' '}
    </ul>{' '}
  </div>
);

export default OrderDetails;
