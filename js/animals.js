let background = document.querySelector(".background-image");
let documentWidth = document.documentElement.clientWidth;

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    background.style.scale = 1.1 + e.clientX / 100000 - e.clientY / 100000;
}