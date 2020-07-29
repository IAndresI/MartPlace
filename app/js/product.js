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

    let tabs = document.querySelectorAll(".product__tab-button"),
      tabContents = document.querySelectorAll(".product__tab-content");

    function showTab(number) {
      tabs.forEach(element => {
        if (element.getAttribute("data-tab") == number) {
          element.classList.add("product__tab-button--active");
        } else {
          element.classList.remove("product__tab-button--active");
        }
      });
      tabContents.forEach(element => {
        if (element.getAttribute("data-content") != number) {
          element.style.display = "none";
        } else {
          element.style.display = "block";
        }
      });
    }

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        showTab(i);
      });
    }

    showTab(0);
  }
}

export default product;