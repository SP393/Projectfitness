
// Javacript for Fitness webpage

// Function to view more content
function show() {

    if (document.getElementById('toggle1').textContent == "View Less") {
        document.getElementById('hide1').style.display = 'none';
        document.getElementById('hide2').style.display = 'none';
        document.getElementById('hide3').style.display = 'none';
        document.getElementById('toggle1').textContent = "View More"
    } else {
        document.getElementById('hide1').style.display = 'grid';
        document.getElementById('hide2').style.display = 'grid';
        document.getElementById('hide3').style.display = 'grid';
        document.getElementById('toggle1').textContent = "View Less"
    }
};

// Function to open membership popup
function Pop() {
    if (localStorage.getItem("member") != "yes") {
        document.getElementById('pop').style.display = 'block';
        document.getElementById('blur').style.opacity = '0.7';
        document.getElementById('pop').style.opacity = '1';
    } else{
        document.getElementById('session').setAttribute("href", "PhysicalFitness.html");
    }
}
// Function to close membership popup
function Close() {
    document.getElementById('pop').style.display = 'none';
    document.getElementById('blur').style.opacity = '1';
}

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
