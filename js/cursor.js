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


    // Clear the previous timer (if any)
    clearTimeout(timerId);

    x = 20;
    y = 30;
    // imageContainer.style.clipPath = `circle(500px at ${e.pageX}px ${e.pageY}px)`;


    const containerWidth = activeImageContainer.offsetWidth;
    const containerHeight = activeImageContainer.offsetHeight;

    const maskPosition = `calc(${e.pageX}px - ${containerWidth}px) calc(${e.pageY}px - ${containerHeight}px)`;
    activeImageContainer.style.maskPosition = maskPosition;
    activeImageContainer.style.webkitMaskPosition = maskPosition;


    activeImageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    activeImageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;

    if (filterRadial < 100) filterRadial++;

    // Start a new timer to change the cursor size after a certain delay
    timerId = setTimeout(() => {
        // Change the cursor size
        mouseCursor.style.width = 2 + "rem";
        mouseCursor.style.height = 2 + "rem";

        // imageContainer.style.clipPath = `circle(100px at ${e.pageX}px ${e.pageY}px)`;
    }, 100); // Adjust the delay as needed

    timerId2 = setTimeout(() => {
        if (filterRadial > 80) filterRadial--;
        activeImageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black  ${filterRadial / 2}%, transparent ${filterRadial}%)`;
        activeImageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    }, 1000);
}

function handleScroll(e) {


    // allImages.forEach(image => {
    //     console.log(image.classList);
    // });


    if (e.deltaY < 0) {
        console.log("scroll up");
        // if (imageOpacity < 100) imageOpacity = imageOpacity + 10;
        // activeImageContainer.style.opacity = imageOpacity / 100;
        // console.log(imageOpacity);
        if (activeSmokeNumber > 0) {
            allImages[activeSmokeNumber].classList.remove("active-smoke");
            activeSmokeNumber = activeSmokeNumber - 1;
            allImages[activeSmokeNumber].classList.add("active-smoke");
        }

    }

    if (e.deltaY > 0) {
        console.log("scroll down");

        // if (imageOpacity > 0) imageOpacity = imageOpacity - 10;
        // activeImageContainer.style.opacity = imageOpacity / 100;
        // console.log(imageOpacity);
        if (activeSmokeNumber < allImages.length - 1) {
            allImages[activeSmokeNumber].classList.remove("active-smoke");
            activeSmokeNumber = activeSmokeNumber + 1;
            allImages[activeSmokeNumber].classList.add("active-smoke");
        }
    }
    console.log(activeSmokeNumber);
}