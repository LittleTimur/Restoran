import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../widgets/header';
import Footer from '../../widgets/Footer';
import Restorans from './restorans';
import './style.css';

const Food = (): React.ReactElement => {
  const { category } = useParams<{ category: string }>();
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <>
      <Header />
      <div className="food-top-banner">
        <img className="food-banner-photo" src={`/img/food-title-${category}.png`} alt="" />
        <div className="food-banner-title">{categoryTitle}</div>
      </div>
      <Restorans title={category || ''} link="categories" />
      <Footer logo="/img/logo-in-footer.svg" />
    </>
  );
};

export default Food;
