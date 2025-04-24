const slides = document.querySelectorAll('.slide');
const container = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
let current = 0;
let interval;

// Crear puntos
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  container.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

function goToSlide(index) {
  current = index;
  updateCarousel();
  resetInterval();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function startAutoSlide() {
  interval = setInterval(nextSlide, 4000);
}

function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}

updateCarousel();
startAutoSlide();