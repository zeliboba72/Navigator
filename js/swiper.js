const swiperIntro = new Swiper(".intro__swiper", {
  slidesPerView: 4,
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

const swiperOffers = new Swiper(".offers__swiper", {
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    550: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperAboutImages = new Swiper(".about__images-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperAboutContent = new Swiper(".about__content-swiper", {
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    840: {
      slidesPerView: 2.2,
    },
  },
});
