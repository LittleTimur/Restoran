import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/home';
import CategPage from './pages/categories';
import Food from './pages/food';
import RestoranPage from './pages/restoran';
import Order1 from './pages/form/order_1';
import Order from './pages/form/order';
import { Provider } from 'react-redux'
import store from './data/store'

const OrderWrapper = () => {
  const { id } = useParams();
  return id === '1' ? <Order1 /> : <Order />;
};

const Navi = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategPage />} />
        <Route path="/categories/:category" element={<Food />} />
        <Route path="/categories/:category/:restoran" element={<RestoranPage />} />
        <Route path="/restorans/:restoran" element={<RestoranPage />} />
        <Route path="/order/:id" element={<OrderWrapper />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default Navi;
