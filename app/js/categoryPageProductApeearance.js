function productAppearance() {
  let radio_grid = document.querySelector(".filter__button--grid"),
    radio_list = document.querySelector(".filter__button--list"),
    radio_grid_svg = document.querySelector(".filter__button--grid svg path"),
    radio_list_svg = document.querySelector(".filter__button--list svg path");

  if (radio_grid) {
    radio_grid_svg.classList.add("filter__button--active");
    radio_grid.addEventListener("click", function () {
      let items_grid = document.querySelectorAll(".product-item--category-lg");
      radio_grid_svg.classList.add("filter__button--active");
      radio_list_svg.classList.remove("filter__button--active");
      items_grid.forEach(element => {
        element.classList.remove("product-item--category-lg");
        element.classList.add("product-item--category");
      });
    });

    radio_list.addEventListener("click", function () {
      let items_list = document.querySelectorAll(".product-item--category");
      radio_list_svg.classList.add("filter__button--active");
      radio_grid_svg.classList.remove("filter__button--active");
      items_list.forEach(element => {
        element.classList.add("product-item--category-lg");
      });
    });
  }
}

export default productAppearance;