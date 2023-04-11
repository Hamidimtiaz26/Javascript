//Selecting message to display

const wrongGuess = document.querySelector(".show-message .wrong-guess");
const failedMessage = document.querySelector(".show-message .failed");
const successMessage = document.querySelector(".show-message .success");

//Question
const displayQuestion = document.querySelector(".card .card-content .show-question");
//Selecting form
const form = document.querySelector(".card__form .form");

const formInput = document.querySelector(".card__form .form .form__input-text");

//Selecting time to display

const showTime = document.querySelector(".show-time");

//Selecting Buttons
const submitButton = document.querySelector(".buttons submitBtn");
const refreshButton = document.querySelector(".buttons .refreshBtn");


let randomNumber;
let time;
let myInterval;

const citiesNames = [{
  question: 'aolerh',
  answer: "lahore"
}, {
  question: "rehwpasa",
  answer: "peshawar"
}, {
  question: "alabhpruaw",
  answer: "bahawalpur"
}, {
  question: "ltmnau",
  answer: "multan"
}, {
  question: "sjmaroho",
  answer: "jamshoro"
}]

//function to display text
function toggleMessage(message, delay1, delay2) {
  return new Promise(resolve => {
    setTimeout(() => {
      message.classList.add("active")
      setTimeout(() => {
        message.classList.remove("active");
        resolve();
      }, delay2)
    }, delay1)
  })
}

//Function to show question each time we click refresh button or on window reload

function showQuestion() {
  //using clearInterval whenever i click on refresh button 
  //decreaseTime function decrease value of time 2 times rather than 1 time
  formInput.value = "";
  console.log("hello")
  clearInterval(myInterval);
  time = 30;
  randomNumber = Math.floor(Math.random() * citiesNames.length);
  console.log(randomNumber);
  const question = citiesNames[randomNumber].question;
  console.log("hello2")
  displayQuestion.innerHTML = question;
  myInterval = setInterval(decreaseTime, 1000);
}
//above function will execute whenever we reload window or click a refresh button

window.addEventListener("load", showQuestion);
refreshButton.addEventListener("click", showQuestion);

//function which will decrease the time and display it on screen

function decreaseTime() {
  if (time < 0) {
    clearInterval(myInterval);
    wrongGuess.classList.remove("active");

    formInput.disabled = true;
    toggleMessage(failedMessage, 0, 1000)
      .then(() => {

        console.log("This is running more than once ")
        showQuestion();
        formInput.disabled = false;

      });
  }
  else {
    showTime.innerHTML = `${time}s`;
    time--;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkAnswer();
})
function checkAnswer() {
  const inputValue = formInput.value;
  if (citiesNames[randomNumber].answer === inputValue.toLowerCase()) {
    clearInterval(myInterval);
    toggleMessage(successMessage, 0, 3000)
      .then(() => showQuestion());
  }
  else {
    formInput.disabled = true;
    if (time <= 3) {

    }
    toggleMessage(wrongGuess, 0, 3000)
      .then(() => {
        formInput.disabled = false;
      })
  }
}



