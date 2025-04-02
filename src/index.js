const name = 'File'

const btnLeft = document.querySelector('.favourite-picks .btn-left')
const btnRight = document.querySelector('.favourite-picks .btn-right')
const container = document.querySelector('.favourite-picks-container')

let containerOffset = 0;

const moveContainer = (offset) => {
  const containerWidth = container.scrollWidth

  const newOffset = containerOffset + offset
  const minOffset = (containerWidth - document.body.clientWidth) * -1
  const maxOffset = 0;
  containerOffset = Math.min(Math.max(minOffset, newOffset), maxOffset);
  container.style.transform = `translateX(${containerOffset}px)`

  btnLeft.disabled = containerOffset >= maxOffset ? true : null;
  btnRight.disabled = containerOffset <= minOffset;
}

moveContainer(0)

btnLeft.addEventListener('click', () => {
  moveContainer(285)
})

btnRight.addEventListener('click', () => {
  moveContainer(-285)
})
