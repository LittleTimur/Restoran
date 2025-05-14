import { createRoot } from 'react-dom/client';
import React from 'react';
import Navi from './Navigat';

declare const module: {
  hot?: {
    accept(path?: string, callback?: () => void): void;
  };
};

const rootHtmlElement = document.getElementById('root');
if (rootHtmlElement) {
  const root = createRoot(rootHtmlElement);
  root.render(<Navi />);
}

// import { initCarusel } from './components/carusel'
//
// const container = document.querySelector<HTMLElement>('.favourite-picks-container')
// const btnLeft = document.querySelector<HTMLButtonElement>('.favourite-picks .btn-left')
// const btnRight = document.querySelector<HTMLButtonElement>('.favourite-picks .btn-right')
// if (container && btnLeft && btnRight) {
//     initCarusel(container, btnLeft, btnRight)
// }
//
// const container2 = document.querySelector<HTMLElement>('.new-arrivals-container')
// const btnLeft2 = document.querySelector<HTMLButtonElement>('.new-arrivals .btn-left')
// const btnRight2 = document.querySelector<HTMLButtonElement>('.new-arrivals .btn-right')
// if (container2 && btnLeft2 && btnRight2) {
//     initCarusel(container2, btnLeft2, btnRight2)
// }
//
// const container3 = document.querySelector<HTMLElement>('.categories-container')
// const btnLeft3 = document.querySelector<HTMLButtonElement>('.categories .btn-left')
// const btnRight3 = document.querySelector<HTMLButtonElement>('.categories .btn-right')
// if (container3 && btnLeft3 && btnRight3) {
//     initCarusel(container3, btnLeft3, btnRight3)
// }
