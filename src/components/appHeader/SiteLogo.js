import React from 'react';
import Logo from '../../data/logo.png';
import styles from './AppHeader.module.css';

const SiteLogo = () => (
  <img className={styles.site_logo} src={Logo} alt="logo" />
);
export default SiteLogo;
