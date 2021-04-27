const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");

noUiSlider.create(slider1, {
  start: [500000, 3825000],
  connect: true,
  step: 1,
  range: {
    min: 500000,
    max: 3825000,
  },
});

noUiSlider.create(slider2, {
  start: [5, 15],
  connect: true,
  step: 1,
  range: {
    min: [5],
    max: [15],
  },
});

const minOfFirstSlider = document.querySelector(".js-min-first");
const maxOfFirstSlider = document.querySelector(".js-max-first");

slider1.noUiSlider.on("update", function (values) {
  minOfFirstSlider.innerHTML = `${Math.round(values[0])
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р`;
  maxOfFirstSlider.innerHTML = `${Math.round(values[1])
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р`;
});

const minOfSecondSlider = document.querySelector(".js-min-second");
const maxOfSecondSlider = document.querySelector(".js-max-second");

slider2.noUiSlider.on("update", function (values) {
  minOfSecondSlider.innerHTML = `${Math.round(values[0])} соток`;
  maxOfSecondSlider.innerHTML = `${Math.round(values[1])} соток`;
});
