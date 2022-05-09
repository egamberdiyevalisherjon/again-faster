const swiper = new Swiper(".similar .swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
