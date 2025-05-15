import React from 'react';
import CategSectionCard from './section_card';

const CategSection = (): React.ReactElement => {
  const categories = [
    { title: 'Pizza', img: '/img/categories-section-card-pizza.png' },
    { title: 'Burgers', img: '/img/categories-section-card-burger.png' },
    { title: 'Sushi', img: '/img/categories-section-card-sushi.png' },
    { title: 'Asian', img: '/img/categories-section-card-asian.png' },
    { title: 'Comfort', img: '/img/categories-section-card-comfort.png' },
    { title: 'Dessert', img: '/img/categories-section-card-dessert.png' },
  ];

  return (
    <>
      <div className="categories-section">
        {categories.map((category, index) => (
          <CategSectionCard 
            key={index}
            img={category.img}
            title={category.title}
          />
        ))}
      </div>
    </>
  );
};

export default CategSection;
