import React from 'react';
import styles from './OrderHistory.module.css';
import tbodyCells from './TableConfig';

const OrderHistory = ({ orders }) => {
  const th = tbodyCells.map(cell => <th key={cell}>{cell}</th>);
  const row = orders.map(({ id, date, price, address, rating }) => (
    <tr className={styles.tbody_row} key={id}>
      <td> {date} </td>
      <td> {price} </td>
      <td> {address} </td>
      <td> {rating} </td>
    </tr>
  ));

  return (
    <section className={styles.order_history}>
      <table>
        <thead>
          <tr>{th}</tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </section>
  );
};

export default OrderHistory;
