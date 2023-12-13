
// Javascript for form

// Function to validate form
function validate() {
    let isError = false;
    let numberPattern = /^[0-9]*$/;
    let phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    // Validate first name
    if (document.querySelector('#fname').value == '') {
        document.querySelector('#fname').nextElementSibling.innerHTML = 'Enter valid Firstname';
        isError = true;
    } else {
        document.querySelector('#fname').nextElementSibling.innerHTML = '';
    }
    // Validate last name
    if (document.querySelector('#lname').value == '') {
        document.querySelector('#lname').nextElementSibling.innerHTML = 'Enter valid Lastname';
        isError = true;
    } else {
        document.querySelector('#lname').nextElementSibling.innerHTML = '';
    }
    // Validate email
    if (document.querySelector('#email').value == '' || !(document.querySelector('#email').value.includes('@'))) {
        document.querySelector('#email').nextElementSibling.innerHTML = 'Enter valid EmailId';
        isError = true;
    } else {
        document.querySelector('#email').nextElementSibling.innerHTML = '';
    }
    // Validate weight
    if (document.querySelector('#weight').value == '' || !numberPattern.test(document.querySelector('#weight').value)) {
        document.querySelector('#weight').nextElementSibling.innerHTML = 'Enter weight in kgs';
        isError = true;
    } else {
        document.querySelector('#weight').nextElementSibling.innerHTML = '';
    }
    // Validate desired weight
    if (document.querySelector('#desired').value == '' || !numberPattern.test(document.querySelector('#desired').value)) {
        document.querySelector('#desired').nextElementSibling.innerHTML = 'Enter weight in kgs';
        isError = true;
    } else {
        document.querySelector('#desired').nextElementSibling.innerHTML = '';
    }
    // Validate bmi
    if (document.querySelector('#bmi').value == '' || !numberPattern.test(document.querySelector('#bmi').value)) {
        document.querySelector('#bmi').nextElementSibling.innerHTML = 'Please enter valid BMI';
        isError = true;
    } else {
        document.querySelector('#bmi').nextElementSibling.innerHTML = '';
    }
    // Validate date of birth
    if (document.querySelector('#dob').value == '') {
        document.querySelector('#dob').nextElementSibling.innerHTML = 'Please enter Date of Birth';
        isError = true;
    } else {
        document.querySelector('#dob').nextElementSibling.innerHTML = '';
    }
    // Validate selected gender
    if (document.querySelector('#gender').value == 'none') {
        document.querySelector('#gender').nextElementSibling.innerHTML = 'Please select Gender';
        isError = true;
    } else {
        document.querySelector('#gender').nextElementSibling.innerHTML = '';
    }
    // Validate address
    if (document.querySelector('#street1').value == '' || document.querySelector('#city').value == ''
        || document.querySelector('#state').value == '' || document.querySelector('#zipcode').value == '') {
        if (document.querySelector('#street1').value == '') {
            document.querySelector('#address').nextElementSibling.innerHTML = 'Please enter Street';
            isError = true;
        } else if (document.querySelector('#city').value == '') {
            document.querySelector('#address').nextElementSibling.innerHTML = 'Please enter city';
            isError = true;
        } else if (document.querySelector('#state').value == '') {
            document.querySelector('#address').nextElementSibling.innerHTML = 'Please enter state';
            isError = true;
        } else if (document.querySelector('#zipcode').value == '') {
            document.querySelector('#address').nextElementSibling.innerHTML = 'Please enter zipcode';
            isError = true;
        } else {
            document.querySelector('#address').nextElementSibling.innerHTML = '';
        }
    }
    // Validate phone number
    if (document.querySelector('#phone').value == '' || !phonePattern.test(document.querySelector('#phone').value)) {
        document.querySelector('#phone').nextElementSibling.innerHTML = 'Enter valid phone number';
        isError = true;
    } else {
        document.querySelector('#phone').nextElementSibling.innerHTML = '';
    }
    // Validate confirmation checkbox
    if (!document.querySelector('#checkbox').checked) {
        document.querySelector('#terms').nextElementSibling.innerHTML = 'Please confirm';
        isError = true;
    } else {
        document.querySelector('#terms').nextElementSibling.innerHTML = ''
    }
    // If no error show success message
    if (isError == false) {
        localStorage.setItem("member", "yes");
        document.getElementById('complete').style.display = 'block';
        document.querySelector('form').style.display = 'none';
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

