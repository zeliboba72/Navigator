const headerBurgerButton = document.querySelector(".header__burger-btn");
const burgerOverlay = document.querySelector(".burger__overlay");
const burgerBody = document.querySelector(".burger__body");
const linkDropdown = document.querySelectorAll(".js-link-dropdown");

let closing = false;

headerBurgerButton.addEventListener("click", () => {
  if (closing === true) {
    return;
  } else if (burgerOverlay.classList.contains("active")) {
    closing = true;
    burgerOverlay.classList.add("remove");
    burgerBody.classList.add("remove");
    headerBurgerButton.classList.add("remove");
    setTimeout(() => {
      headerBurgerButton.classList.remove("active");
      headerBurgerButton.classList.remove("remove");
      burgerBody.classList.remove("active");
      burgerBody.classList.remove("remove");
      burgerOverlay.classList.remove("active");
      burgerOverlay.classList.remove("remove");
      document.body.style.overflow = "visible";
      closing = false;
    }, 600);
  }
  document.body.style.overflow = "hidden";
  headerBurgerButton.classList.add("active");
  burgerOverlay.classList.add("active");
  burgerBody.classList.add("active");
});

linkDropdown.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
