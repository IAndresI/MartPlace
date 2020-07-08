function search(button, box) {
  let buttons = document.querySelectorAll(button),
    boxes = document.querySelectorAll(box);

  buttons.forEach((element) => {
    element.addEventListener("click", function (e) {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.transform = "scaleY(0) scaleX(0)";
        let timer = setTimeout(() => {
          boxes[i].style.display = "none";
        }, 300);
      }
      for (let i = 0; i < boxes.length; i++) {
        if (
          boxes[i].getAttribute("data-box") ==
          e.target.getAttribute("data-button")
        ) {
          let timer = setTimeout(() => {
            boxes[i].style.display = "block";
          }, 300);
          let timer1 = setTimeout(() => {
            boxes[i].style.transform = "scaleY(1) scaleX(1)";
            boxes[i].style.opacity = "1";
          }, 500);
        }
      }
    });
  });
}

export default search;
