import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

const Carusel_Categories = (): React.ReactElement => {
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
  const btnLeftRef = useRef<HTMLButtonElement>(null);
  const btnRightRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState(0);
  const containerWidth = containerRef.current ? containerRef.current.scrollWidth : 0;

  return (
    <>
      <div className="categories">
        <h2 className="categories-title">Categories</h2>
        <div
          className="categories-container"
          ref={containerRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
          <Card img="img/categories-img-1.png" title="Pizza" />
        </div>
        {offset !== (containerWidth - document.body.scrollWidth + 115) * -1 && (
          <button
            className="btn-right btn-cat"
            ref={btnRightRef}
            onClick={() =>
              setOffset(prevOffset => moveContainer(containerRef.current, prevOffset, -300))
            }
          >
            <img className="arrow-right" src="img/arrow-right.svg" alt="" />
          </button>
        )}
        {offset !== 0 && (
          <button
            className="btn-left btn-cat"
            ref={btnLeftRef}
            onClick={() =>
              setOffset(prevOffset => moveContainer(containerRef.current, prevOffset, 300))
            }
          >
            <img className="arrow-left" src="img/arrow-left.svg" alt="" />
          </button>
        )}
        <div className="all-categories">
          <Link to="/categories" className="btn-all-categories">
            View all categories
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carusel_Categories;
