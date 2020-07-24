function categoryPageDropdown() {

  let pricing_button = document.querySelector(".products-aside__header--pricing-range"),
    filter_button = document.querySelector(".products-aside__header--filter"),
    categories_button = document.querySelector(".products-aside__header--categories"),
    pricing_dropdown = document.querySelector(".products-aside__list-container--pricing-range"),
    filter_dropdown = document.querySelector(".products-aside__list-container--filter"),
    categories_dropdown = document.querySelector(".products-aside__list-container--categories");

  let wordpress_button = document.querySelector(".products-aside__button--wordpress"),
    landing_button = document.querySelector(".products-aside__button--landing"),
    psd_button = document.querySelector(".products-aside__button--psd"),
    plugins_button = document.querySelector(".products-aside__button--plugins"),
    html_button = document.querySelector(".products-aside__button--html"),
    companents_button = document.querySelector(".products-aside__button--components"),
    joomla_button = document.querySelector(".products-aside__button--joomla"),
    joomla_dropdown = document.querySelector(".products-aside__list-container--joomla"),
    companents_dropdown = document.querySelector(".products-aside__list-container--components"),
    html_dropdown = document.querySelector(".products-aside__list-container--html"),
    plugins_dropdown = document.querySelector(".products-aside__list-container--plugins"),
    psd_dropdown = document.querySelector(".products-aside__list-container--psd"),
    landing_dropdown = document.querySelector(".products-aside__list-container--landing"),
    wordpress_dropdown = document.querySelector(".products-aside__list-container--wordpress");

  pricing_button.addEventListener("click", function () {
    pricing_dropdown.classList.toggle("hide");
  });

  filter_button.addEventListener("click", function () {
    filter_dropdown.classList.toggle("show-md");
  });

  categories_button.addEventListener("click", function () {
    categories_dropdown.classList.toggle("show-md");
  });


  wordpress_button.addEventListener("click", function () {
    wordpress_dropdown.classList.toggle("show-sm");
  });

  landing_button.addEventListener("click", function () {
    landing_dropdown.classList.toggle("show-sm");
  });

  psd_button.addEventListener("click", function () {
    psd_dropdown.classList.toggle("show-sm");
  });

  plugins_button.addEventListener("click", function () {
    plugins_dropdown.classList.toggle("show-sm");
  });

  html_button.addEventListener("click", function () {
    html_dropdown.classList.toggle("show-sm");
  });

  companents_button.addEventListener("click", function () {
    companents_dropdown.classList.toggle("show-sm");
  });

  joomla_button.addEventListener("click", function () {
    joomla_dropdown.classList.toggle("show-sm");
  });
}

export default categoryPageDropdown;