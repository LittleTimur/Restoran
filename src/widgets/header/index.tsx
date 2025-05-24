import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Header = (): React.ReactElement => {
  const location = useLocation();
  const isOrderPage = !location.pathname.match(/^\/order\/\d+$/);
  return (
    <>
      <header className="header container">
        <Link to="/">
        <img className="logo" src="/img/logo.svg" alt="" />
        </Link>
        {isOrderPage && (
          <>
            <button className="btn-menu">
              <img src="/img/menu.svg" alt="" />
            </button>
            <Link to="/">
              <img className="logo-in-med" src="/img/logo-in-footer.svg" alt="" />
            </Link>
            <Link to="/" className="header-a btn-home">
              Home
            </Link>
            <Link to="/" className="header-a btn-all-restaurants">
              All restaurants
            </Link>
            <Link to="/order/1" className="header-a btn-shop">
              <img className="shop" src="/img/shop.svg" alt="" />
            </Link>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
