let activeImageContainer = document.querySelector(".active-story");
let allImages = document.querySelectorAll(".story-image-container");
let documentWidth = document.documentElement.clientWidth;

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {

    if ((e.clientX >= documentWidth / 5) && (e.clientX < (documentWidth / 5) * 2)) {
        allImages[1].style.opacity = e.clientX / documentWidth * 2;
    }
    else { allImages[1].style.opacity = 0 }

    if ((e.clientX >= (documentWidth / 5) * 2) && (e.clientX < (documentWidth / 5) * 3)) {
        allImages[2].style.opacity = e.clientX / documentWidth;
    }
    else { allImages[2].style.opacity = 0 }

    if ((e.clientX >= (documentWidth / 5) * 3) && (e.clientX < (documentWidth / 5) * 4)) {
        allImages[3].style.opacity = e.clientX / documentWidth;
    }
    else { allImages[3].style.opacity = 0 }

    if ((e.clientX >= (documentWidth / 5) * 4)) {
        allImages[4].style.opacity = e.clientX / documentWidth;
    }
    else { allImages[4].style.opacity = 0 }

}