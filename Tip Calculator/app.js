//alert("hello");


const billInput = document.querySelector("#billAmount");
const tipPercentageInput = document.querySelector("#tipPercentage");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const personDisplay = document.querySelector("#personDisplay");
const totalAmount = document.querySelector("#result");

let billAmount = 0; //To store billAmountInput value;
let tipAmount = 0; //To store tipPercentageInput value;
let actualTipAmount = 0; //to store results of billAmount * tipAmount;
let person = 1; //To store the value of persons when we click on buttons
let total = 0; //to store total amount
let total2 =0;
addBtn.disabled = true;
subtractBtn.disabled = true;
 

billInput.addEventListener("input", function(){
  if(billInput.value === ''){
    billAmount = 0;
 
  }
  else{
    billAmount = parseFloat(billInput.value);

  }
  tipCalc();
  buttonDis();
});

tipPercentageInput.addEventListener("input", function(){
  if(tipPercentageInput.value === ''){
    tipAmount = 0; 
  }
  else{
    tipAmount = parseFloat(tipPercentageInput.value);
  }
  tipCalc();
  buttonDis();
});

function tipCalc(){
  actualTipAmount = (tipAmount/100)*billAmount;
  total = actualTipAmount+billAmount;
  totalAmount.textContent = total;
  person = 1;
  personDisplay.textContent = person;
  addBtn.disabled = false;
  subtractBtn.disabled = false;
}
function buttonDis(){
  if(billInput.value === '' & tipPercentageInput.value === ''){
    addBtn.disabled = true;
    subtractBtn.disabled = true;
  }
}

addBtn.addEventListener("click", function(){
  person = person + 1;
  totalCalculatorOnClick();   
});

subtractBtn.addEventListener("click", function(){
  person = person -1;
  if(person<1){
    person = 1;
  }
  totalCalculatorOnClick();
});

function totalCalculatorOnClick(){
  if(person>=1){
    
    total2 = total/person;
    console.log(total2);
    totalAmount.textContent = total2;
  }
  personDisplay.textContent = person;
}
