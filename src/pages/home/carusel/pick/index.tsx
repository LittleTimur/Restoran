import React, { useRef, useState, useEffect } from 'react';
import Card from '../card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

const picks = [
  { title: 'Mira', review_text: '4.2  Очень хорошо', img: '/img/restoran-mira.png' },
  { title: 'Kara Fin', review_text: '4.2  Очень хорошо', img: '/img/restoran-kara fin.png' },
  { title: '\'T Kuyltje', review_text: '4.2  Очень хорошо', img: '/img/restoran-kuyltje.png' },
  { title: 'Laplas', review_text: '4.9  Очень хорошо', img: '/img/restoran-laplas.png' },
  { title: 'Ria', review_text: '4.9  Очень хорошо', img: '/img/restoran-ria.png' },
  { title: 'To Space', review_text: '5.0  Очень хорошо', img: '/img/restoran-to space.png' },
];

const Carusel_Pick = (): React.ReactElement => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1279);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1279);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Original carousel logic
  const moveContainer = (
    container: HTMLElement | null,
    prevOffset: number,
    offset: number
  ): number => {
    if (!container) {
      return prevOffset; // Возвращаем предыдущее смещение, если один из элементов не найден
    }
    const containerWidth = container.scrollWidth;
    let newOffset = prevOffset + offset;
    const minOffset = (containerWidth - document.body.clientWidth + 115) * -1;
    const maxOffset = 0;
    newOffset = Math.min(Math.max(minOffset, newOffset), maxOffset);
    return newOffset;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const containerWidth = containerRef.current ? containerRef.current.scrollWidth : 0;

  return (
    <div className="favourite-picks">
      <h2 className="favourite-picks__title">Our favourite picks</h2>
      {isTablet ? (
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
            540: {
              slidesPerView: 1.1,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 1.1,
              spaceBetween: 16
            },
            830: {
              slidesPerView: 1.6,
              spaceBetween: 16
            },
            1079: {
              slidesPerView: 2.2,
              spaceBetween: 16
            }
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
          }}
        >
          {picks.map((pick, index) => (
            <SwiperSlide key={index}>
              <Card img={pick.img} title={pick.title} review_text={pick.review_text} />
            </SwiperSlide>
          ))}
          <div className="swiper-scrollbar"></div>
        </Swiper>
      ) : (
        <>
          <div
            className="favourite-picks-container"
            ref={containerRef}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {picks.map((pick, index) => (
              <Card key={index} img={pick.img} title={pick.title} review_text={pick.review_text} />
            ))}
          </div>
          {offset !== 0 && (
            <button
              className="btn-left"
              onClick={() =>
                setOffset(prevOffset => moveContainer(containerRef.current, prevOffset, 300))
              }
            >
              <img className="arrow-left" src="/img/arrow-left.svg" alt="" />
            </button>
          )}
          {offset !== (containerWidth - document.body.scrollWidth + 115) * -1 && (
            <button
              className="btn-right"
              onClick={() =>
                setOffset(prevOffset => moveContainer(containerRef.current, prevOffset, -300))
              }
            >
              <img className="arrow-right" src="/img/arrow-right.svg" alt="" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Carusel_Pick;
