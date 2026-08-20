/* =========================================================================
   CAROUSEL BEHAVIOR
   Plain JavaScript, no libraries. Handles: Prev/Next arrows, the dots,
   and (optionally) auto-play. Read the comments — each block does one job.
   ========================================================================= */

// Grab the pieces of the carousel we need to control.
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".carousel-arrow.prev");
const nextButton = document.querySelector(".carousel-arrow.next");

// Keep track of which slide is currently showing.
let currentIndex = 0;

// Turns OFF the current slide/dot, turns ON the one at `index`.
function goToSlide(index) {
  // Wrap around: if we go past the last slide, jump to the first (and vice versa).
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides[currentIndex].classList.remove("is-active");
  dots[currentIndex].classList.remove("is-active");

  currentIndex = index;

  slides[currentIndex].classList.add("is-active");
  dots[currentIndex].classList.add("is-active");
}

// Wire up the arrow buttons.
prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

// Wire up each dot to jump straight to its slide.
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

/* ---- OPTIONAL AUTO-PLAY ----
   Uncomment the block below if you want the carousel to advance on its own
   every few seconds. It pauses while the visitor's mouse is over it, and it
   respects "reduce motion" accessibility settings.

const carousel = document.querySelector(".carousel");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  let autoplayTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);

  carousel.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
  carousel.addEventListener("mouseleave", () => {
    autoplayTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);
  });
}
*/


/* =========================================================================
   FOOTER YEAR
   Fills in the current year automatically so you never have to update the
   copyright line by hand.
   ========================================================================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
