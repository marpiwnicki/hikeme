let video = document.querySelector(".video-container");
let documentWidth = document.documentElement.clientWidth;

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    video.currentTime = (e.clientX / documentWidth) * video.duration;

}