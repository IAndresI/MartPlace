"use strict";
import tabs from "./tabs";
import slider from "./slider";
import rate from "./rate";
import product from "./product";
import rangeSlider from "./rangeSlider";
import navMiniDropdown from "./navMiniDropdown";
import categoryPageDropdown from "./categoryPageDropdown";
import productApeearance from "./categoryPageProductApeearance";
import cardHover from "./cardHover";

document.addEventListener("DOMContentLoaded", function () {


  tabs({
    button: ".products__category-button",
    content: ".product-item--tab",
    activeClass: ".category--active",
    noContentAlert: ".nothing-find",
    animate: true,
    tabToShow: 0
  });
  tabs({
    button: ".blog__posts .blog__button",
    content: ".blog__posts .blog__list",
    activeClass: ".blog__button--active",
    noContentAlert: ".nothing-find",
    tabToShow: 0
  });


  slider({
    slider__item: ".product-item--small",
    slider__translateX: ".products-slider__translatex--small",
    slider__button__next: ".products-slider__next--slider1",
    slider__button__prev: ".products-slider__prev--slider1",
    slidesToShow: 3,
    responsive: [{
        breakPoint: 1160,
        slidesToShow: 2
      },
      {
        breakPoint: 780,
        slidesToShow: 1
      }
    ]
  });
  slider({
    slider__item: ".product-item--big",
    slider__translateX: ".products-slider__translatex--big",
    slider__button__next: ".products-slider__next",
    slider__button__prev: ".products-slider__prev"
  });
  product();
  navMiniDropdown();
  rangeSlider();
  rate(".rate-star");
  productApeearance();
  categoryPageDropdown();
  cardHover(".product-item__image", ".product-item__image-container", ".product-item__hover");
});