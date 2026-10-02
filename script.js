const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const slides = document.querySelectorAll(".hero-img");
let currentSlide = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}

const galleryButtons = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lbImage = document.querySelector(".lb-image");
const lbCaption = document.querySelector(".lb-caption");
const lbClose = document.querySelector(".lb-close");

if (galleryButtons.length && lightbox && lbImage && lbCaption && lbClose) {
  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const src = button.dataset.src || button.querySelector("img")?.src || "";
      const alt = button.querySelector("img")?.alt || "Gallery image";
      lbImage.src = src;
      lbImage.alt = alt;
      lbCaption.textContent = alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lbClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}