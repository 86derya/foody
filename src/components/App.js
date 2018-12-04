import React from 'react';
import OrderHistory from './OrderHistory';
import Orders from '../data/order-history.json';

const App = () => <OrderHistory orders={Orders} />;
export default App;
