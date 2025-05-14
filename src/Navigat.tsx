import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import CategPage from './pages/categories';
import Food from './pages/food';

const Navi = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategPage />} />
        <Route path="/categories/food" element={<Food />} />
      </Routes>
    </Router>
  );
};

export default Navi;
