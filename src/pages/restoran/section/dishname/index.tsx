import React from 'react';
import './style.css';  
import { useAppDispatch, useAppSelector } from '../../../../data/store';
import { addToCart, decreaseQuantity, selectCartProducts } from '../../../../data/slices/cart';
import { useParams } from 'react-router-dom';

interface Props {
    title: string;
    description: string;
    price: number;
}

const DishName: React.FC<Props> = ({title, description, price}): React.ReactElement =>{
    const { restoran } = useParams<{ restoran: string }>();
    const restoranTitle = restoran ? restoran.charAt(0).toUpperCase() + restoran.slice(1) : '';
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector(selectCartProducts);
    
    const quantity = cartProducts.find(
        product => product.id === title && product.restoran === restoranTitle
    )?.quantity || 0;

    return(<>
    <div className="dish-name">
        <div className="dish-name-top-row">
            <div className="dish-name-title">{title}</div>
            <div className="dish-quantity-controls">
                <button className="dish-name-button" onClick={() => dispatch(decreaseQuantity({id: title, restoran: restoranTitle}))}>-</button>
                <div className={`dish-quantity ${quantity > 0 ? 'active' : ''}`}>{quantity}</div>
                <button className="dish-name-button" onClick={() => dispatch(addToCart({id: title, title, price, restoran: restoranTitle}))}>+</button>
            </div>        
        </div>
        <div className="dish-name-description">{description}</div>
        <div className="dish-name-price">€ {price}, -</div>
    </div>
    </>)
}

export default DishName;