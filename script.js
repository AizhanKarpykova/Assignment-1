
const images = ["img/IMG_1.jpeg", "img/IMG_2.jpeg", "img/IMG_3.jpeg", "img/IMG_4.jpeg", "img/IMG_5.jpeg"];
let index = 0;
const imgElement = document.getElementById("slider-image");
document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
});
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
});
