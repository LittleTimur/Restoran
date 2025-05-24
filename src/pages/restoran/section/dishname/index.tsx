import React from 'react';
import './style.css';  
import { useAppDispatch } from '../../../../data/store';
import { addToCart } from '../../../../data/slices/cart';
interface Props {
    title: string;
    description: string;
    price: number;
}

const DishName: React.FC<Props> = ({title, description, price}): React.ReactElement =>{
    const dispatch = useAppDispatch()
    return(<>
    <div className="dish-name">
        <div className="dish-name-title">{title}</div>
        <div className="dish-name-description">{description}</div>
        <div className="dish-name-price">€ {price}, -</div>
        <button className="dish-name-button" onClick={() => dispatch(addToCart({id: title, title, price}))}>Add to cart</button>
    </div>
    </>)
}

export default DishName;