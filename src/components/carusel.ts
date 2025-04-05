const moveContainer = (container: HTMLElement, btnLeft: HTMLButtonElement, btnRight: HTMLButtonElement, prevOffset: number, offset: number) => {
    const containerWidth = container.scrollWidth

    let newOffset = prevOffset + offset
    const minOffset = (containerWidth - document.body.clientWidth) * -1
    const maxOffset = 0;
    newOffset = Math.min(Math.max(minOffset, newOffset), maxOffset);
    container.style.transform = `translateX(${newOffset}px)`

    btnLeft.disabled = newOffset >= maxOffset;
    btnRight.disabled = newOffset <= minOffset;

    return newOffset;
}

/**
 * Инициализация карусели
 * @param container html элемент который будет крутиться
 * @param btnLeft html button element, кнопка влево
 * @param btnRight html button element, кнопка враво
 */
export function initCarusel(container: HTMLElement, btnLeft: HTMLButtonElement, btnRight: HTMLButtonElement) {
    let containerOffset = 0;

    containerOffset = moveContainer(container, btnLeft, btnRight, containerOffset, 0)

    btnLeft.addEventListener('click', () => {
        containerOffset = moveContainer(container, btnLeft, btnRight, containerOffset, 285)
    })

    btnRight.addEventListener('click', () => {
        containerOffset = moveContainer(container, btnLeft, btnRight, containerOffset, -285)
    })
}

