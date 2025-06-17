import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../data/slices/cart';
import './style.css';

interface Props {
  title: string;
  titleTo: string;
  link: string;
  linkTitle: string
}

const RestoranAbout: React.FC<Props> = ({ title, titleTo, link, linkTitle }): React.ReactElement => {
    const dispatch = useDispatch();
    
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
                This restaurant is great for it's atmosphere. Try the speciality pizza
            </div>
            <div className="restoran-about-block-review">
                <img className="star" src="/img/star.svg" alt="" />{' '}
                <h4 className="restoran-about-block-review-text">4.2  Very Good</h4>
            </div>
            <div className="restoran-about-block-category-container">
                <Link to='/all-restorans' className="restoran-about-block-btn-category">
                    Comfort food
                </Link>
                {link && (
                    <button className="restoran-about-block-btn-category-food" onClick={() => dispatch(addToCart({id: linkTitle, title:linkTitle, price: 6, restoran: titleTo}))}> Add {linkTitle} </button>
                )}
            </div>
        </div>
    </>
    );
};

export default RestoranAbout;
