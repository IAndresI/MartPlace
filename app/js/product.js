import tabs from "./tabs";

function product() {
  let radio1 = document.querySelector(".form__checkbox-button"),
    radio2 = document.querySelector(".form__checkbox-button--multi"),
    radio1Dropdown = document.querySelector(".form__dropdown"),
    radio2Dropdown = document.querySelector(".form__dropdown--multi");

  if (radio1Dropdown) {
    function show(radioDrop1, radioDrop2, activeClass) {
      radioDrop1.classList.add(activeClass);
      radioDrop2.classList.remove(activeClass);
    }
    radio1.addEventListener("change", () => {
      show(radio1Dropdown, radio2Dropdown, "form__dropdown--show");
    });
    radio2.addEventListener("change", () => {
      show(radio2Dropdown, radio1Dropdown, "form__dropdown--show");
    });

    tabs({
      button: ".product__tab-button",
      content: ".product__tab-content",
      activeClass: ".product__tab-button--active",
      noContentAlert: ".nothing-find",
      tabToShow: 0
    });
  }
}
export default product;