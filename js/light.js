let activeImageContainer = document.querySelector(".active-light");
let allImages = document.querySelectorAll(".light-image-container");


// window.addEventListener("wheel", handleScroll);
window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    allImages[1].style.opacity = 1 - (e.clientX / document.documentElement.clientWidth);
    allImages[2].style.opacity = 1 - (e.clientY / document.documentElement.clientHeight);
}