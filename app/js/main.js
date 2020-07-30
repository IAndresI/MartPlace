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
  product();
  navMiniDropdown();
  rangeSlider();
  rate(".rate-star");
  productApeearance();
  categoryPageDropdown();
  slider(".product-item--big", ".products-slider__translatex--big", ".products-slider__next", ".products-slider__prev", 1, false);
  slider(".product-item--small", ".products-slider__translatex--small", ".products-slider__next--slider1", ".products-slider__prev--slider1", 3, true);
  cardHover(".product-item__image", ".product-item__image-container", ".product-item__hover");
});