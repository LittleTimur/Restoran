import React from 'react';
interface Props {
  img: string;
  title: string;
}

const Banner_Card: React.FC<Props> = ({ img, title }): React.ReactElement => {
  return (
    <>
      <div className="banner-card">
        <div>
          <img className="banner-card-img" src={img} alt="" />
        </div>
        <div className="banner-card-title">{title}</div>
      </div>
    </>
  );
};

export default Banner_Card;
