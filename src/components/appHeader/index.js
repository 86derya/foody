import React from 'react';
import SiteLogo from './SiteLogo';
import SiteNav from './SiteNav';
import UserMenu from './User-menu';

import styles from './AppHeader.module.css';

const Header = () => (
  <div className={styles.header}>
    <SiteLogo />
    <SiteNav />
    <UserMenu />
  </div>
);
export default Header;
