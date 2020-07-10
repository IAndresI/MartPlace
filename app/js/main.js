"use strict";
import search from "./search";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";

document.addEventListener("DOMContentLoaded", function () {
  search(".button", ".box");
  slider(".slider__item", ".slider__translatex", ".products-slider__arrows-next", ".products-slider__arrows-prev");
  rate(".rate-star");
  tabs();

});