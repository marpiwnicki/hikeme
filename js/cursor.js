let mouseCursor = document.querySelector(".cursor-smoke");
let imageContainer = document.querySelector(".smoke-image-container");
let timerId;

let filterRadial = 80;

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.width = 10 + "rem";
    mouseCursor.style.height = 10 + "rem";


    // Clear the previous timer (if any)
    clearTimeout(timerId);

    x = 20;
    y = 30;
    // imageContainer.style.clipPath = `circle(500px at ${e.pageX}px ${e.pageY}px)`;


    const containerWidth = imageContainer.offsetWidth;
    const containerHeight = imageContainer.offsetHeight;

    const maskPosition = `calc(${e.pageX}px - ${containerWidth}px) calc(${e.pageY}px - ${containerHeight}px)`;
    imageContainer.style.maskPosition = maskPosition;
    imageContainer.style.webkitMaskPosition = maskPosition;


    imageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    imageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;

    if (filterRadial < 100) filterRadial++;
    console.log(filterRadial);

    // Start a new timer to change the cursor size after a certain delay
    timerId = setTimeout(() => {
        // Change the cursor size
        mouseCursor.style.width = 2 + "rem";
        mouseCursor.style.height = 2 + "rem";

        // imageContainer.style.clipPath = `circle(100px at ${e.pageX}px ${e.pageY}px)`;
    }, 100); // Adjust the delay as needed

    timerId2 = setTimeout(() => {
        if (filterRadial > 80) filterRadial--;
        console.log(filterRadial);
        imageContainer.style.maskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black  ${filterRadial / 2}%, transparent ${filterRadial}%)`;
        imageContainer.style.webkitMaskImage = `radial-gradient(circle ${filterRadial * 10}px at center, black ${filterRadial / 2}%, transparent ${filterRadial}%)`;
    }, 1000);
}

