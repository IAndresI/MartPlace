function slider({
  slider__item,
  slider__translateX,
  slider__button__next,
  slider__button__prev,
  slidesToShow = 1,
  responsive = false
}) {

  let slider_item = document.querySelectorAll(slider__item),
    slider_transitionx = document.querySelector(slider__translateX),
    slider_button_next = document.querySelector(slider__button__next),
    slider_button_prev = document.querySelector(slider__button__prev),
    temp = 0,
    startX = 0,
    endX = 0,
    slidesToShowOriginal = slidesToShow;

  if (slider_transitionx) {
    let DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth,
      INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth,
      slide_width = INNER_SLIDE_WIDTH / slidesToShow,
      slider_container_array = [];

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

    if (responsive) {
      let biggestBreakPoint = 0;
      slider_transitionx.style.transform = `translateX(-0px)`;
      responsive.forEach(element => {
        if (DOCUMENT_SLIDER_WIDTH < element.breakPoint) {
          adaptive(element.slidesToShow);
        }
      });
      window.addEventListener(`resize`, () => {
        slider_transitionx.style.transform = `translateX(-0px)`;
        DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
        responsive.forEach(element => {
          if (DOCUMENT_SLIDER_WIDTH < element.breakPoint) {
            adaptive(element.slidesToShow);
          }
          if (element.breakPoint > biggestBreakPoint) biggestBreakPoint = element.breakPoint;
        });
        if (DOCUMENT_SLIDER_WIDTH > biggestBreakPoint) {
          adaptive(slidesToShow);
        }
      });
    } else {
      window.addEventListener(`resize`, () => {
        slider_transitionx.style.transform = `translateX(-0px)`;
        DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
        adaptive(slidesToShow);
      });
    }

    function adaptive(slidesShow) {
      let SLIDES = document.querySelectorAll(`${slider__translateX}>.slide-container`),
        INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth;
      SLIDES.forEach(element => {
        element.style.width = (INNER_SLIDE_WIDTH / slidesShow) + "px";
      });
      slider_transitionx.style.width = slider_item.length * parseInt(SLIDES[0].style.width) + "px";
      slidesToShowOriginal = slidesShow;
    }

    // Slide Scroll

    function scrollSlide(numberOfSlide) {
      if (numberOfSlide > (slider_item.length * slidesToShowOriginal) / slidesToShowOriginal - slidesToShowOriginal) numberOfSlide = temp = 0;
      else if (numberOfSlide < 0) numberOfSlide = temp = slider_item.length - slidesToShowOriginal;
      slider_transitionx.style.transform = `translateX(-${ ((parseInt(slider_transitionx.style.width) / slider_item.length) * numberOfSlide)}px)`;
    }
    scrollSlide(temp);

    slider_button_next.addEventListener("click", () => {
      scrollSlide(++temp);
    });

    slider_button_prev.addEventListener("click", () => {
      scrollSlide(--temp);
    });

    // Swipes

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
  }
}

export default slider;

// function slider({
//   slider__item,
//   slider__translateX,
//   slider__button__next,
//   slider__button__prev,
//   slidesToShow = 1,
//   responsive = false
// }) {

//   let slider_item = document.querySelectorAll(slider__item),
//     slider_transitionx = document.querySelector(slider__translateX),
//     slider_button_next = document.querySelector(slider__button__next),
//     slider_button_prev = document.querySelector(slider__button__prev),
//     temp = 0,
//     startX = 0,
//     endX = 0;

//   if (slider_transitionx) {
//     let DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth,
//       INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth,
//       slide_width = INNER_SLIDE_WIDTH / slidesToShow,
//       slider_container_array = [];

//     for (let i = 0; i < slider_item.length; i++) {
//       let slide_container = document.createElement("div");
//       slide_container.classList.add("slide-container");
//       slide_container.style.width = slide_width + "px";
//       let slide_container_content = slider_item[i].cloneNode(true);
//       slide_container.append(slide_container_content);
//       slider_container_array.push(slide_container);
//     }
//     slider_transitionx.innerHTML = "";
//     slider_container_array.forEach(element => {
//       slider_transitionx.append(element);
//     });

//     slider_transitionx.style.width = slider_item.length * slide_width + "px";


//     //responsive

//     if (responsive) {
//       slider_transitionx.style.transform = `translateX(-0px)`;
//       DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
//       if (DOCUMENT_SLIDER_WIDTH > 1060) {
//         adaptive(3);
//       }

//       if (DOCUMENT_SLIDER_WIDTH <= 1160) {
//         adaptive(2);
//       }

//       if (DOCUMENT_SLIDER_WIDTH <= 820) {
//         adaptive(1);
//       }
//       window.addEventListener(`resize`, () => {
//         slider_transitionx.style.transform = `translateX(-0px)`;
//         DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
//         if (DOCUMENT_SLIDER_WIDTH > 1060) {
//           adaptive(3);
//         }

//         if (DOCUMENT_SLIDER_WIDTH <= 1160) {
//           adaptive(2);
//         }

//         if (DOCUMENT_SLIDER_WIDTH <= 780) {
//           adaptive(1);
//         }
//       }, false);
//     } else {
//       window.addEventListener(`resize`, () => {
//         slider_transitionx.style.transform = `translateX(-0px)`;
//         DOCUMENT_SLIDER_WIDTH = document.documentElement.clientWidth;
//         adaptive(slidesToShow);
//       });
//     }

//     function adaptive(slidesShow) {
//       let SLIDES = document.querySelectorAll(`${slider__translateX}>.slide-container`),
//         INNER_SLIDE_WIDTH = document.querySelector(".products-slider__inner").offsetWidth;
//       SLIDES.forEach(element => {
//         element.style.width = (INNER_SLIDE_WIDTH / slidesShow) + "px";
//       });

//       slider_transitionx.style.width = slider_item.length * parseInt(SLIDES[0].style.width) + "px";
//       slidesToShow = slidesShow;
//     }

//     // Slide Scroll

//     function scrollSlide(numberOfSlide) {
//       if (numberOfSlide > (slider_item.length * slidesToShow) / slidesToShow - slidesToShow) numberOfSlide = temp = 0;
//       else if (numberOfSlide < 0) numberOfSlide = temp = slider_item.length - slidesToShow;
//       slider_transitionx.style.transform = `translateX(-${ ((parseInt(slider_transitionx.style.width) / slider_item.length) * numberOfSlide)}px)`;
//     }
//     scrollSlide(temp);

//     slider_button_next.addEventListener("click", () => {
//       scrollSlide(++temp);
//     });

//     slider_button_prev.addEventListener("click", () => {
//       scrollSlide(--temp);
//     });

//     // Swipes

//     function scrollSlideOnTouch() {
//       if (endX > startX + 70) {
//         scrollSlide(--temp);
//       }
//       if (endX < startX - 70) {
//         scrollSlide(++temp);
//       }
//     }

//     slider_transitionx.addEventListener("mousedown", (event) => {
//       startX = event.screenX;
//     });

//     slider_transitionx.addEventListener("mouseup", (event) => {
//       endX = event.screenX;
//       scrollSlideOnTouch();
//     });

//     slider_transitionx.addEventListener("touchstart", (event) => {
//       startX = event.touches[0].clientX;
//     });

//     slider_transitionx.addEventListener("touchend", (event) => {
//       endX = event.changedTouches[0].clientX;
//       scrollSlideOnTouch();
//     });
//   }
// }
// export default slider;