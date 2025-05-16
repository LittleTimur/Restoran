import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import RestoranCard from './restoran_card';

interface Props {
  title: string;
}

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
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" food = {title}/>
        </div>
      </div>
    </>
  );
};

export default Restorans;
