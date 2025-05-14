import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import RestoranCard from './restoran_card';

const Restorans = (): React.ReactElement => {
  return (
    <>
      <div className="restoran-block">
        <div className="restorans-title">
            <Link to="/categories" className="link-categories">
            categories /{' '}
            </Link>
            <Link to="/categories/food" className="link-categories-food">
            food
            </Link>
        </div>
        <div className="restorans-block-conteiner">
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
        </div>
      </div>
    </>
  );
};

export default Restorans;
