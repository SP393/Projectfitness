// form-validation.js

// Function to validate the form
function validateForm() {
    // Get form elements
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let visit = document.querySelector('input[name="visit"]:checked');
    let find = document.querySelector('input[name="find"]:checked');
    let routine = document.getElementById('routine_question').value;
    let returnLikelihood = document.getElementById('return_question').value;
    let satisfaction = document.getElementById('satisfied_question').value;
    let improvement = document.getElementById('improvement_box').value;
    let contact = document.querySelector('input[name="contact_question"]:checked');

    // Flag to track if there are any validation errors
    let isValid = true;

    // Validation for Name




    if (name.trim() === '') {
        isValid = false;
        displayError('name', 'Please enter your name.');
    } else {
        hideError('name');
    }

    // Validation for Email
    if (email.trim() === '') {
        isValid = false;
        displayError('email', 'Please enter your email.');
    } else if (!isValidEmail(email)) {
        isValid = false;
        displayError('email', 'Please enter a valid email address.');
    } else {
        hideError('email');
    }

    // Validation for Visit
    if (!visit) {
        isValid = false;
        displayError('visit', 'Please select if this is your first visit.');
    } else {
        hideError('visit');
    }

    // Validation for Find
    if (!find) {
        isValid = false;
        displayError('find', 'Please select if you were able to find what you needed.');
    } else {
        hideError('find');
    }

     // Validation for Routine
     if (!routine.trim()) {
        isValid = false;
        displayError('routine_question', 'Please select the ease of finding a workout routine.');
    } else {
        hideError('routine_question');
    }

    // Validation for Return Likelihood
    if (!returnLikelihood.trim()) {
        isValid = false;
        displayError('return_question', 'Please select the likelihood of returning to the site.');
    } else {
        hideError('return_question');
    }

    // Validation for Satisfaction
    if (!satisfaction.trim()) {
        isValid = false;
        displayError('satisfied_question', 'Please select your satisfaction level.');
    } else {
        hideError('satisfied_question');
    }

    // Validation for Improvement
    if (!improvement.trim()) {
        isValid = false;
        displayError('improvement_box', 'Please provide feedback on how we can improve.');
    } else {
        hideError('improvement_box');
    }

    // Validation for Contact
    if (!contact) {
        isValid = false;
        displayError('contact_question', 'Please select if you would like a representative to contact you.');
    } else {
        hideError('contact_question');
    }

    // You can add more validations for other fields similarly

    // Return the overall validation result
    return isValid;
}

// Function to display error messages
function displayError(fieldId, message) {
    let errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }
}

// Function to hide error messages
function hideError(fieldId) {
    let errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }
}

// Function to check if the email is valid using a simple regex
function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to submit the form after validation
function submitForm() {
    if (validateForm()) {
        // Submit the form if validation passes
        document.getElementById('feedback').submit();
    }
}
