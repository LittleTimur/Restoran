import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  img: string;
  title: string;
}

const CategSectionCard: React.FC<Props> = ({ img, title }): React.ReactElement => {
  return (
    <>
      <div className="categories-section-card">
        <img className="categories-section-card-img" src={img} alt="" />
        <Link to="/categories/food" className="categories-section-card-link">
          {title}
        </Link>
      </div>
    </>
  );
};

export default CategSectionCard;
