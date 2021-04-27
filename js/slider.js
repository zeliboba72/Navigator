const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");

noUiSlider.create(slider1, {
  start: [519912, 3825000],
  connect: true,
  range: {
    min: 519912,
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
