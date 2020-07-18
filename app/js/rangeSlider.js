function rangeSlider() {
  let leftSlider = document.querySelector(".test__leftinput"),
    rightSlider = document.querySelector(".test__rightinput");

  function leftSliderSettings() {
    leftSlider.value = Math.min(parseInt(leftSlider.value), parseInt(rightSlider.value) - 1);
  }

  function rightSliderSettings() {
    rightSlider.value = Math.max(parseInt(rightSlider.value), parseInt(leftSlider.value) + 1);
  }
  leftSlider.addEventListener("input", leftSliderSettings);
  rightSlider.addEventListener("input", rightSliderSettings);
}
export default rangeSlider;

//<div class="test">  Оно мне нада, это для рендж-слайдера))
//<div class="container">
//  <div class="test__inner">
//    <input type="range" class="test__leftinput" min="0" max="100" value="0">
//    <input type="range" class="test__rightinput" min="0" max="100" value="100">
//  </div>
//</div>
//</div>