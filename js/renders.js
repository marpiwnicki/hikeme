let activeImageContainer = document.querySelector(".active-render");
let allImages = document.querySelectorAll(".render-image-container");

let activeRenderNumber = 0;

window.addEventListener("wheel", handleScroll);


function handleScroll(e) {
    console.log(window.getComputedStyle(document.body).overflow);
    if (e.deltaY < 0) {
        if (activeRenderNumber > 0) {
            allImages[activeRenderNumber].classList.remove("active-render");
            activeRenderNumber = activeRenderNumber - 1;
            allImages[activeRenderNumber].classList.add("active-render");
        }
    }
    if (e.deltaY > 0) {
        if (activeRenderNumber < allImages.length - 1) {
            allImages[activeRenderNumber].classList.remove("active-render");
            activeRenderNumber = activeRenderNumber + 1;
            allImages[activeRenderNumber].classList.add("active-render");
        }
    }

    if (activeRenderNumber >= allImages.length - 1)
        document.body.style.overflow = 'scroll';

    if (activeRenderNumber <= 0)
        document.body.style.overflow = 'hidden';


}