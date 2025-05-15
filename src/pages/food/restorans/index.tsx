import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import RestoranCard from './restoran_card';

interface Props {
  title: string;
  link: string;
}

const Restorans: React.FC<Props> = ({ title, link }): React.ReactElement => {
  return (
    <>
      <div className="restoran-block">
        <div className="restorans-title">
            <Link to="/categories" className="link-categories">
            {link}
            </Link>
            {' '}/{' '}{title}         
        </div>
        <div className="restorans-block-conteiner">
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
            <RestoranCard img="/img/food-categories-restoran.png" title="Mira" review_text="4.2  Very Good" />
        </div>
      </div>
    </>
  );
};

export default Restorans;
