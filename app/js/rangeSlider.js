function rangeSlider() {
  let inputLeft = document.querySelector(".products-aside__input-left"),
    inputRight = document.querySelector(".products-aside__input-right"),
    thumbLeft = document.querySelector(".products-aside__thumb--left"),
    thumbRight = document.querySelector(".products-aside__thumb--right"),
    range = document.querySelector(".products-aside__range"),
    counter_left = document.querySelector(".products-aside__counter-left"),
    counter_left_number = document.querySelector(".products-aside__counter-leftnumber"),
    counter_right = document.querySelector(".products-aside__counter-right"),
    counter_right_number = document.querySelector(".products-aside__counter-rightnumber");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 10);

    var percent = ((_this.value - min) / (max - min)) * 100,
      percentRight = ((inputRight.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    counter_left_number.textContent = _this.value;
    if (document.documentElement.offsetWidth <= 992 && document.documentElement.offsetWidth >= 402) {
      counter_left.style.left = percent - 4 + "%";
    } else {
      counter_left.style.left = percent - 20 + "%";
    }
    range.style.left = percent + "%";

    if (percent >= 95) {
      inputLeft.style.zIndex = 10;
    } else {
      inputLeft.style.zIndex = 2;
    }

    if (percent + 37 >= percentRight) {
      counter_left.style.top = "-50px";
    } else {
      counter_left.style.top = "20px";
    }
  }


  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 10);

    var percent = ((_this.value - min) / (max - min)) * 100,
      percentLeft = ((inputRight.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    counter_right_number.textContent = _this.value;
    if (document.documentElement.offsetWidth <= 992 && document.documentElement.offsetWidth >= 402) {
      counter_right.style.right = (100 - percent - 4) + "%";
    } else {
      counter_right.style.right = (100 - percent - 20) + "%";
    }
    range.style.right = (100 - percent) + "%";

    if ((100 - percent) >= percentLeft) {
      counter_left.style.top = "-50px";
    } else {
      counter_left.style.top = "20px";
    }
  }
  setRightValue();
  setLeftValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
}
export default rangeSlider;