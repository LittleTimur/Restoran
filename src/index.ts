import { initCarusel } from './components/carusel'

const container = document.querySelector<HTMLElement>('.favourite-picks-container')
const btnLeft = document.querySelector<HTMLButtonElement>('.favourite-picks .btn-left')
const btnRight = document.querySelector<HTMLButtonElement>('.favourite-picks .btn-right')
if (container && btnLeft && btnRight) {
    initCarusel(container, btnLeft, btnRight)
}
