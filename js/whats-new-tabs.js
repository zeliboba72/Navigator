// buttons
const whatsNewButtonFirst = document.querySelector(".whats-new-btn-1");
const whatsNewButtonSecond = document.querySelector(".whats-new-btn-2");
const whatsNewButtonThird = document.querySelector(".whats-new-btn-3");

// pagination
const whatsNewPaginationWrapperNews = document.querySelector(
  ".whats-new__swiper-btns-pagination-wrapper.wrapper--news"
);
const whatsNewPaginationWrapperStories = document.querySelector(
  ".whats-new__swiper-btns-pagination-wrapper.wrapper--stories"
);
const whatsNewPaginationWrapperArticles = document.querySelector(
  ".whats-new__swiper-btns-pagination-wrapper.wrapper--articles"
);

// blocks(swipers)
const whatsNewBlockNews = document.querySelector(".whats-new__news-swiper");
const whatsNewBlockStories = document.querySelector(
  ".whats-new__stories-swiper"
);
const whatsNewBlockArticles = document.querySelector(
  ".whats-new__articles-swiper"
);

whatsNewButtonFirst.addEventListener("click", () => {
  if (whatsNewBlockNews.classList.contains("active")) {
    return;
  }
  whatsNewBlockStories.classList.remove("active");
  whatsNewBlockArticles.classList.remove("active");
  whatsNewPaginationWrapperStories.classList.remove("active");
  whatsNewPaginationWrapperArticles.classList.remove("active");
  whatsNewPaginationWrapperNews.classList.add("active");
  whatsNewBlockNews.classList.add("active");
});

whatsNewButtonSecond.addEventListener("click", () => {
  if (whatsNewBlockStories.classList.contains("active")) {
    return;
  }
  whatsNewBlockNews.classList.remove("active");
  whatsNewBlockArticles.classList.remove("active");
  whatsNewPaginationWrapperNews.classList.remove("active");
  whatsNewPaginationWrapperArticles.classList.remove("active");
  whatsNewPaginationWrapperStories.classList.add("active");
  whatsNewBlockStories.classList.add("active");
});

whatsNewButtonThird.addEventListener("click", () => {
  if (whatsNewBlockArticles.classList.contains("active")) {
    return;
  }
  whatsNewBlockNews.classList.remove("active");
  whatsNewBlockStories.classList.remove("active");
  whatsNewPaginationWrapperNews.classList.remove("active");
  whatsNewPaginationWrapperStories.classList.remove("active");
  whatsNewPaginationWrapperArticles.classList.add("active");
  whatsNewBlockArticles.classList.add("active");
});
