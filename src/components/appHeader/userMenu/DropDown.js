import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../configs/userNav';

import styles from './UserMenu.module.css';

const DropDown = () => (
  <div className={styles.container}>
    <ul className={styles.userMenu__list}>
      {userNavItems.map(item => (
        <li key={item.name} className={styles.userMenu__item}>
          <Link to={item.path} className={styles.userMenu__link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    <button type="button">Log Out</button>
  </div>
);
export default DropDown;
