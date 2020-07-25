function productAppearance() {
  let radio_grid = document.querySelector(".filter__radio--grid"),
    radio_list = document.querySelector(".filter__radio--list"),
    radio_grid_svg = document.querySelector(".filter__image--grid svg path"),
    radio_list_svg = document.querySelector(".filter__image--list svg path");

  radio_grid_svg.classList.add("filter__image--active");
  radio_grid.addEventListener("change", function () {
    let items_grid = document.querySelectorAll(".product-item--category-lg");
    radio_grid_svg.classList.add("filter__image--active");
    radio_list_svg.classList.remove("filter__image--active");
    items_grid.forEach(element => {
      element.classList.remove("product-item--category-lg");
      element.classList.add("product-item--category");
    });
  });

  radio_list.addEventListener("change", function () {
    let items_list = document.querySelectorAll(".product-item--category");
    radio_list_svg.classList.add("filter__image--active");
    radio_grid_svg.classList.remove("filter__image--active");
    items_list.forEach(element => {
      element.classList.add("product-item--category-lg");
    });
  });
}

export default productAppearance;