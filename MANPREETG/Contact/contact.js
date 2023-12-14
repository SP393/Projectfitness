document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', submit);
});

const submit = () => {
  const name = document.getElementById("full_name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const number = document.getElementById("number");

  let isValid;

  if (name.value == '') {
    name.nextElementSibling.textContent = 'This field is required!';
  } else {
    name.nextElementSibling.textContent = '';
  }

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required!';
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (password.value == '') {
    password.nextElementSibling.textContent = 'This field is required!';
  } else {
    password.nextElementSibling.textContent = '';
  }

  if (number.value == '') {
    number.nextElementSibling.textContent = 'This field is required!';
  } else {
    number.nextElementSibling.textContent = '';
  }

  if (name.value != '' && email.value != '' && password.value != '' && number.value != '') {
    isValid = true;
  }

  if (isValid) {
    document.getElementById("user-reg").reset();
    name.nextElementSibling.textContent = '';
    email.nextElementSibling.textContent = '';
    password.nextElementSibling.textContent = '';
    number.nextElementSibling.textContent = '';

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