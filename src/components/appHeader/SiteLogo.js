import React, { Fragment } from 'react';

const SiteLogo = ({ logo }) => {
  const image = <img src={logo} alt="logo" width="64 px" height="auto" />;
  return <Fragment> {image} </Fragment>;
};
export default SiteLogo;
