
// Javascript for mind webpage

// Creating array to store images for carousel
let selfImages = ['/images/Mind/self1.jpg', '/images/Mind/self2.jpg', '/images/Mind/self4.jpg'];
let anxiousImages = ['/images/Mind/anx.jpg', '/images/Mind/anxious2.jpg', '/images/Mind/anxious3.jpg'];
let stressImages = ['/images/Mind/stressed.jpg', '/images/Mind/stress2.jpg', '/images/Mind/stress3.jpg'];

// Changing images after interval automatically
let i = 0;
setInterval(function () {
    document.getElementById('selfcare').style.background = `url(${selfImages[i]}) no-repeat center / cover`;
    document.getElementById('stress').style.background = `url(${stressImages[i]}) no-repeat center / cover`;
    document.getElementById('anxi').style.background = `url(${anxiousImages[i]}) no-repeat center / cover`;
    i++;
    if (i == selfImages.length) {
        i = 0;
    }
}, 1500)

// Creating carousel of videos
var videono = 1;
displayimg(videono);

function nextimg(n) {
    displayimg(videono += n)
}

function currentSlide(n) {
    displayimg(videono = n)
}

function displayimg(n) {
    var i;
    var image = document.getElementsByClassName("video");
    var dots = document.getElementsByClassName("dot");

    if (n > image.length) {
        videono = 1;
    }

    if (n < 1) {
        videono = image.length;
    }

    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }

    image[videono - 1].style.display = "block";
    dots[videono - 1].className += " actives";

}
// function myFunction() {
//     var x = document.querySelector("nav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }


// Function to reveal elements when scrolling down
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }

    }
}

// Function for hamburger navigation bar
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


