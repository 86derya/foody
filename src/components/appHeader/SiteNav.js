import React from 'react';
import styles from './AppHeader.module.css';

const navList = ['Menu', 'About', 'Contact', 'Delivery'];

const SiteNav = () => {
  const navItem = navList.map(item => (
    <li className={styles.navigation_item} key={item}>
      <a className={styles.navigation_link} href="/">
        {item}
      </a>
    </li>
  ));

  return (
    <nav className={styles.navigation_container}>
      <ul className={styles.navigation_list}> {navItem} </ul>
    </nav>
  );
};
export default SiteNav;
