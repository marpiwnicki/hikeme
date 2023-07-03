let mouseCursor = document.querySelector(".cursor-smoke");
let activeImageContainer = document.querySelector(".active-smoke");
let allImages = document.querySelectorAll(".smoke-image-container");

let timerId;

let filterRadial = 80;
let imageOpacity = 100;
let activeSmokeNumber = 0;

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("wheel", handleScroll);

function handleMouseMove(e) {
    activeImageContainer = document.querySelector(".active-smoke");
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.width = 10 + "rem";
    mouseCursor.style.height = 10 + "rem";

    clearTimeout(timerId);

    x = 20;
    y = 30;

    const containerWidth = activeImageContainer.offsetWidth;
    const containerHeight = activeImageContainer.offsetHeight;

    const maskPosition = `calc(${e.pageX}px - ${containerWidth}px) calc(${e.pageY}px - ${containerHeight}px)`;
    activeImageContainer.style.maskPosition = maskPosition;
    activeImageContainer.style.webkitMaskPosition = maskPosition;


    activeImageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    activeImageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;

    if (filterRadial < 100) filterRadial++;

    timerId = setTimeout(() => {
        mouseCursor.style.width = 2 + "rem";
        mouseCursor.style.height = 2 + "rem";
    }, 100);

    timerId2 = setTimeout(() => {
        if (filterRadial > 80) filterRadial--;
        activeImageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black  ${filterRadial / 2}%, transparent ${filterRadial}%)`;
        activeImageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    }, 1000);
}

function handleScroll(e) {
    if (e.deltaY < 0) {
        if (activeSmokeNumber > 0) {
            allImages[activeSmokeNumber].classList.remove("active-smoke");
            activeSmokeNumber = activeSmokeNumber - 1;
            allImages[activeSmokeNumber].classList.add("active-smoke");
        }
    }
    if (e.deltaY > 0) {
        if (activeSmokeNumber < allImages.length - 1) {
            allImages[activeSmokeNumber].classList.remove("active-smoke");
            activeSmokeNumber = activeSmokeNumber + 1;
            allImages[activeSmokeNumber].classList.add("active-smoke");
        }
    }
}