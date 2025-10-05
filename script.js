///get form data
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const formvar = document.getElementById("registrationForm");

//eerror message
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

//form submit event
formvar.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(form.value);
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);

  ///set local storage

  localStorage.setItem("email", email.value);
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
  localStorage.setItem("confirmPassword", confirmPassword.value);
});

if (localStorage.getItem("username")) {
  document.getElementById("username").value = localStorage.getItem("username");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("password").value = localStorage.getItem("password");
  document.getElementById("confirmPassword").value =
    localStorage.getItem("confirmPassword");
}

//Validation functions

//function to validate password
function validatePassword() {
  if (password.validity.tooShort) {
    console.log("Password must be at least 8 characters long");
  }
}
password.addEventListener("input", () => validatePassword());

//function to validate email
function validateEmail() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
}
email.addEventListener("input", () => validateEmail());

//function to validate username
function validateUsername() {
  if (username.validity.valueMissing) {
    usernameError.textContent = "Username is required.";
  } else {
    usernameError.textContent = "";
  }
}
username.addEventListener("input", () => validateUsername());

//function to validate confirm password
function validateConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    passwordError.textContent = "Passwords do not match.";
  } else {
    passwordError.textContent = "";
  }
}
confirmPassword.addEventListener("input", () => validateConfirmPassword());

//function to validate field
function validateField(field) {
  if (field === username) {
    validateUsername();
  } else if (field === email) {
    validateEmail();
  } else if (field === password) {
    validatePassword();
  } else if (field === confirmPassword) {
    validateConfirmPassword();
  }
}

//add event listeners to inputs
username.addEventListener("input", () => validateField(username));
email.addEventListener("input", () => validateField(email));
password.addEventListener("input", () => validateField(password));
confirmPassword.addEventListener("input", () => validateField(confirmPassword));

//form submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateField(username);
  validateField(email);
  validateField(password);
  validateField(confirmPassword);

  if (
    username.validity.valid &&
    email.validity.valid &&
    password.validity.valid &&
    confirmPassword.value === password.value
  ) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors in the form.");
  }
});
