import React, { Fragment } from 'react';
import styles from './AppHeader.module.css';

const SiteLogo = ({ logo }) => {
  const image = (
    <img
      className={styles.site__logo}
      src={logo}
      alt="logo"
      width="64 px"
      height="auto"
    />
  );
  return <Fragment> {image} </Fragment>;
};
export default SiteLogo;
