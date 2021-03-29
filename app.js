// get the username
const userName = document.getElementById("userName");
// get the error message
const userError = document.getElementById("userError");
// validate the username
function userInput() {
  if (userName.value.length < 5 || userName.value.length > 15) {
    userError.textContent = "User name must be between 5-15 characters long";
  } else {
    userError.textContent = "";
  }
}
function emailInput() {
  const email = document.getElementById("email");
  // regex for sth@sth.sth
  const reg = /\S+@\S+\.\S+/;
  // get email error
  const error = document.getElementById("emailError");
  if (reg.test(email.value) === false) {
    error.textContent = "Please enter a valid email address";
  } else {
    error.textContent = "";
  }
}

function zipInput() {
  const zip = document.getElementById("zip");
  //regex for numbers only
  const reg = /^\d+$/;
  const error = document.getElementById("zipError");
  if (reg.test(zip.value) === false) {
    error.textContent = "Please enter a valid Zip Code";
  } else {
    error.textContent = "";
  }
}
