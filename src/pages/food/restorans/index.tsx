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
    img: "/img/restoran-mira.png"
  },
  {
    title: "Pizza Palace",
    review_text: "4.5  Excellent",
    img: "/img/restoran-kara fin.png"
  },
  {
    title: "Burger Bliss",
    review_text: "3.9  Good",
    img: "/img/restoran-kuyltje.png"
  },
  {
    title: "Sushi Spot",
    review_text: "4.8  Outstanding",
    img: "/img/restoran-laplas.png"
  },
  {
    title: "Pasta Perfection",
    review_text: "4.1  Good",
    img: "/img/restoran-ria.png"
  },
  {
    title: "Green Garden",
    review_text: "4.3  Very Good",
    img: "/img/restoran-to space.png"
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
                    img={restoran.img} 
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
