import React from 'react';

import Menu from './Menu';
import DishList from '../data/DishList.json';

const App = () => <Menu dishList={DishList} />;

export default App;
