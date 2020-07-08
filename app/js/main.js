"use strict";
import search from "./search";
import slider from "./slider";

document.addEventListener("DOMContentLoaded", function () {
  search(".button", ".box");
  slider(".slider__item", ".slider__translatex", ".products-slider__arrows-next", ".products-slider__arrows-prev");
});