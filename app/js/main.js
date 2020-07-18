"use strict";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";
import rangeSlider from "./rangeSlider";

document.addEventListener("DOMContentLoaded", function () {
  slider(".slider__item", ".slider__translatex", ".products-slider__next", ".products-slider__prev");
  slider(".products__item--slider1", ".slider__translatex--slider1", ".products-slider__next--slider1", ".products-slider__prev--slider1", 3);
  rate(".rate-star");
  tabs();
  rangeSlider();



  let slider_image = document.querySelectorAll(".item__image-container"),
    more_info = document.querySelectorAll(".item__hover"),
    image = document.querySelectorAll(".item__image-newest");

  for (let i = 0; i < slider_image.length; i++) {
    slider_image[i].addEventListener('mouseenter', () => {
      more_info[i].style.width = "100%";
      image[i].style.width = "0";
    });

    slider_image[i].addEventListener('mouseleave', () => {
      more_info[i].style.width = "0";
      image[i].style.width = "100%";
    });
  }

});