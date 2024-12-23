const slider = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;
let autoSlice;

function updateSlice() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function restartAutoSlide() {
  clearInterval(autoSlice);
  autoSlice = setInterval(nextSlide, 3000);
}

function nextSlide() {
  currentIndex++;

  if (currentIndex >= slide.length) {
    currentIndex = 0;
  }
  updateSlice();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slide.length - 1;
  }
  updateSlice();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  restartAutoSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  restartAutoSlide();
});

autoSlice = setInterval(nextSlide, 3000);
