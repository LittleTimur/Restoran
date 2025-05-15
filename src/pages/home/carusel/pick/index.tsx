import React, { useRef, useState } from 'react';
import Card from '../card';

const Carusel_Pick = (): React.ReactElement => {
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
      <div className="favourite-picks">
        <h2 className="favourite-picks__title">Our favourite picks</h2>
        <div
          className="favourite-picks-container"
          ref={containerRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <Card img="/img/pick_img.png" title="Mira" review_text="4.2  Very Good" />
          <Card img="/img/pick_img.png" title="Kara Fin" review_text="4.2  Very Good" />
          <Card img="/img/pick_img.png" title="'T Kuyltje" review_text="4.2  Very Good" />
          <Card img="/img/pick_img.png" title="Пупупу" review_text="4.9  Very Good" />
          <Card img="/img/pick_img.png" title="Красотка" review_text="4.9  Very Good" />
          <Card img="/img/pick_img.png" title="Я ем людей" review_text="5.0  Very Good" />
        </div>
        {offset !== 0 && (
          <button
            className="btn-left"
            ref={btnLeftRef}
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
            ref={btnRightRef}
            onClick={() =>
              setOffset(prevOffset => moveContainer(containerRef.current, prevOffset, -300))
            }
          >
            <img className="arrow-right" src="/img/arrow-right.svg" alt="" />
          </button>
        )}
      </div>
    </>
  );
};

export default Carusel_Pick;
