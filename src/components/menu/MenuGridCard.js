import React, { Fragment } from 'react';

const MenuGridCard = ({ name, image, price, description }) => {
  const dishImg = (
    <img src={image} alt="dish_photo" width="160px" height="auto" />
  );
  const dishName = <h3> {name} </h3>;
  const dishPrice = <p>{price}грн.</p>;
  const dishDescr = <p> {description} </p>;

  return (
    <Fragment>
      {dishImg}
      {dishName}
      {dishPrice}
      {dishDescr}
    </Fragment>
  );
};

export default MenuGridCard;
