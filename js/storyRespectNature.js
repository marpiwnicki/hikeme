let video = document.querySelector(".respect-story-video-container");
let image = document.querySelector(".respect-story-image-container");
let documentWidth = document.documentElement.clientWidth;

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener('resize', handleWindowResize);
window.addEventListener('load', handleWindowResize);

function handleMouseMove(e) {
    video.currentTime = (e.clientX / documentWidth) * video.duration;
}

function handleWindowResize(e) {
    video.style.width = '32.5%';
    video.style.left = '33.5%';
    video.style.bottom = '30.1%';
    image.style.width = window.innerWidth;
    image.style.height = window.innerWidth;
}