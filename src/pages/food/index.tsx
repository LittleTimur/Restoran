import React from 'react';
import Header from '../../widgets/header';
import Footer from '../../widgets/Footer';
import Restorans from './restorans';
import './style.css';

const Food = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className="food-top-banner">
        <img className="food-banner-photo" src="img/food.png" alt="" />
        <div className="food-banner-title">Pizza</div>
      </div>
      <Restorans />
      <Footer logo="img/logo-in-footer.svg" />
    </>
  );
};

export default Food;
