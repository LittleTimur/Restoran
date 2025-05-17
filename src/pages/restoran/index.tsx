import React from 'react';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/header';
import { useParams } from 'react-router-dom';
import RestoranAbout from './about';
import './style.css';

const RestoranPage = (): React.ReactElement => {
  const { restoran } = useParams<{ restoran: string }>();
  const restoranTitle = restoran ? restoran.charAt(0).toUpperCase() + restoran.slice(1) : '';
  const { category } = useParams<{ category: string }>();
  return (
    <>
      <Header />
      <div className="restoran-top-banner">
        <img className="restoran-banner-photo" src={`/img/restoran-title-${restoran}.png`} alt="" />
        <div className="restoran-banner-title">{restoranTitle}</div>
      </div>
      <RestoranAbout title={restoran || ''} link={category || ''} />
      <Footer />
    </>
  );
};

export default RestoranPage;
