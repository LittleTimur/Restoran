import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import CategPage from './pages/categories';
import Food from './pages/food';
import RestoranPage from './pages/restoran';

const Navi = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategPage />} />
        <Route path="/categories/:category" element={<Food />} />
        <Route path="/categories/:category/:restoran" element={<RestoranPage />} />
        <Route path="/restorans/:restoran" element={<RestoranPage />} />
      </Routes>
    </Router>
  );
};

export default Navi;
