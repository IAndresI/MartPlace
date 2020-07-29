function blog() {
  let buttons = document.querySelectorAll(".blog__posts .blog__button"),
    content = document.querySelectorAll(".blog__posts .blog__list");
  if (content[0]) {
    function showTab(button) {
      button.classList.add("blog__button--active");
      for (let i = 0; i < content.length; i++) {
        if (button.getAttribute("data-tab") === content[i].getAttribute("data-content")) {
          content[i].style.display = "block";
        } else {
          content[i].style.display = "none";
          buttons[i].classList.remove("blog__button--active");
        }
      }
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        showTab(buttons[i]);
      });
    }
    showTab(buttons[0]);
  }
}
export default blog;