const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');



// validation.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function isValidPassword(password) {
        return password.length >= 6; // You can adjust the minimum length as needed
    }

    // Function to validate username length
    function isValidUsername(username) {
        return username.length >= 3; // You can adjust the minimum length as needed
    }

    // Function to handle form submission
    function validateForm(event) {
        event.preventDefault();

        // For the Login form
        if (event.target === loginForm) {
            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            if (!isValidEmail(loginEmail)) {
                alert('Invalid email format for login');
                return;
            }

            if (!isValidPassword(loginPassword)) {
                alert('Password must be at least 6 characters for login');
                return;
            }
        }

        // For the Registration form
        if (event.target === registerForm) {
            const username = document.getElementById('username').value;
            const registerEmail = document.getElementById('registerEmail').value;
            const registerPassword = document.getElementById('registerPassword').value;

            if (!isValidUsername(username)) {
                alert('Username must be at least 3 characters for registration');
                return;
            }

            if (!isValidEmail(registerEmail)) {
                alert('Invalid email format for registration');
                return;
            }

            if (!isValidPassword(registerPassword)) {
                alert('Password must be at least 6 characters for registration');
                return;
            }
        }

        // If all validations pass, you can proceed with form submission
        alert('Form submitted successfully!');
    }
    // Attach the validateForm function to the form submission event
    loginForm.addEventListener('submit', validateForm);
    registerForm.addEventListener('submit', validateForm);
});
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
// Function for hamburger navigation bar
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}