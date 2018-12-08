import React from 'react';

const OrderHistory = ({ orders, onShowDetails, onDelete }) => {
  const row = orders.map(order => (
    <tr key={order.id}>
      <td> {order.date} </td> <td> {order.price} </td>{' '}
      <td> {order.address} </td> <td> {order.rating} </td>{' '}
      <td>
        <button
          type="button"
          onClick={() => {
            onShowDetails(order.id);
          }}
        >
          Детальнее{' '}
        </button>{' '}
      </td>{' '}
      <td>
        <button
          type="button"
          onClick={() => {
            onDelete();
          }}
        >
          {' '}
          Удалить{' '}
        </button>{' '}
      </td>{' '}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th> Date </th> <th> Price </th> <th> Delivery address </th>{' '}
          <th> Rating </th>{' '}
        </tr>{' '}
      </thead>{' '}
      <tbody> {row} </tbody>{' '}
    </table>
  );
};

export default OrderHistory;
