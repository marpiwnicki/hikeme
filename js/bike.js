let activeImageContainer = document.querySelector(".active-bike");
let allImages = document.querySelectorAll(".bike-image-container");

let activeBikeNumber = 0;

window.addEventListener("wheel", handleScroll);

function handleScroll(e) {

    if (e.deltaY < 0) {
        if (activeBikeNumber > 0) {
            allImages[activeBikeNumber].classList.remove("active-bike");
            activeBikeNumber = activeBikeNumber - 1;
            allImages[activeBikeNumber].classList.add("active-bike");
        }
    }
    if (e.deltaY > 0) {
        if (activeBikeNumber < allImages.length - 1) {
            allImages[activeBikeNumber].classList.remove("active-bike");
            activeBikeNumber = activeBikeNumber + 1;
            allImages[activeBikeNumber].classList.add("active-bike");
        }
    }
}