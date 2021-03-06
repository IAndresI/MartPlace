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
    therescontent = false,
    nothingsFind = document.querySelector(noContentAlert);

  if (tab_buttons[0] && tab_content) {
    activeClass = activeClass.substring(1, activeClass.length);
    let temp = 0;

    function showTab(number) {
      for (let i = 0; i < tab_content.length; i++) {
        if (tab_content[i].getAttribute("data-content") == tab_buttons[number].getAttribute("data-tab")) {
          therescontent = true;
          tab_content[i].style.display = "block";
        } else {
          tab_content[i].style.display = "none";
        }
        tab_buttons[number].classList.add(activeClass);
        if (noContentAlert) {
          if (!therescontent) {
            nothingsFind.style.display = "block";
          } else {
            nothingsFind.style.display = "none";
          }
        }
      }
      if (temp == 0) {
        therescontent = false;
        temp++;
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
            let lastTime = performance.now();
            for (let j = 0; j < tab_content.length; j++) {
              tab_content[j].style.transform = "scaleX(0) scaleY(0)";
              if (tab_content[j].getAttribute("data-content") === tab_buttons[i].getAttribute("data-tab")) therescontent = true;
              let animateID;

              function animation() {
                let currentTime = performance.now();
                if (currentTime - lastTime >= 200) {
                  tab_content[j].style.transition = "transform .2s";
                  tab_content[j].style.display = "none";
                  if (tab_content[j].getAttribute("data-content") === tab_buttons[i].getAttribute("data-tab")) {
                    tab_content[j].style.display = "block";
                    if (currentTime - lastTime >= 400) {
                      tab_content[j].style.transform = "scaleX(1) scaleY(1)";
                      cancelAnimationFrame(animateID);
                    }
                  }
                }
                if (currentTime - lastTime < 400) {
                  animateID = requestAnimationFrame(animation);
                }
              }
              animateID = requestAnimationFrame(animation);
            }
          } else {
            showTab(i);
          }
          if (noContentAlert) {
            if (!therescontent) {
              nothingsFind.style.display = "block";
            } else {
              nothingsFind.style.display = "none";
            }
          }
        }
        therescontent = false;
      });
    }
  }
}
export default tabs;


// function tabs({
//   button,
//   content,
//   activeClass,
//   animate,
//   noContentAlert,
//   tabToShow
// }) {
//   let tab_buttons = document.querySelectorAll(button),
//     tab_content = document.querySelectorAll(content),
//     therescontent = false,
//     nothingsFind = document.querySelector(noContentAlert);

//   if (tab_buttons) {
//     activeClass = activeClass.substring(1, activeClass.length);
//     let temp = 0;

//     function showTab(number) {
//       for (let i = 0; i < tab_content.length; i++) {
//         if (tab_content[i].getAttribute("data-content") == tab_buttons[number].getAttribute("data-tab")) {
//           tab_buttons[number].classList.add(activeClass);
//           therescontent = true;
//           tab_content[i].style.display = "block";
//         } else {
//           tab_buttons[number].classList.add(activeClass);
//           tab_content[i].style.display = "none";
//         }
//       }
//       for (let i = 0; i < tab_buttons.length; i++) {
//         if (i == tab_buttons.length - 1) {
//           if (noContentAlert) {
//             if (!therescontent) {
//               nothingsFind.style.display = "block";
//             } else {
//               nothingsFind.style.display = "none";
//             }
//           }
//         }
//       }
//       if (temp == 0) {
//         therescontent = false;
//         temp++;
//       }
//     }

//     showTab(tabToShow);
//     for (let i = 0; i < tab_buttons.length; i++) {
//       tab_buttons[i].addEventListener("click", function (e) {
//         if (!e.target.classList.contains(activeClass)) {
//           for (let i = 0; i < tab_buttons.length; i++) {
//             tab_buttons[i].classList.remove(activeClass);
//           }
//           if (animate) {
//             e.target.classList.add(activeClass);
//             let lastTime = performance.now();
//             for (let j = 0; j < tab_content.length; j++) {
//               tab_content[j].style.transition = "transform .2s";
//               tab_content[j].style.transform = "scaleX(0) scaleY(0)";
//               if (tab_content[j].getAttribute("data-content") === tab_buttons[i].getAttribute("data-tab")) {
//                 therescontent = true;
//               }
//               let animateID;

//               function animation() {
//                 let currentTime = performance.now();
//                 if (currentTime - lastTime >= 200) {
//                   tab_content[j].style.display = "none";
//                   if (tab_content[j].getAttribute("data-content") === tab_buttons[i].getAttribute("data-tab")) {
//                     tab_content[j].style.display = "block";
//                     if (currentTime - lastTime >= 400) {
//                       tab_content[j].style.transform = "scaleX(1) scaleY(1)";
//                       cancelAnimationFrame(animateID);
//                     }
//                   }
//                 }
//                 if (currentTime - lastTime < 400) {
//                   animateID = requestAnimationFrame(animation);
//                 }
//               }
//               animateID = requestAnimationFrame(animation);
//             }
//             for (let j = 0; j < tab_content.length; j++) {
//               tab_content[j].style.transition = "";
//             }
//           } else {
//             showTab(i);
//           }
//           if (noContentAlert) {
//             if (!therescontent) {
//               nothingsFind.style.display = "block";
//             } else {
//               nothingsFind.style.display = "none";
//             }
//           }
//         }
//         therescontent = false;
//       });
//     }
//   }
// }
// export default tabs;