function slider(slider__item, slider__translateX, slider__button__next, slider__button__prev, slidesToShow = 1, responsive = false) {
  let slider_item = document.querySelectorAll(slider__item),
    slider_transitionx = document.querySelector(slider__translateX),
    slider_button_next = document.querySelector(slider__button__next),
    slider_button_prev = document.querySelector(slider__button__prev),
    slider_container = document.querySelectorAll(".slider__image-container"),
    image = document.querySelectorAll(".slider__image-hover"),
    more = document.querySelectorAll(".slider__image"),
    temp = 0,
    startX = 0,
    endX = 0,
    DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth,
    SLIDE_WIDTH = document.querySelector(".product-item").offsetWidth,
    INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth;

  let slide_width = INNER_SLIDE_WIDTH / slidesToShow;
  let slider_container_array = [];
  for (let i = 0; i < slider_item.length; i++) {
    let slide_container = document.createElement("div");
    slide_container.classList.add("slide-container");
    slide_container.style.width = slide_width + "px";
    let slide_container_content = slider_item[i].cloneNode(true);
    slide_container.append(slide_container_content);
    slider_container_array.push(slide_container);
  }
  slider_transitionx.innerHTML = "";
  slider_container_array.forEach(element => {
    slider_transitionx.append(element);
  });

  slider_transitionx.style.width = slider_item.length * slide_width + "px";

  //responsive
  window.addEventListener(`resize`, () => {
    slider_transitionx.style.transform = `translateX(-0px)`;
    DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
    adaptive(slidesToShow);
  });

  if (responsive) {
    slider_transitionx.style.transform = `translateX(-0px)`;
    DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
    if (DOCUMENT_SLIDER_WIDTH > 1060) {
      adaptive(3);
    }

    if (DOCUMENT_SLIDER_WIDTH <= 1160) {
      adaptive(2);
    }

    if (DOCUMENT_SLIDER_WIDTH <= 820) {
      adaptive(1);
    }
    window.addEventListener(`resize`, () => {
      slider_transitionx.style.transform = `translateX(-0px)`;
      DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
      if (DOCUMENT_SLIDER_WIDTH > 1060) {
        adaptive(3);
      }

      if (DOCUMENT_SLIDER_WIDTH <= 1160) {
        adaptive(2);
      }

      if (DOCUMENT_SLIDER_WIDTH <= 780) {
        adaptive(1);
      }
    }, false);
  }


  function adaptive(slidesShow) {
    let SLIDES = document.querySelectorAll(`.followers-slider .slide-container`),
      INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth;
    SLIDES.forEach(element => {
      element.style.width = (INNER_SLIDE_WIDTH / slidesShow) + "px";
    });

    slider_transitionx.style.width = slider_item.length * parseInt(SLIDES[0].style.width) + "px";
    slidesToShow = slidesShow;
  }


  function scrollSlide(numberOfSlide) {
    if (numberOfSlide > (slider_item.length * slidesToShow) / slidesToShow - slidesToShow) numberOfSlide = temp = 0;
    else if (numberOfSlide < 0) numberOfSlide = temp = slider_item.length - slidesToShow;
    slider_transitionx.style.transform = `translateX(-${ ((parseInt(slider_transitionx.style.width) / slider_item.length) * numberOfSlide)}px)`;
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

  let slider_image = document.querySelectorAll(".product-item__image-container"),
    more_info = document.querySelectorAll(".product-item__hover"),
    img = document.querySelectorAll(".product-item__image");

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

export default slider;