import React from 'react';

const navList = ['Menu', 'About', 'Contact', 'Delivery'];

const SiteNav = () => {
  const navItem = navList.map(item => (
    <li key={item}>
      <a href="/"> {item} </a>
    </li>
  ));

  return (
    <nav>
      <ul> {navItem} </ul>
    </nav>
  );
};
export default SiteNav;
