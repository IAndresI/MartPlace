function cardHover(image, image_container, hover_container) {
  let slider_image = document.querySelectorAll(image_container),
    more_info = document.querySelectorAll(hover_container),
    img = document.querySelectorAll(image);

  if (slider_image) {
    for (let i = 0; i < slider_image.length; i++) {
      slider_image[i].addEventListener('mouseenter', () => {
        more_info[i].style.width = "100%";
        img[i].style.width = "0";
      });

      slider_image[i].addEventListener('mouseleave', () => {
        more_info[i].style.width = "0";
        img[i].style.width = "100%";
      });
    }
  }
}
export default cardHover;