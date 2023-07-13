let landscapeMainImage = document.querySelector(".main-image-hi");
let allImageContainers = document.querySelectorAll(".image-container");

let timerId;
clearTimeout(timerId);

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("scroll", handleScroll);

function handleMouseMove(e) {
    landscapeMainImage.style.opacity = e.clientX / document.documentElement.clientWidth;

}

function handleScroll(e) {
    allImageContainers.forEach(container => {
        if ((container.getBoundingClientRect().top) <= 0) {
            container.style.backgroundAttachment = 'fixed';
        }
        else {
            container.style.backgroundAttachment = 'initial';
        }
        if ((container.getBoundingClientRect().top) <= -200) {
            container.style.filter = 'grayscale(100%)';
        }
        else {
            container.style.filter = 'grayscale(0%)';
        }
    });
}
