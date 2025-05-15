import React from 'react';

interface Props {
  img: string;
  title: string;
  review_text: string;
}

const Card: React.FC<Props> = ({ img, title, review_text }): React.ReactElement => {
  return (
    <>
      <div className="pick-card">
        <div>
          <img className="pick_img" src={img} alt="" />
        </div>
        <div className="pick-card-content">
          <a href="index.html" className="pick-card-title">
            {title}
          </a>
          <div className="pick-card-review">
            <img className="star" src="/img/star.svg" alt="" />{' '}
            <h4 className="review-text">{review_text}</h4>
          </div>
          <h6 className="pick-card-description">Nicest place for burgers</h6>
          <div className="pick-card-category">
            <a href="index.html" className="btn-category">
              Comfort food
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
