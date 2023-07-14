let activeImageContainer = document.querySelector(".active-herbarium");
let allImages = document.querySelectorAll(".herbarium-image-container");

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    allImages[1].style.opacity = e.clientX / document.documentElement.clientWidth;
    allImages[2].style.opacity = 1 - (e.clientY / document.documentElement.clientHeight);
}