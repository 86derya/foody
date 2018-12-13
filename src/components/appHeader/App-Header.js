import React from 'react';
import Logo from '../../data/logo.png';
import SiteLogo from './SiteLogo';
import SiteNav from './SiteNav';
import UserMenu from './User-menu';
import users from '../../data/users.json';
import styles from './AppHeader.module.css';

const Header = () => (
  <div className={styles.header}>
    <SiteLogo logo={Logo} />
    <SiteNav />
    <UserMenu user={users[0]} />
  </div>
);
export default Header;
