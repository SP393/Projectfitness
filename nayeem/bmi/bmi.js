// BMI Calculator
document.getElementById("calculate").addEventListener("click", function () {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = weight / ((height / 100) * (height / 100));
    var resultText = "Your BMI: " + bmi.toFixed(2);

    if (isNaN(bmi)) {
        resultText = "Please enter a valid weight and height.";
    }

    document.getElementById("result").innerHTML = resultText;
});

// Image Slider
const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlides() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slide').length) {
        slideIndex = 0;
    }
    const slideWidth = -100 * slideIndex;
    slider.style.transform = `translateX(${slideWidth}%)`;
}

setInterval(showSlides, 3000); // Change slides every 3 seconds

// Hamburger Navigation Bar
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
