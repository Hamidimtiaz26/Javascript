
const rangeInput = document.querySelector("#range-selector");
const checboxes = document.querySelectorAll('input[type="checkbox"]');
const upperCaseLetterCheckbox = document.querySelector("#uppercaseletters")
const lowerCaseLetterCheckbox = document.querySelector("#lowercaseletters")
const numberCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols")
const btn = document.querySelector(".button");
const displayPassword = document.querySelector(".password");
const characterLength = document.querySelector(".character-length span");
const spans = document.querySelectorAll(".spans span");
const span1 = document.querySelector("#span1");
const passwordStrengthDisplay = document.querySelector(".show-strength");
const copyBtn = document.querySelector(".copyBtn");
const showPasswordCopyMsg = document.querySelector(".passwordcopymsg");
let length = 8;
console.log(checboxes);




rangeInput.addEventListener("change", () => {
  length = Number(rangeInput.value);
  characterLength.innerText = length;
})


//This function is checking for which condition is true.
//When a certain condition is true, each condition contain str, regex and generatePassword function call.
function checkBoxes() {


  if (upperCaseLetterCheckbox.checked && lowerCaseLetterCheckbox.checked && numberCheckbox.checked && symbolsCheckbox.checked) {
    const str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz1234567890@#!%&~*+-_$^"
    const regex = /^(?=.*\d)(?=.*[@#!%&~\*\+\-_\$^])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);

  }
  else if (upperCaseLetterCheckbox.checked && lowerCaseLetterCheckbox.checked && symbolsCheckbox.checked) {
    const str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz@#!%&~*+-_$^"
    const regex = /^(?=.*[@#!%&~\*\+\-_\$^])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);

  }
  else if (upperCaseLetterCheckbox.checked && numberCheckbox.checked && symbolsCheckbox.checked) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890@#!%&~*+-_$^"
    const regex = /^(?=.*\d)(?=.*[@#!%&~\*\+\-_\$^])(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);
  }

  else if (lowerCaseLetterCheckbox.checked && numberCheckbox.checked && symbolsCheckbox.checked) {
    const str = "abcdefghijklmnopqrstuvxyz1234567890@#!%&~*+-_$^"
    const regex = /^(?=.*\d)(?=.*[@#!%&~\*\+\-_\$^])(?=.*[a-z]).{8,16}$/
    generatePassword(str, regex);

  }
  else if (upperCaseLetterCheckbox.checked && symbolsCheckbox.checked) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVXYZ@#!%&~*+-_$^"
    const regex = /^(?=.*[@#!%&~\*\+\-_\$^])(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);
  }
  else if (lowerCaseLetterCheckbox.checked && symbolsCheckbox.checked) {
    const str = "abcdefghijklmnopqrstuvxyz@#!%&~*+-_$^"
    const regex = /^(?=.*[@#!%&~\*\+\-_\$^])(?=.*[a-z]).{8,16}$/
    generatePassword(str, regex);
  }
  else if (numberCheckbox.checked && symbolsCheckbox.checked) {
    const str = "1234567890@#!%&~*+-_$^"
    const regex = /^(?=.*[@#!%&~\*\+\-_\$^])(?=.*\d).{8,16}$/
    generatePassword(str, regex);
  }
  else if (upperCaseLetterCheckbox.checked && lowerCaseLetterCheckbox.checked && numberCheckbox.checked) {

    const str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz1234567890"
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);

  }

  else if (upperCaseLetterCheckbox.checked && numberCheckbox.checked) {
    console.log("running")
    const str = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890";
    const regex = /^(?=.*\d)(?=.*[A-Z]).{8,16}$/
    generatePassword(str, regex);


  }
  else if (lowerCaseLetterCheckbox.checked && numberCheckbox.checked) {
    const str = "abcdefghijklmnopqrstuvxyz0123456789";
    const regex = /^(?=.*\d)(?=.*[a-z])[a-z0-9].{8,16}$/
    generatePassword(str, regex);

  }
  else if (lowerCaseLetterCheckbox.checked && upperCaseLetterCheckbox.checked) {

    const str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz"
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/

    generatePassword(str, regex);


  }
  else if (upperCaseLetterCheckbox.checked) {

    const str = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
    //Regex is set to false because it is global variable
    //When we select all the four options and then we select only single option like
    //lowercase,uppercase, numbers or symbols then the previous regex value is used hence it displays an error of
    //maxiumum stack reached because checkpassword and genericfn runs continuously. Therefore, I set the regex to false. 
    // regex = false;
    generatePassword(str, null);

  }
  else if (lowerCaseLetterCheckbox.checked) {

    const str = "abcdefghijklmnopqrstuvxyz";
    // regex = false;
    generatePassword(str, null);

  }
  else if (symbolsCheckbox.checked) {
    const str = "@#!%&~*+-_$^";
    // regex = false;
    generatePassword(str, null);

  }
}

//This function takes 2 parameters str and regex, then each time it picks a random character from string and save it to a variable named password.
//Then this function has a conditional statement where it checks if the string and regex value is passed then it calls checkpassword function.
//If the string and regex do not have value, then else statement runs where it set the innerText of displayPassword to password variable value.
//else statement also show password strength, password strength msg if it is weak , very weak etc
function generatePassword(str, regex) {

  let password = "";
  for (let i = 0; i <= length; i++) {
    password += str[Math.floor(Math.random() * str.length)];
  }


  if ((regex && str)) {

    checkPassword(password, regex, str);
  }
  else {

    displayPassword.innerText = password;
    displayPassword.className = "password active";
    spans.forEach(span => {
      span.className = "span"
    })
    passwordStrengthDisplay.innerText = "Very Weak";
    passwordStrengthDisplay.className = "show-strength red";
    span1.className = "span red-bg";
  }
}

//This function takes three parameters password, regex, str. Then are are two conditional Statments, If statemnet checks for regex and password test is true or false, if it true then it changes the display password innerText to password value, if it is not true then it again calls generate password function.
function checkPassword(password, regex, str) {


  if (regex.test(password)) {
    displayPassword.innerText = password;
    displayPassword.className = "password active";
    checkboxChecked();
  }
  else {
    generatePassword(str, regex);
  }

}

//Here first we check how many checkboxes are checked each time it checks for a checkbox, if the checkbox is checked then it increase the value of count variable which is used in if else statement after that
//Here we have checked for if all the checkboxes are checked then, it will show strong message and all span color changes to green. If only three checkboxes are selected then it will show message normal and only three span color changes to orange and if the two checkboxes are selected, then it will show message weak and only two span color changes to red.
function checkboxChecked() {
  let count = 0
  spans.forEach(span => {
    span.className = "span"
  })
  checboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      count++;
    }
  })

  if (count === checboxes.length) {
    spans.forEach(span => {
      span.className = "span green-bg"
    })
    passwordStrengthDisplay.innerText = "strong";
    passwordStrengthDisplay.className = "show-strength green";
  }
  else if (count === 3) {

    for (let i = 0; i < 3; i++) {
      spans[i].className = "span orange-bg";
    }
    passwordStrengthDisplay.innerText = "Normal";
    passwordStrengthDisplay.className = "show-strength orange";
  }
  else if (count === 2) {

    for (let i = 0; i < 2; i++) {
      spans[i].className = "span red-bg";
    }
    passwordStrengthDisplay.innerText = "Weak";
    passwordStrengthDisplay.className = "show-strength red";
  }
}

//To copy the password innerText to clipboard
copyBtn.addEventListener("click", () => {
  if (displayPassword.innerText !== "Display Password") {
    copyText();
  }
})

//To show message on screen that password is copied
function toggleMessage(message, delay1, delay2) {
  return new Promise(resolve => {
    setTimeout(() => {
      message.classList.add("show")
      setTimeout(() => {
        message.classList.remove("show");
        resolve();
      }, delay2)
    }, delay1)
  })
}
//This is async function which waits for the displaypassword innerText to be copied on the clipboard, after that it runs toggleMessage function
async function copyText() {
  await navigator.clipboard.writeText(displayPassword.innerText);
  toggleMessage(showPasswordCopyMsg, 0, 1000);

}

btn.addEventListener("click", () => {
  checkBoxes();
});

