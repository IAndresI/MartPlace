"use strict";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";
import rangeSlider from "./rangeSlider";
import navMiniDropdown from "./navMiniDropdown";

document.addEventListener("DOMContentLoaded", function () {
  tabs();
  slider(".product-item__item--slider0", ".product-item__translatex--slider0", ".products-slider__next", ".products-slider__prev", 1, false);
  slider(".products__item--slider1", ".product-item__translatex--slider1", ".products-slider__next--slider1", ".products-slider__prev--slider1", 3, true);
  rate(".rate-star");
  navMiniDropdown();
});