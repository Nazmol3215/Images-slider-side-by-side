let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const slideWidth = items[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSliderPosition();
}

window.addEventListener('resize', updateSliderPosition);
