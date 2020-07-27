function categoryPageDropdown() {

  let pricing_button = document.querySelector(".products-aside__header--pricing-range"),
    filter_button = document.querySelector(".products-aside__header--filter"),
    categories_button = document.querySelector(".products-aside__header--categories"),
    pricing_dropdown = document.querySelector(".products-aside__form"),
    filter_dropdown = document.querySelector(".products-aside__list-container--filter"),
    categories_dropdown = document.querySelector(".products-aside__list-container--categories");

  if (pricing_dropdown) {
    pricing_button.addEventListener("click", function () {
      pricing_dropdown.classList.toggle("show-md");
      if (pricing_dropdown.classList.contains("show-md")) {
        pricing_dropdown.style.paddingTop = "35px";
      } else {
        pricing_dropdown.style.paddingTop = 0;
      }
    });

    filter_button.addEventListener("click", function () {
      filter_dropdown.classList.toggle("show-md");
    });

    categories_button.addEventListener("click", function () {
      categories_dropdown.classList.toggle("show-md");
    });
  }
}

export default categoryPageDropdown;