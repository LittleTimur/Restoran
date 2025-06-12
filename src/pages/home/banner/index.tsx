import React from 'react';
import Banner_Card from './banner-card';
import { Link } from 'react-router-dom';

const Banner = (): React.ReactElement => {
  return (
    <>
      <div className="AwardWinningBanner">
        <div className="banner-info">
          <h2 className="banner-title">Award winning</h2>
          <h3 className="banner-text">The best restaurants near you!</h3>
          <Link to='/all-restorans' className="btn-banner">
          Explore the best restaurants
      </Link>
        </div>
        <div className="banner-mini-cards">
          <div className="banner-column-1">
            <Banner_Card img="img/banner-img-1.png" title="Lukewarm Late" />
            <Banner_Card img="img/banner-img-1.png" title="The Smoking Veg" />
            <Banner_Card img="img/banner-img-2.png" title="The Artissan" />
          </div>
          <div className="banner-column-2">
            <Banner_Card img="img/banner-img-2.png" title="O’Neill’s" />
            <Banner_Card img="img/banner-img-3.png" title="Shining Artichoke" />
          </div>
          <div className="banner-column-1">
            <Banner_Card img="img/banner-img-5.png" title="The Woodland" />
            <Banner_Card img="img/banner-img-2.png" title="La Poma" />
            <Banner_Card img="img/banner-img-3.png" title="The Smoking Veg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
