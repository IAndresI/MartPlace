function tabs() {
  let tabs = document.querySelectorAll(".products__categories-item"),
    tab_content = document.querySelectorAll(".item--tab");

  tabs.forEach(element_tab => {
    element_tab.addEventListener("click", function (e) {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].firstChild.classList.remove("category--active");
      }
      if (e.target.classList.contains("products__category-button")) e.target.classList.add("category--active");
      let therescontent = false;
      let nothingsFind = document.querySelector(".nothing-find");
      for (let i = 0; i < tab_content.length; i++) {
        var lastTime = performance.now();
        (function timer() {
          var currentTime = performance.now();
          tab_content[i].style.transform = "scaleX(0) scaleY(0)";
          if (currentTime - lastTime >= 200) {
            tab_content[i].style.display = "none";
          }
          if (currentTime - lastTime >= 200) {
            if (tab_content[i].getAttribute("data-category") == element_tab.getAttribute("data-category")) {
              therescontent = true;
              tab_content[i].style.display = "block";
              if (currentTime - lastTime >= 400) {
                tab_content[i].style.transform = "scaleX(1) scaleY(1)";
                cancelAnimationFrame(timer);
              }
            }
            if (!therescontent) {
              nothingsFind.style.display = "block";
            } else {
              nothingsFind.style.display = "none";
            }
          }
          requestAnimationFrame(timer);
        }());
      }
    });
  });
}

export default tabs;

// (function timer() {
//   var currentTime = performance.now();

//   if (element.getAttribute("data-category") == element_tab.getAttribute("data-category")) {
//     element.style.transform = "scaleX(1) scaleY(1)";
//     if (currentTime - lastTime >= 400) {
//       element.style.display = "block";
//       cancelAnimationFrame(timer);
//     }
//   } else {
//     element.style.transform = "scaleX(0) scaleY(0)";
//     if (currentTime - lastTime >= 400) {
//       element.style.display = "none";
//       cancelAnimationFrame(timer);
//     }
//   }
//   requestAnimationFrame(timer);
// }());