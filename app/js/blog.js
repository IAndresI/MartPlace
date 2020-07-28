function blog() {
  let radio1 = document.querySelector(".form__checkbox-button"),
    radio2 = document.querySelector(".form__checkbox-button--multi"),
    radio1Dropdown = document.querySelector(".form__dropdown"),
    radio2Dropdown = document.querySelector(".form__dropdown--multi");

  if (radio1Dropdown) {

    function show(radioDrop1, radioDrop2, activeClass) {
      radioDrop1.classList.add(activeClass);
      radioDrop2.classList.remove(activeClass);
    }

    radio1.addEventListener("change", function () {
      show(radio1Dropdown, radio2Dropdown, "form__dropdown--show");
    });

    radio2.addEventListener("change", function () {
      show(radio2Dropdown, radio1Dropdown, "form__dropdown--show");
    });
  }
}

export default blog;