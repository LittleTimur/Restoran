import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../widgets/header';
import Footer from '../../widgets/Footer';
import AllRestoranCard from './components/AllRestoranCard';
import { restaurants } from './data/restaurantsData';
import './style.css';

const AllRestoransPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>All Restaurants - MealDrop</title>
        <meta name="description" content="Browse all restaurants available on MealDrop. Find your favorite dining spots and order delicious food online." />
      </Helmet>
      <Header />
      <div className="all-restorans-container">
        <h1 className="all-restorans-title">All Restaurants</h1>
        <div className="all-restorans-grid">
          {restaurants.map((restoran, index) => (
            <AllRestoranCard
              key={index}
              img={restoran.img}
              title={restoran.title} 
              review_text={restoran.review_text} 
              isReversed={index % 2 !== 0} // Чередуем пропс isReversed
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllRestoransPage;
