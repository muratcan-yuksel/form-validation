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

function passInput() {
  //get the first pass
  const pass1 = document.getElementById("pass");
  //get the 2nd pass
  const pass2 = document.getElementById("pass2");
  //get the first error Para
  const error1 = document.getElementById("passError1");
  //get the 2nd error para
  const error2 = document.getElementById("passError2");
  if (pass1.value != pass2.value) {
    error2.textContent = "Your passwords don't match!";
  }
}
