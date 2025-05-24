import React from 'react';
import DishName from './dishname';
import './style.css';

const RestoranSection = (): React.ReactElement => {
    return(<>
    <div className="restoran-section">
        <div className="restoran-section-title">Section.name</div>
        <div className="restoran-section-container">
            <DishName title="Dish.name" description="Juicy dish with extra mayonaise" price={100} />
            <DishName title="Dish.name2" description="Juicy dish with extra mayonaise" price={100} />
            <DishName title="Dish.name3" description="Juicy dish with extra mayonaise" price={100} />
            <DishName title="Dish.name4" description="Juicy dish with extra mayonaise" price={100} />
            <DishName title="Dish.name5" description="Juicy dish with extra mayonaise" price={100} />
            <DishName title="Dish.name6" description="Juicy dish with extra mayonaise" price={100} />         
        </div>
    </div>
    </>)
}

export default RestoranSection;
