const swiperIntro = new Swiper(".intro__swiper", {
  slidesPerView: 4,
  watchSlidesVisibility: true,
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
  watchSlidesVisibility: true,
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

const swiperWhatsNewNews = new Swiper(".whats-new__news-swiper", {
  spaceBetween: 15,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    600: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".btn-next-news",
    prevEl: ".btn-prev-news",
  },
  pagination: {
    el: ".pagination-news",
  },
  observer: true,
  observeParents: true,
});

const swiperWhatsNewStories = new Swiper(".whats-new__stories-swiper", {
  spaceBetween: 15,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    600: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".btn-next-stories",
    prevEl: ".btn-prev-stories",
  },
  pagination: {
    el: ".pagination-stories",
  },
  observer: true,
  observeParents: true,
});

const swiperWhatsNewArticles = new Swiper(".whats-new__articles-swiper", {
  spaceBetween: 15,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    600: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".btn-next-articles",
    prevEl: ".btn-prev-articles",
  },
  pagination: {
    el: ".pagination-articles",
  },
  observer: true,
  observeParents: true,
});
