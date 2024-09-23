let imageElement = document.getElementById("image");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";

function onIncrease() {
    if (defaultImageWidth >= 300) {

        document.getElementById("warningMessage").textContent = "Too big. Decrease the size of the Image"
    } else {
        document.getElementById("warningMessage").textContent = ""
        defaultImageWidth = defaultImageWidth + 5
        imageElement.style.width = defaultImageWidth + "px"
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px"
    }
}

function onDecrease() {


    if (defaultImageWidth <= 100) {
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the Image"
    } else {
        document.getElementById("warningMessage").textContent = ""
        defaultImageWidth = defaultImageWidth - 5
        imageElement.style.width = defaultImageWidth + "px"
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px"
    }
}