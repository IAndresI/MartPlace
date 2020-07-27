function navMiniDropdown() {
  let menu_icon = document.querySelector(".menu__icon"),
    menu_mini = document.querySelector(".menu__nav");

  menu_icon.addEventListener("click", (e) => {
    menu_mini.classList.toggle("show-lg");
  });


  let all = document.querySelectorAll(".dropdown"),
    home = document.querySelector(".menu__item--home"),
    home_dropdown = document.querySelector(".dropdown--home"),
    products = document.querySelector(".menu__item--products"),
    products_dropdown = document.querySelector(".dropdown--products"),
    wordpress = document.querySelector(".menu__item--wordpress"),
    wordpress_dropdown = document.querySelector(".dropdown--wordpress"),
    features = document.querySelector(".menu__item--features"),
    features_dropdown = document.querySelector(".dropdown--features"),
    pages = document.querySelector(".menu__item--pages"),
    pages_dropdown = document.querySelector(".dropdown--pages");

  home.addEventListener("click", () => {
    all.forEach(element => {
      if (!(element.classList.contains("dropdown--home")))
        element.classList.remove("show");
    });
    home_dropdown.classList.toggle("show");
  });
  products.addEventListener("click", () => {
    all.forEach(element => {
      if (!(element.classList.contains("dropdown--products")))
        element.classList.remove("show");
    });
    products_dropdown.classList.toggle("show");
  });
  wordpress.addEventListener("click", () => {
    all.forEach(element => {
      if (!(element.classList.contains("dropdown--wordpress")))
        element.classList.remove("show");
    });
    wordpress_dropdown.classList.toggle("show");
  });
  features.addEventListener("click", () => {
    all.forEach(element => {
      if (!(element.classList.contains("dropdown--features")))
        element.classList.remove("show");
    });
    features_dropdown.classList.toggle("show");
  });
  pages.addEventListener("click", () => {
    all.forEach(element => {
      if (!(element.classList.contains("dropdown--pages")))
        element.classList.remove("show");
    });
    pages_dropdown.classList.toggle("show");
  });

}


export default navMiniDropdown;