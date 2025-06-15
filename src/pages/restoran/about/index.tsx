import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface Props {
  title: string;
  link: string;
}

const RestoranAbout: React.FC<Props> = ({ title, link }): React.ReactElement => {
    return (
    <>
        <div className="restoran-about-block">
            <div className="restoran-about-block-link">
                {link && (
                    <Link to={`/categories/${link}`} className="restoran-about-block-link-food">
                    {`categories / ${link}`}
                    </Link> 
                )}
                {' '}/{' '}{title}         
            </div>
            <div className="restoran-about-block-title">
                About
            </div>
            <div className="restoran-about-block-description">
                This restaurant is great for it’s atmosphere. Try the speciality pizza
            </div>
            <div className="restoran-about-block-review">
                <img className="star" src="/img/star.svg" alt="" />{' '}
                <h4 className="restoran-about-block-review-text">4.2  Very Good</h4>
            </div>
            <div className="restoran-about-block-category-container">
                <Link to='/' className="restoran-about-block-btn-category">
                    Comfort food
                </Link>
                {link && (
                    <Link to={`/categories/${link}`} className="restoran-about-block-btn-category-food">
                        {link}
                    </Link>
                )}
            </div>
        </div>
    </>
    );
};

export default RestoranAbout;
