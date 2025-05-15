import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  img: string;
  title: string;
}

const Card: React.FC<Props> = ({ img, title }): React.ReactElement => {
  return (
    <>
      <div className="categories-card">
        <img className="categories-card-img" src={img} alt="" />
        <Link to={`/categories/${title.toLowerCase()}`} className="categories-card-title">
          {title}
        </Link>
      </div>
    </>
  );
};

export default Card;
