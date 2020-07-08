function slider(slider__item, slider__translateX, slider__button__next, slider__button__prev) {
  let slider_item = document.querySelectorAll(slider__item),
    slider_transitionx = document.querySelector(slider__translateX),
    slider_button_next = document.querySelector(slider__button__next),
    slider_button_prev = document.querySelector(slider__button__prev),
    temp = 0,
    startX = 0,
    endX = 0;

  slider_transitionx.style.width = slider_item.length * 100 + "%";

  function scrollSlide(numberOfSlide) {
    if (numberOfSlide >= slider_item.length) numberOfSlide = temp = 0;
    else if (numberOfSlide < 0) numberOfSlide = temp = slider_item.length - 1;
    slider_transitionx.style.transform = `translateX(-${ (100 / slider_item.length) * numberOfSlide }%)`;
  }
  scrollSlide(temp);

  function scrollSlideOnTouch() {
    if (endX > startX + 70) {
      scrollSlide(--temp);
    }
    if (endX < startX - 70) {
      scrollSlide(++temp);
    }
  }

  slider_button_next.addEventListener("click", function () {
    scrollSlide(++temp);
  });

  slider_button_prev.addEventListener("click", function () {
    scrollSlide(--temp);
  });

  slider_transitionx.addEventListener("mousedown", function (event) {
    startX = event.screenX;
  });

  slider_transitionx.addEventListener("mouseup", function (event) {
    endX = event.screenX;
    scrollSlideOnTouch();
  });

  slider_transitionx.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
  });

  slider_transitionx.addEventListener("touchend", function (event) {
    endX = event.changedTouches[0].clientX;
    scrollSlideOnTouch();
  });
}

export default slider;