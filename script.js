let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides[currentSlide].classList.add('active');
}

function hideSlide() {
  slides[currentSlide].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function startSlideshow() {
  showSlide();
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

startSlideshow();