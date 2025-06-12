import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card';
import 'swiper/css';
import './swiper.css';

const categories = [
  { title: 'Pizza', img: '/img/categories-img-1.png' },
  { title: 'Burger', img: '/img/categories-img-1.png' },
  { title: 'Sushi', img: '/img/categories-img-1.png' },
  { title: 'Pasta', img: '/img/categories-img-1.png' },
  { title: 'Salad', img: '/img/categories-img-1.png' },
  { title: 'Dessert', img: '/img/categories-img-1.png' },
];

const CategoriesSwiper: React.FC = () => {
  return (
    <div className="categories-swiper">
      <h2 className="categories-title">Categories</h2>
      <Swiper
        modules={[]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        touchRatio={1.5}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 16
          },
          1047: {
            slidesPerView: 4.2,
            spaceBetween: 16
          }
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Card img={category.img} title={category.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSwiper; 