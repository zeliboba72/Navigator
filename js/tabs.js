// offers
const tabsOffers = document.querySelector(".offers__tabs");
const overlayOffers = document.querySelector(".offers__tabs-overlay");
const buttonsOffers = document.querySelectorAll(".offers__tabs-btn");

animateTabs(buttonsOffers, overlayOffers, tabsOffers);

// purchase
const tabsPurchase = document.querySelector(".purchase__tabs");
const overlayPurchase = document.querySelector(".purchase__tabs-overlay");
const buttonsPurchase = document.querySelectorAll(".purchase__tabs-btn");

animateTabs(buttonsPurchase, overlayPurchase, tabsPurchase);

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
