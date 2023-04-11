/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const result = document.querySelector("#result");
  const playerScore = document.querySelector('#player-score')
  const hands = document.querySelector("#hands");

  
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  

  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice){
    return 0;
  }
  else if(playerChoice === "Rock" && computerChoice === "Scissors"){
    return 1;
  }
  else if(playerChoice === "Scissors" && computerChoice === "Paper"){
    return 1;
  }
  else if(playerChoice  === "Paper" && computerChoice === "Rock"){
    return 1;
  }
  else{
    return -1;
  }
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  if(score === 0){
    result.innerText = "It's Draw";
  }
  else if(score === 1){
    result.innerText = "You Win";
  }
  else{
    result.innerText = "You Lose";
  }
  playerScore.innerText =   score;
 
  hands.innerText = `${playerChoice} vs ${computerChoice}`;

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice,computerChoice);
  showResult(score, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const allButtons = document.querySelectorAll(".rpsButton");

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 for(let button of allButtons){
  button.addEventListener("click", function(){
    onClickRPS(button.value);
  })
 }

 const endGameButton = document.querySelector("#endGameButton");
  // Add a click listener to the end game button that runs the endGame() function on click
  endGameButton.addEventListener("click", function(){
    endGame();
  })
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  result.innerText = '';
  playerScore.innerText = "";
  hands.innerText = '';
}

playGame()