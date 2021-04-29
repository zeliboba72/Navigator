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
  lazy: true,
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
  lazy: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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

const swiperWhyInfo = new Swiper(".why__info-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".why__swiper-btn-next",
    prevEl: ".why__swiper-btn-prev",
  },
  pagination: {
    el: ".why__swiper-pagination",
  },
});

const swiperWhyItems = new Swiper(".why__items-swiper", {
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    900: {
      slidesPerView: 2.1,
    },
  },
});
