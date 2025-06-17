import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>{categoryTitle} Restaurants - MealDrop</title>
        <meta name="description" content={`Find the best ${categoryTitle} restaurants and order delicious ${categoryTitle} food online with fast delivery on MealDrop.`} />
      </Helmet>
      <Header />
      <div className="food-top-banner">
        <img className="food-banner-photo" src={`/img/food-title-pizza.png`} alt="" />
        <div className="food-banner-title">{categoryTitle}</div>
      </div>
      <Restorans title={category || ''} />
      <Footer />
    </>
  );
};

export default Food;
