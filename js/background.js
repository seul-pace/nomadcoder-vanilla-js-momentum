const randImg = document.querySelector("#randImg");

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

randImg.appendChild(bgImage);