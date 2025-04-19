import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home';
import CategPage from './pages/categories';

const Navi = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/categories">Categories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategPage />} />
      </Routes>
    </Router>
  );
};

export default Navi;