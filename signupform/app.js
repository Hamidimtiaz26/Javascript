const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const inputs = document.querySelectorAll(".form-control input");
console.log(email);
console.log(password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
})

//This function is used to throw error if username or email contain any spaces.
//Using here setTimeout fn to throw an error for 2s and then removing the error
//when the promise is resolve then we will update the input value
function removeSpaces(small, formControl) {
  return new Promise(resolve => {
    setTimeout(() => {
      small.innerText = "Spaces are not allowed at end or start"
      formControl.className = "form-control error";
      setTimeout(() => {
        formControl.className = "form-control";
        resolve();

      }, 2000)
    }, 0)
  })
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidPassword(password) {
  const passwordRegularEx = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$/;
  return passwordRegularEx.test(password);
}

function isValidEmail(email) {
  const emailPattern = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return emailPattern.test(email);
}


function checkInput() {

  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value

  //for username
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty");
  }
  else {
    setSuccessFor(username)
  }

  //for email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  }
  else if (!isValidEmail(emailValue)) {
    setErrorFor(email, "Invalid Email Pattern");
  }
  else {
    setSuccessFor(email);
  }
  //for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  }
  else if (!isValidPassword(passwordValue)) {
    setErrorFor(password, "Your password should contain at least one uppercase letter,number and special symbol(-,#,$,.,%,&,*) and should be of length 8 or more characters");
  }
  else {
    setSuccessFor(password)
  }

  //forpassword2
  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be empty");
  }
  else if (password2Value !== passwordValue) {
    setErrorFor(password2, "Password does not match");
  }
  else {
    setSuccessFor(password2);
  }
}

username.addEventListener("blur", () => {
  const formControl = username.parentElement;
  const small = formControl.querySelector("small");
  checkSpaces(username, small, formControl);
});

email.addEventListener("blur", () => {
  const emailValue = email.value.trim();
  email.value = email.value;
})


//This fn contain a regular expression which checks for if the input value contain spaces at the end or start of the string. If they contain any spaces then we will show error on screen using remove spaces fn and then we will update the input value
function checkSpaces(input, small, formControl) {

  const spaceRegex = /^\s|\s$/;

  if (spaceRegex.test(input.value)) {
    const inputValue = input.value.trim();
    removeSpaces(small, formControl)
      .then(() => {
        input.value = inputValue;
      })
  }
}