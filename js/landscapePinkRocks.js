let mainImage = document.querySelector(".landscapes-main-image-purple-rocks");
let buttonRight = document.querySelector(".button-right");
let buttonLeft = document.querySelector(".button-left");

let initailPosition = 50;

window.addEventListener('click', handleMouseClick);
window.addEventListener("wheel", handleMouseWheel);



function handleMouseClick(e) {
    if ((e.clientX < 100) && (initailPosition > 0)) {
        initailPosition -= 25;

        mainImage.style.objectPosition = initailPosition + '%';
    }
    if ((e.clientX > document.documentElement.clientWidth - 100) && (initailPosition < 100)) {
        initailPosition += 25;
        mainImage.style.objectPosition = initailPosition + '%';
    }

    if (initailPosition == 0) buttonLeft.style.left = -100 + 'px'; else buttonLeft.style.left = -50 + 'px';
    if (initailPosition == 100) buttonRight.style.right = -100 + 'px'; else buttonRight.style.right = -50 + 'px';
}


function handleMouseWheel(e) {
    if ((e.deltaY < 0) && (initailPosition > 0)) {
        initailPosition -= 25;
        mainImage.style.objectPosition = initailPosition + '%';
    }
    if ((e.deltaY > 0) && (initailPosition < 100)) {
        initailPosition += 25;
        mainImage.style.objectPosition = initailPosition + '%';
    }
    if (initailPosition == 0) buttonLeft.style.left = -100 + 'px'; else buttonLeft.style.left = -50 + 'px';
    if (initailPosition == 100) buttonRight.style.right = -100 + 'px'; else buttonRight.style.right = -50 + 'px';
}