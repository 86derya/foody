import React from 'react';
import styles from './MenuGrid.module.css';
import MenuGridCard from './MenuGridCard';

const MenuGrid = ({ dishList }) => {
  const MenuGridItem = dishList.map(({ id, name, price, image }) => (
    <li className={styles.menu_item} key={id}>
      <MenuGridCard name={name} price={price} image={image} />
    </li>
  ));
  return (
    <div className={styles.menu__grid_container}>
      <ul className={styles.menu_list}>{MenuGridItem}</ul>
    </div>
  );
};
export default MenuGrid;
