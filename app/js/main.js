"use strict";
import slider from "./slider";
import rate from "./rate";
import tabs from "./tabs";
import product from "./product";
import rangeSlider from "./rangeSlider";
import navMiniDropdown from "./navMiniDropdown";
import categoryPageDropdown from "./categoryPageDropdown";
import productApeearance from "./categoryPageProductApeearance";

document.addEventListener("DOMContentLoaded", function () {


  tabs({
    button: ".blog__posts .blog__button",
    content: ".blog__posts .blog__list",
    activeClass: ".blog__button--active",
    tabToShow: 0
  });
  tabs({
    button: ".products__category-button",
    content: ".product-item--tab",
    activeClass: ".category--active",
    noContentAlert: true,
    animate: true,
    tabToShow: 1
  });
  product();
  navMiniDropdown();
  rangeSlider();
  rate(".rate-star");
  productApeearance();
  categoryPageDropdown();
  slider(".product-item--big", ".products-slider__translatex--big", ".products-slider__next", ".products-slider__prev", 1, false);
  slider(".product-item--small", ".products-slider__translatex--small", ".products-slider__next--slider1", ".products-slider__prev--slider1", 3, true);

  let slider_image = document.querySelectorAll(".product-item__image-container"),
    more_info = document.querySelectorAll(".product-item__hover"),
    img = document.querySelectorAll(".product-item__image");

  if (slider_image) {
    for (let i = 0; i < slider_image.length; i++) {
      slider_image[i].addEventListener('mouseenter', () => {
        more_info[i].style.width = "100%";
        img[i].style.width = "0";
      });

      slider_image[i].addEventListener('mouseleave', () => {
        more_info[i].style.width = "0";
        img[i].style.width = "100%";
      });
    }
  }
});