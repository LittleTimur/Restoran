import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import RestoranCard from './restoran_card';

interface Props {
  title: string;
}

const restaurants = [
  {
    title: "Mira",
    review_text: "4.2  Very Good",
  },
  {
    title: "Pizza Palace",
    review_text: "4.5  Excellent",
  },
  {
    title: "Burger Bliss",
    review_text: "3.9  Good",
  },
  {
    title: "Sushi Spot",
    review_text: "4.8  Outstanding",
  },
  {
    title: "Pasta Perfection",
    review_text: "4.1  Good",
  },
  {
    title: "Green Garden",
    review_text: "4.3  Very Good",
  },
];

const Restorans: React.FC<Props> = ({ title }): React.ReactElement => {
  return (
    <>
      <div className="restoran-block">
        <div className="restorans-title">
            <Link to="/categories" className="link-categories">
            categories
            </Link>
            {' '}/{' '}{title}         
        </div>
        <div className="restorans-block-conteiner">
            {restaurants.map((restoran, index) => (
                <RestoranCard 
                    key={index}
                    img="/img/food-categories-restoran.png" 
                    title={restoran.title} 
                    review_text={restoran.review_text} 
                    food={title}
                />
            ))}
        </div>
      </div>
    </>
  );
};

export default Restorans;
