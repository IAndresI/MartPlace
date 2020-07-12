function slider(slider__item, slider__translateX, slider__button__next, slider__button__prev, slidesToShow = 1) {
  let slider_item = document.querySelectorAll(slider__item),
    slider_transitionx = document.querySelector(slider__translateX),
    slider_button_next = document.querySelector(slider__button__next),
    slider_button_prev = document.querySelector(slider__button__prev),
    slider_container = document.querySelectorAll(".slider__image-container"),
    image = document.querySelectorAll(".slider__image-hover"),
    more = document.querySelectorAll(".slider__image"),
    temp = 0,
    startX = 0,
    endX = 0;

  slider_transitionx.style.width = slider_item.length * 100 / slidesToShow + "%";

  function scrollSlide(numberOfSlide) {
    if (numberOfSlide > (slider_item.length * slidesToShow) / slidesToShow - slidesToShow) numberOfSlide = temp = 0;
    else if (numberOfSlide < 0) numberOfSlide = temp = slider_item.length - slidesToShow;
    slider_transitionx.style.transform = `translateX(-${ ((100 / slider_item.length) * numberOfSlide)}%)`;
  }
  scrollSlide(temp);

  slider_button_next.addEventListener("click", () => {
    scrollSlide(++temp);
  });

  slider_button_prev.addEventListener("click", () => {
    scrollSlide(--temp);
  });

  function scrollSlideOnTouch() {
    if (endX > startX + 70) {
      scrollSlide(--temp);
    }
    if (endX < startX - 70) {
      scrollSlide(++temp);
    }
  }

  slider_transitionx.addEventListener("mousedown", (event) => {
    startX = event.screenX;
  });

  slider_transitionx.addEventListener("mouseup", (event) => {
    endX = event.screenX;
    scrollSlideOnTouch();
  });

  slider_transitionx.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  slider_transitionx.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;
    scrollSlideOnTouch();
  });

  for (let i = 0; i < slider_container.length; i++) {
    slider_container[i].addEventListener('mouseenter', () => {
      image[i].style.width = "100%";
      more[i].style.width = "0";
    });

    slider_container[i].addEventListener('mouseleave', () => {
      image[i].style.width = "0";
      more[i].style.width = "100%";
    });
  }
}

export default slider;