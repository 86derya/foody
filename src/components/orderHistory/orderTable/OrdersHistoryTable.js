import React from 'react';
import styles from '../OrderHistory.module.css';
import tbodyCells from './TableConfig';

const OrderHistory = ({ orders, onShowDetails, onDelete }) => {
  const ShowMoreBtn = id => (
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        onShowDetails(id);
      }}
    >
      Детальнее
    </button>
  );
  const DeleteBtn = id => (
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        onDelete(id);
      }}
    >
      Удалить
    </button>
  );
  const th = tbodyCells.map(cell => <th key={cell}>{cell}</th>);
  const row = orders.map(({ id, date, price, address, rating }) => (
    <tr className={styles.tbody_row} key={id}>
      <td> {date} </td>
      <td> {price} </td>
      <td> {address} </td>
      <td> {rating} </td>
      <td className={styles.btn_cell}>
        <ShowMoreBtn id={id} />
      </td>
      <td className={styles.btn_cell}>
        <DeleteBtn id={id} />
      </td>
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
