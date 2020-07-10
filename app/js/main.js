"use strict";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";

document.addEventListener("DOMContentLoaded", function () {
  slider(".slider__item", ".slider__translatex", ".products-slider__arrows-next", ".products-slider__arrows-prev");
  rate(".rate-star");
  tabs();
});