import React from 'react';
import DishName from './dishname';
import './style.css';

interface Dish {
    title: string;
    description: string;
    price: number;
}

interface RestoranSectionProps {
    title: string;
    dishes: Dish[];
}

const RestoranSection: React.FC<RestoranSectionProps> = ({ title, dishes }) => {
    return(<>
    <div className="restoran-section">
        <div className="restoran-section-title">{title}</div>
        <div className="restoran-section-container">
            {dishes.map((dish, index) => (
                <DishName 
                    key={index}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                />
            ))}
        </div>
    </div>
    </>)
}

export default RestoranSection;
