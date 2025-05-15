import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = (): React.ReactElement => {
  return (
    <>
      <header className="header container">
        <Link to="/">
        <img className="logo" src="/img/logo.svg" alt="" />
        </Link>
        <Link to="/" className="header-a btn-home">
        Home
        </Link>
        <Link to="/" className="header-a btn-all-restaurants">
        All restaurants
        </Link>
        <Link to="/" className="header-a btn-shop">
        <img className="shop" src="/img/shop.svg" alt="" />
        </Link>
      </header>
    </>
  );
};

export default Header;
