const swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    759: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});
