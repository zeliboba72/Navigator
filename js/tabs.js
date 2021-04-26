const tabsOffers = document.querySelector(".offers__tabs");
const overlayOffers = document.querySelector(".offers__tabs-overlay");
const buttonsOffers = document.querySelectorAll(".offers__tabs-btn");

animateTabs(buttonsOffers, overlayOffers, tabsOffers);

function animateTabs(btns, overlay, container) {
  btns.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("active")) {
        return;
      }
      overlay.style.left =
        el.getBoundingClientRect().left -
        container.getBoundingClientRect().left -
        1 +
        "px";
      overlay.style.width = el.getBoundingClientRect().width + "px";
      btns.forEach((e) => {
        e.classList.remove("active");
      });
      el.classList.add("active");
    });
  });
}
