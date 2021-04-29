// buttons
const purchaseButtonFirst = document.querySelector(".purchase__tabs-btn.btn-1");
const purchaseButtonSecond = document.querySelector(
  ".purchase__tabs-btn.btn-2"
);
const purchaseButtonThird = document.querySelector(".purchase__tabs-btn.btn-3");

// blocks
const purchaseStages = document.querySelector(".purchase__stages");
const purchasePlan = document.querySelector(".purchase__plan");
const purchaseMortgage = document.querySelector(".purchase__mortgage");

purchaseButtonFirst.addEventListener("click", () => {
  if (purchaseStages.classList.contains("active")) {
    return;
  }
  purchasePlan.classList.remove("active");
  purchaseMortgage.classList.remove("active");
  purchaseStages.classList.add("active");
});

purchaseButtonSecond.addEventListener("click", () => {
  if (purchasePlan.classList.contains("active")) {
    return;
  }
  purchaseStages.classList.remove("active");
  purchaseMortgage.classList.remove("active");
  purchasePlan.classList.add("active");
});

purchaseButtonThird.addEventListener("click", () => {
  if (purchaseMortgage.classList.contains("active")) {
    return;
  }
  purchasePlan.classList.remove("active");
  purchaseStages.classList.remove("active");
  purchaseMortgage.classList.add("active");
});
