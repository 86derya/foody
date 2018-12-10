import React from 'react';
import MenuGridCard from './MenuGridCard';

const MenuGrid = ({ dishList }) => {
  const MenuGridItem = dishList.map(
    ({ id, name, price, image, description }) => (
      <li key={id}>
        <MenuGridCard
          name={name}
          price={price}
          image={image}
          description={description}
        />
      </li>
    ),
  );
  return <ul>{MenuGridItem}</ul>;
};
export default MenuGrid;
