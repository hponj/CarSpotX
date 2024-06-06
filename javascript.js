// Car changing function for the Home section
const carplace = document.getElementById('Car-home');
const bmw = document.getElementById('bmw-btn');
const GTR = document.getElementById('gtr-btn');
const frerari = document.getElementById('frerari-btn');

function fadeOutImage() {
    carplace.style.transition = "opacity 0.3s ease"; // Apply smooth transition
    carplace.style.opacity = "0"; // Set opacity to 0
}

function fadeInImage(newSrc) {
    carplace.src = newSrc; // Set the new image URL
    carplace.style.opacity = "1"; // Gradually increase opacity
}

function smoothImageTransition(newSrc) {
    fadeOutImage();
    setTimeout(() => {
        fadeInImage(newSrc);
    }, 300); 
}

function bmwbtn() {
    smoothImageTransition("image/car/BMW M2.png");
    bmw.style.borderColor = "#0094FF";
    GTR.style.borderColor = "#F0F0F0";
    frerari.style.borderColor = "#F0F0F0";
}

function freraribtn() {
    smoothImageTransition("image/car/frerari.png");
    bmw.style.borderColor = "#F0F0F0";
    GTR.style.borderColor = "#F0F0F0";
    frerari.style.borderColor = "#0094FF";
}

function gtrbtn() {
    smoothImageTransition("image/car/GTR-2015-car.png");
    bmw.style.borderColor = "#F0F0F0";
    GTR.style.borderColor = "#0094FF";
    frerari.style.borderColor = "#F0F0F0";
}

// car color
const carcolor = document.getElementById('car-color-system');
const carcolortext = document.getElementById('car-color-text');
const carcolorBG = document.getElementById('car-color');
const carcolorwafe = document.getElementById('wafe');

const Cyancar = document.getElementById('cyan-car');
const redcar = document.getElementById('red-car');
const orangecar = document.getElementById('orange-car');
const darkblue = document.getElementById('darkblue-car');
const graycar = document.getElementById('gray-car');

function cyanON(){
    carcolor.src = "image/CarModels/car-models-color/cyan.png";
    carcolortext.innerText = "Pure Blue";
    carcolorBG.style.backgroundImage = "linear-gradient(to bottom, #FFF 50%, #0094FF 50%)";
    carcolorwafe.style.fill = "#0094FF";
}

function redON(){
    carcolor.src = "image/CarModels/car-models-color/red.png";
    carcolortext.innerText = "Super Red";
    carcolorBG.style.backgroundImage = "linear-gradient(to bottom, #FFF 50%, #DF0211 50%)";
    carcolorwafe.style.fill = "#DF0211";
}

function orangeON(){
    carcolor.src = "image/CarModels/car-models-color/Orange.png";
    carcolortext.innerText = "Orange";
    carcolorBG.style.backgroundImage = "linear-gradient(to bottom, #FFF 50%, #F17C03 50%)";
    carcolorwafe.style.fill = "#F17C03";
}

function darkblueON(){
    carcolor.src = "image/CarModels/car-models-color/dark-blue.png";
    carcolortext.innerText = "Dark Blue";
    carcolorBG.style.backgroundImage = "linear-gradient(to bottom, #FFF 50%, #0056CD 50%)";
    carcolorwafe.style.fill = "#0056CD";
}

function grayON(){
    carcolor.src = "image/CarModels/car-models-color/gray.png";
    carcolortext.innerText = "Gray";
    carcolorBG.style.backgroundImage = "linear-gradient(to bottom, #FFF 50%, #5C5C5C 50%)";
    carcolorwafe.style.fill = "#5C5C5C";
}

// swipper js car




