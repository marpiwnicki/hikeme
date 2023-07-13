let aboutPageText = document.querySelector(".about-page-text");

let marginInitial = 100;

window.addEventListener("wheel", handleScroll);


function handleScroll(e) {


    if (e.deltaY < 0) {

        if (marginInitial < 100) marginInitial += 8;
        aboutPageText.style.marginTop = marginInitial + "vh";
    }
    if (e.deltaY > 0) {
        if (marginInitial > 15) marginInitial -= 8;
        aboutPageText.style.marginTop = marginInitial + "vh";
    }
}