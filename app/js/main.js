"use strict";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";
import rangeSlider from "./rangeSlider";
import navMiniDropdown from "./navMiniDropdown";

document.addEventListener("DOMContentLoaded", function () {
  tabs();
  slider(".product-item--big", ".products-slider__translatex--big", ".products-slider__next", ".products-slider__prev", 1, false);
  slider(".product-item--small", ".products-slider__translatex--small", ".products-slider__next--slider1", ".products-slider__prev--slider1", 3, true);
  rate(".rate-star");
  navMiniDropdown();

});