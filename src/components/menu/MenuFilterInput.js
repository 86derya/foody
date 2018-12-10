import React from 'react';

const MenuFilterInput = ({ filter, onFilterByChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterByChange}
    placeholder=" Filter by name..."
  />
);

export default MenuFilterInput;
