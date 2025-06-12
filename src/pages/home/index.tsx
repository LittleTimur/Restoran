import React from 'react';
import Header from '../../widgets/header';
import Banner from './banner';
import Carusel_Pick from './carusel/pick';
import Carusel_Arrivals from './carusel/arrivals';
import Carusel_Categories from './carusel/categories';
import Footer from '../../widgets/Footer';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <div className="hungry">
          <h2 className="hungry-title">
            <b className="hungry-b">Hungry?</b> Find your next meal
          </h2>
          <img className="Ladies" src="/img/Ladies.svg" alt="" />
        </div>
        <Carusel_Pick />
        <Banner />
        <Carusel_Arrivals />
        <Carusel_Categories />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
