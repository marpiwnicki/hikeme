let mainImageLayerPerson = document.querySelector(".night-image-main-layer-person");
let mainImageLayerMountain = document.querySelector(".night-image-main-layer-mountain");
let mainImageLayerSky = document.querySelector(".night-image-main-layer-sky");

let scrollPosition = 0;

let personPosition = 64;
let mountainPosition = 87;
let skyPosition = 84;
let scrollSpeed = 2;

window.addEventListener("wheel", handleScroll);

function handleScroll(e) {

    if (e.deltaY < 0) {
        personPosition += scrollSpeed;
        mountainPosition += scrollSpeed;
        skyPosition += scrollSpeed;
        mainImageLayerPerson.style.height = personPosition + "vh";
        mainImageLayerMountain.style.height = mountainPosition + "vh";
        mainImageLayerSky.style.height = skyPosition + "vh";

        console.log("Person: " + personPosition + " Mount: " + mountainPosition + " Sky: " + skyPosition);
    }
    if (e.deltaY > 0) {

        if (personPosition >= 43) {
            personPosition -= scrollSpeed;
            mountainPosition -= scrollSpeed;
            skyPosition -= scrollSpeed;
            mainImageLayerPerson.style.height = personPosition + "vh";
            mainImageLayerMountain.style.height = mountainPosition + "vh";
            mainImageLayerSky.style.height = skyPosition + "vh";

            console.log("Person: " + personPosition + " Mount: " + mountainPosition + " Sky: " + skyPosition);
        }
    }

    // if (personPosition <= 43) {
    //     document.body.style.overflow = 'auto';
    // } else {
    //     document.body.style.overflow = 'hidden';

    // }
}