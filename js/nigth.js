let mainImageLayerPerson = document.querySelector(".night-image-main-layer-person");
let mainImageLayerMountain = document.querySelector(".night-image-main-layer-mountain");
let mainImageLayerSky = document.querySelector(".night-image-main-layer-sky");
let allStarsImages = document.querySelectorAll(".night-image-stars");

let scrollPosition = 0;
let activeStarNumber = 0;

let personPosition = 64;
let mountainPosition = 87;
let skyPosition = 84;
let scrollSpeed = 2;

let timerId;

window.addEventListener("wheel", handleScroll);
window.addEventListener("mousemove", handleMouseMove);

function handleScroll(e) {
    // UP
    if (e.deltaY < 0) {
        if (scrollPosition >= 0) scrollPosition--;

        if (scrollPosition <= 20) {
            personPosition += scrollSpeed;
            mountainPosition += scrollSpeed;
            skyPosition += scrollSpeed;
            mainImageLayerPerson.style.height = personPosition + "vh";
            mainImageLayerMountain.style.height = mountainPosition + "vh";
            mainImageLayerSky.style.height = skyPosition + "vh";
        }
    }

    // DOWN
    if (e.deltaY > 0) {
        if (scrollPosition <= 25) scrollPosition++;
        if (personPosition >= 43) {
            personPosition -= scrollSpeed;
            mountainPosition -= scrollSpeed;
            skyPosition -= scrollSpeed;
            mainImageLayerPerson.style.height = personPosition + "vh";
            mainImageLayerMountain.style.height = mountainPosition + "vh";
            mainImageLayerSky.style.height = skyPosition + "vh";
        }
    }

    if (scrollPosition > 20) {
        mainImageLayerPerson.style.marginTop = -100 + "vh";
        mainImageLayerMountain.style.marginTop = -100 + "vh";
        mainImageLayerSky.style.marginTop = -100 + "vh";
        mainImageLayerPerson.style.opacity = 0;
        mainImageLayerMountain.style.opacity = 0;
        mainImageLayerSky.style.opacity = 0;
    }
    if (scrollPosition <= 20) {
        mainImageLayerPerson.style.marginTop = 57 + "vh";
        mainImageLayerMountain.style.marginTop = 34 + "vh";
        mainImageLayerSky.style.marginTop = -5 + "vh";
        mainImageLayerPerson.style.opacity = 1;
        mainImageLayerMountain.style.opacity = 1;
        mainImageLayerSky.style.opacity = 1;
    }
}

function handleMouseMove(e) {

    clearTimeout(timerId);
    activeStarNumber = Math.round((e.clientX / document.documentElement.clientWidth) * allStarsImages.length) + 1;
    if (activeStarNumber <= allStarsImages.length - 1) {
        allStarsImages.forEach(starImage => {
            starImage.classList.remove("active-stars");
        });
        allStarsImages[activeStarNumber].classList.add("active-stars");
    }
    timerId = setTimeout(() => {
        allStarsImages[0].classList.add("active-stars");
    }, 1000);
}