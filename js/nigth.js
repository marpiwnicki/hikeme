let mainImageLayerPerson = document.querySelector(".night-image-main-layer-person");
let mainImageLayerMountain = document.querySelector(".night-image-main-layer-mountain");
let mainImageLayerSky = document.querySelector(".night-image-main-layer-sky");



let allStarsImagesContainers = document.querySelectorAll(".image-container-stars");
let allStarsImages = document.querySelectorAll(".night-image-stars");
let allStarsImages2 = document.querySelectorAll(".night-image-stars2");
let switchButton = document.querySelector(".switch-button");
let locationButtons = document.querySelectorAll(".location-button");



let activeStars = 0;
locationButtons[activeStars].classList.add("location-button-selected");


let scrollPosition = 0;
let activeStarNumber = 0;

let personPosition = 64;
let mountainPosition = 87;
let skyPosition = 84;
let scrollSpeed = 2;

let timerId;

window.addEventListener("wheel", handleScroll);
window.addEventListener("mousemove", handleMouseMove);
switchButton.addEventListener("click", handleSwitchButton);

function handleSwitchButton(e) {

    locationButtons[activeStars].classList.remove("location-button-selected");
    if (activeStars == 0) activeStars = 1; else activeStars = 0;
    allStarsImagesContainers.forEach(container => { container.classList.remove("inactive"); });
    allStarsImagesContainers[activeStars].classList.add("inactive");
    locationButtons[activeStars].classList.add("location-button-selected");
    console.log(activeStars);
}

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

        switchButton.style.visibility = "visible";
        locationButtons.forEach(button => { button.style.visibility = "visible" });


    }
    if (scrollPosition <= 20) {
        mainImageLayerPerson.style.marginTop = 57 + "vh";
        mainImageLayerMountain.style.marginTop = 34 + "vh";
        mainImageLayerSky.style.marginTop = -5 + "vh";
        mainImageLayerPerson.style.opacity = 1;
        mainImageLayerMountain.style.opacity = 1;
        mainImageLayerSky.style.opacity = 1;


        switchButton.style.visibility = "collapse";
        locationButtons.forEach(button => { button.style.visibility = "collapse" });

    }
}

function handleMouseMove(e) {

    clearTimeout(timerId);
    if (activeStars == 1) {
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
    if (activeStars == 0) {
        activeStarNumber = Math.round((e.clientX / document.documentElement.clientWidth) * allStarsImages2.length) + 1;
        if (activeStarNumber <= allStarsImages2.length - 1) {
            allStarsImages2.forEach(starImage => {
                starImage.classList.remove("active-stars");
            });
            allStarsImages2[activeStarNumber].classList.add("active-stars");
        }
        timerId = setTimeout(() => {
            allStarsImages2[0].classList.add("active-stars");
        }, 1000);
    }
}