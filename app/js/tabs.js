function tabs({
  button,
  content,
  activeClass,
  animate,
  noContentAlert,
  tabToShow
}) {
  let tab_buttons = document.querySelectorAll(button),
    tab_content = document.querySelectorAll(content),
    therescontent = false;

  if (tab_buttons) {
    activeClass = activeClass.substring(1, activeClass.length);

    function showTab(number) {
      for (let i = 0; i < tab_content.length; i++) {
        if (tab_content[i].getAttribute("data-content") == tab_buttons[number].getAttribute("data-tab")) {
          tab_buttons[number].classList.add(activeClass);
          therescontent = true;
          tab_content[i].style.display = "block";
        } else {
          tab_content[i].style.display = "none";
        }
        if (noContentAlert) {
          let nothingsFind = document.querySelector(".nothing-find");
          (!therescontent) ? nothingsFind.style.display = "block": nothingsFind.style.display = "none";
        }
      }
    }
    showTab(tabToShow);

    for (let i = 0; i < tab_buttons.length; i++) {
      tab_buttons[i].addEventListener("click", function (e) {
        if (!e.target.classList.contains(activeClass)) {
          for (let i = 0; i < tab_buttons.length; i++) {
            tab_buttons[i].classList.remove(activeClass);
          }
          if (animate) {
            e.target.classList.add(activeClass);
            var lastTime = performance.now();
            for (let j = 0; j < tab_content.length; j++) {
              tab_content[j].style.transition = "transform .2s";
              tab_content[j].style.transform = "scaleX(0) scaleY(0)";
              let animateID;

              function animate() {
                let currentTime = performance.now();
                if (currentTime - lastTime >= 200) {
                  tab_content[j].style.display = "none";
                  if (tab_content[j].getAttribute("data-content") === tab_buttons[i].getAttribute("data-tab")) {
                    therescontent = true;
                    tab_content[j].style.display = "block";
                    if (currentTime - lastTime >= 400) {
                      tab_content[j].style.transform = "scaleX(1) scaleY(1)";
                      cancelAnimationFrame(animateID);
                    }
                  }
                }
                if (currentTime - lastTime < 400) {
                  animateID = requestAnimationFrame(animate);
                  if (noContentAlert) {
                    let nothingsFind = document.querySelector(".nothing-find");
                    (!therescontent) ? nothingsFind.style.display = "block": nothingsFind.style.display = "none";
                  }
                }
              }
              animateID = requestAnimationFrame(animate);
            }
            for (let j = 0; j < tab_content.length; j++) {
              tab_content[j].style.transition = "";
            }
          } else {
            showTab(i);
          }
        }
        therescontent = false;
      });
    }
  }
}
export default tabs;