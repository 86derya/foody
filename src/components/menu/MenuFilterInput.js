import React from 'react';
import styles from './MenuGrid.module.css';

const MenuFilterInput = ({ filter, onFilterByChange }) => (
  <input
    className={styles.input}
    type="text"
    value={filter}
    onChange={onFilterByChange}
    placeholder=" Filter by name..."
  />
);

export default MenuFilterInput;
