function productAppearance() {
  let radio_grid = document.querySelector(".filter__radio--grid"),
    radio_list = document.querySelector(".filter__radio--list");

  radio_grid.addEventListener("change", function () {
    let items_grid = document.querySelectorAll(".product-item--category");
    items_grid.forEach(element => {
      element.classList.add("product-item--category-lg");
    });
  });

  radio_list.addEventListener("change", function () {
    let items_list = document.querySelectorAll(".product-item--category-lg");
    items_list.forEach(element => {
      element.classList.remove("product-item--category-lg");
      element.classList.add("product-item--category");
    });
  });
}

export default productAppearance;