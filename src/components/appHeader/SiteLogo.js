import React, { Fragment } from 'react';
import styles from './AppHeader.module.css';

const SiteLogo = ({ logo }) => {
  const image = <img className={styles.site_logo} src={logo} alt="logo" />;
  return <Fragment> {image} </Fragment>;
};
export default SiteLogo;
