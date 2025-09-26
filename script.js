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

//

//function to validate password
function validatePassword() {
  if (password.validity.tooShort) {
    console.log("Password must be at least 8 characters long");
  }
}
password.addEventListener("input", () => validatePassword());

//function to validate email
function validateEmail() {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    console.log("Invalid email format");
    return false;
  }
}
