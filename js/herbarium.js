let activeGroupContainer = document.querySelector(".herbarium-group-container-active");
let GroupContainers = document.querySelectorAll(".herbarium-group-container");

let allImages = activeGroupContainer.querySelectorAll(".herbarium-image-container");
let colorSelector = document.querySelectorAll(".herbarium-color-selector");


let selectedColor = 0;

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("wheel", handleScroll);

colorSelector.forEach(button => { button.addEventListener("click", handleSelectorClick) });

function handleMouseMove(e) {
    allImages[1].style.opacity = e.clientX / document.documentElement.clientWidth;
    allImages[2].style.opacity = 1 - (e.clientY / document.documentElement.clientHeight);
}

function handleSelectorClick(e) {
    GroupContainers.forEach(groupContainer => { groupContainer.classList.remove("herbarium-group-container-active") })
    GroupContainers[this.id].classList.add("herbarium-group-container-active");
    activeGroupContainer = document.querySelector(".herbarium-group-container-active");
    allImages = activeGroupContainer.querySelectorAll(".herbarium-image-container");

    colorSelector.forEach(colorButton => { colorButton.classList.remove("herbarium-color-selector-active") })
    colorSelector[this.id].classList.add("herbarium-color-selector-active");
    selectedColor = this.id;
}

function handleScroll(e) {
    if ((e.deltaY > 0) && (selectedColor <= colorSelector.length-2)) selectedColor++;
    if ((e.deltaY < 0) && (selectedColor > 0 )) selectedColor--;
    
    GroupContainers.forEach(groupContainer => { groupContainer.classList.remove("herbarium-group-container-active") })
    GroupContainers[selectedColor].classList.add("herbarium-group-container-active");
    activeGroupContainer = document.querySelector(".herbarium-group-container-active");
    allImages = activeGroupContainer.querySelectorAll(".herbarium-image-container");

    colorSelector.forEach(colorButton => { colorButton.classList.remove("herbarium-color-selector-active") })
    colorSelector[selectedColor].classList.add("herbarium-color-selector-active");

}