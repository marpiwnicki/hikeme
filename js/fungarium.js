let activeImageContainer = document.querySelector(".active-fungarium");
let allImages = document.querySelectorAll(".fungarium-image-container");

let activeFungariumNumber = 0;

// window.addEventListener("wheel", handleScroll);
window.addEventListener("mousemove", handleMouseMove);

function handleScroll(e) {

    if (e.deltaY < 0) {
        if (activeFungariumNumber > 0) {
            allImages[activeFungariumNumber].classList.remove("active-fungarium");
            activeFungariumNumber = activeFungariumNumber - 1;
            allImages[activeFungariumNumber].classList.add("active-fungarium");
        }
    }
    if (e.deltaY > 0) {
        if (activeFungariumNumber < allImages.length - 1) {
            allImages[activeFungariumNumber].classList.remove("active-fungarium");
            activeFungariumNumber = activeFungariumNumber + 1;
            allImages[activeFungariumNumber].classList.add("active-fungarium");
        }
    }
}

function handleMouseMove(e) {
    allImages[1].style.opacity = e.clientX / document.documentElement.clientWidth;
    allImages[5].style.opacity = 1 - (e.clientY / document.documentElement.clientHeight);
}