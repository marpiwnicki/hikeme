let mainImage = document.querySelector(".landscapes-main-image-purple-rocks");
let buttonRight = document.querySelector(".button-right");
let buttonLeft = document.querySelector(".button-left");
let scaledDiv = document.querySelector(".landscapes-pink-panoramic-scaled");
let highlights = document.querySelectorAll(".highlight");
let eye = document.querySelector(".eye");



let highlightsLocationFactor = [
    { left: 2.8, width: 2.5, top: 15, height: 70 },
    { left: 30, width: 2.5, top: 20, height: 60 },
    { left: -80, width: 8, top: 24, height: 30 },
    { left: 4.2, width: 4.5, top: 22, height: 45 },
    { left: 1.6, width: 5, top: 23, height: 37 },
    { left: 3, width: 6, top: 20, height: 35 },
    { left: 1.36, width: 7, top: 27, height: 31 },
    { left: 1.35, width: 4, top: 80, height: 31 },
    { left: 1.07, width: 8, top: 15, height: 20 }
];

// background image const dimentions
let panoramicImageWidth = 11944;
let panoramicImageHeight = 3607;

let newWidth = (panoramicImageWidth * window.innerHeight) / panoramicImageHeight;
let moveRange = newWidth - window.innerWidth;
let leftOffset = 0;

if (newWidth > window.innerWidth) scaledDiv.style.width = newWidth + 'px';
if (leftOffset > -2) buttonLeft.style.left = -100 + 'px'; else buttonLeft.style.left = -50 + 'px';
if (leftOffset <= -moveRange) buttonRight.style.right = -100 + 'px'; else buttonRight.style.right = -50 + 'px';


window.addEventListener('click', handleMouseClick);
window.addEventListener("wheel", handleMouseWheel);
window.addEventListener("resize", adjustSize);
window.addEventListener("load", adjustSize);

function adjustSize(e) {
    newWidth = (panoramicImageWidth * window.innerHeight) / panoramicImageHeight;
    scaledDiv.style.width = newWidth + 'px';
    let highlightNumber = 0;
    highlights.forEach(highlight => {
        highlight.style.left = newWidth / highlightsLocationFactor[highlightNumber].left + 'px';
        highlight.style.width = newWidth / highlightsLocationFactor[highlightNumber].width + 'px';
        highlight.style.top = highlightsLocationFactor[highlightNumber].top + 'vh';
        highlight.style.height = highlightsLocationFactor[highlightNumber].height + 'vh';
        highlightNumber++;
    });
}

function handleMouseClick(e) {
    if ((e.clientX < 100) && (leftOffset < -1)) {
        leftOffset += moveRange / 4;
        scaledDiv.style.left = leftOffset;
        eye.style.left = -leftOffset;
    }
    if ((e.clientX > document.documentElement.clientWidth - 100) && (leftOffset > -moveRange)) {
        leftOffset -= moveRange / 4;
        scaledDiv.style.left = leftOffset;
        eye.style.left = -leftOffset;

    }

    if (leftOffset > -2) buttonLeft.style.left = -100 + 'px'; else buttonLeft.style.left = -50 + 'px';
    if (leftOffset <= -moveRange) buttonRight.style.right = -100 + 'px'; else buttonRight.style.right = -50 + 'px';
}


function handleMouseWheel(e) {
    if ((e.deltaY < 0) && (leftOffset < -1)) {
        leftOffset += moveRange / 4;
        scaledDiv.style.left = leftOffset;
        eye.style.left = -leftOffset;

    }
    if ((e.deltaY > 0) && (leftOffset > -moveRange)) {
        leftOffset -= moveRange / 4;
        scaledDiv.style.left = leftOffset;
        eye.style.left = -leftOffset;

    }
    if (leftOffset > -2) buttonLeft.style.left = -100 + 'px'; else buttonLeft.style.left = -50 + 'px';
    if (leftOffset <= -moveRange) buttonRight.style.right = -100 + 'px'; else buttonRight.style.right = -50 + 'px';
}