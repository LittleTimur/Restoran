import React from 'react';
import Header from '../../widgets/header';
import Footer from '../../widgets/Footer';
import AllRestoranCard from './components/AllRestoranCard';
import { restaurants } from './data/restaurantsData';
import './style.css';

const AllRestoransPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className="all-restorans-page-container">
        <h1 className="all-restorans-title">All Restaurants</h1>
        <div className="all-restorans-grid">
          {restaurants.map((restoran, index) => (
            <AllRestoranCard 
              key={index}
              img="/img/food-categories-restoran.png" 
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
