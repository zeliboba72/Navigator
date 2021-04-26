const buttonOffersFirst = document.querySelector(".offers-btn-1");
const buttonOffersSecond = document.querySelector(".offers-btn-2");
const offersYandexMap = document.querySelector(".offers__yandex-map");
const offersSwiper = document.querySelector(".offers__swiper");

buttonOffersSecond.addEventListener("click", () => {
  if (offersYandexMap.classList.contains("active")) {
    return;
  }
  offersSwiper.classList.remove("active");
  offersYandexMap.classList.add("active");
});

buttonOffersFirst.addEventListener("click", () => {
  if (offersSwiper.classList.contains("active")) {
    return;
  }
  offersYandexMap.classList.remove("active");
  offersSwiper.classList.add("active");
});
