import React from 'react';
import SiteLogo from './SiteLogo';
import SiteNav from './SiteNav';
import UserMenu from './userMenu/User-menu';
import CartLink from './cartLink';

import styles from './AppHeader.module.css';

const Header = () => (
  <div className={styles.header}>
    <SiteLogo />
    <SiteNav />
    <UserMenu />
    <CartLink />
  </div>
);
export default Header;
