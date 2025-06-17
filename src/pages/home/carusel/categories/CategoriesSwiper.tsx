import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card';
import 'swiper/css';
import './swiper.css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';

const categories = [
  { title: 'Pizza', img: '/img/categories-img-pizza.png' },
  { title: 'Burger', img: '/img/categories-img-burger.png' },
  { title: 'Sushi', img: '/img/categories-img-sushi.png' },
  { title: 'Asian', img: '/img/categories-img-asian.png' },
  { title: 'Snacks', img: '/img/categories-img-snacks.png' },
  { title: 'Dessert', img: '/img/categories-img-dessert.png' },
];

const CategoriesSwiper: React.FC = () => {
  return (
    <div className="categories-swiper">
      <h2 className="categories-title">Categories</h2>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        touchRatio={1.5}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          610: {
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
        scrollbar={{
          el: '.swiper-scrollbar',
          hide: false,
          draggable: true
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Card img={category.img} title={category.title} />
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
};

export default CategoriesSwiper; 