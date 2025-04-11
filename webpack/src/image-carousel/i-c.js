const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".carousel-button.prev");
const nextBtn = document.querySelector(".carousel-button.next");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Setup dots
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

function updateSlide(index) {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  updateSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(prevIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, i) =>
  dot.addEventListener("click", () => updateSlide(i))
);

// Auto-play every 5s
setInterval(nextSlide, 5000);
