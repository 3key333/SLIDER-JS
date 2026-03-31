const slideKeys = ['first', 'second', 'third'];

const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const mainImage = document.querySelector('.img-cart');

let currentIndex = 0;

function setActiveClass(element, activeClass, inactiveClass, isActive) {
    element.classList.toggle(activeClass, isActive);
    element.classList.toggle(inactiveClass, !isActive);
}

function renderSlider(index) {
    currentIndex = index;
    mainImage.src = `images/${slideKeys[index]}-img.svg`;

    slideKeys.forEach((key, i) => {
        const isActive = i === currentIndex;

        const circle = document.querySelector(`.${key}-circle`);
        const navLink = document.querySelector(`.${key}-navbar-link`);
        const city = document.querySelector(`.${key}-slide-par-city`);
        const area = document.querySelector(`.${key}-slide-par-area`);
        const repair = document.querySelector(`.${key}-slide-par-repair`);

        circle.src = isActive ? 'images/sircle-active.svg' : 'images/sircle-dis.svg';
        setActiveClass(navLink, 'active-word-link', 'dis-word-link', isActive);
        setActiveClass(city, 'par-active', 'par-dis', isActive);
        setActiveClass(area, 'par-active', 'par-dis', isActive);
        setActiveClass(repair, 'par-active', 'par-dis', isActive);
    });
}

rightArrow.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentIndex < slideKeys.length - 1) {
        renderSlider(currentIndex + 1);
    }
});

leftArrow.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentIndex > 0) {
        renderSlider(currentIndex - 1);
    }
});

renderSlider(currentIndex);






