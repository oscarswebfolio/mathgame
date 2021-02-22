let numOne = document.getElementById('numOne');
let operator = document.getElementById('operatorSign');
let numTwo = document.getElementById('numTwo');
let userNum = document.getElementById('userNumber');
let next = document.getElementById('nextButton');
let text = document.getElementById('text');
let checkNum = document.getElementById('check');
let button = document.getElementById('btn');

operatorArray = ["+", "-", "x", "/"];
document.getElementById('btn').addEventListener('click', randomizer);
document.getElementById('check').addEventListener('click', check);
document.getElementById('nextButton').addEventListener('click', reset)


function randomizer() {
  numOne.innerText = Math.floor(Math.random(1) * 999);
  numTwo.innerText = Math.floor(Math.random(1) * 999);
  operator.innerText = operatorArray[Math.floor(Math.random(0) * 4)];
  button.style.display = "none";
  checkNum.style.visibility = "visible";
}


function maths() {
  if (operator.innerText == "+") {
     return parseInt(numOne.innerText) + parseInt(numTwo.innerText);
  } else if (operator.innerText == "-") {
     return parseInt(numOne.innerText) - parseInt(numTwo.innerText);
  } else if (operator.innerText == "x") {
     return parseInt(numOne.innerText) * parseInt(numTwo.innerText);
  } else if (operator.innerText == "/") {
     return parseInt(numOne.innerText) / parseInt(numTwo.innerText);
  }
}

function check() {
  let results = maths();
  console.log(maths());
  if (userNum.value == results) {
    text.innerText = "Correct!";
    next.style.visibility = "visible";
  } else {
    text.innerText = "Incorrect, try again.";
  }
}
function reset() {
  userNum.value = "";
  next.style.visibility = "hidden";
  text.innerText = "";
  randomizer();
}


/* ADDITION ONLY VERSION
let numOne = document.getElementById('numOne');
let operator = document.getElementById('operatorSign');
let numTwo = document.getElementById('numTwo');
let userNum = document.getElementById('userNumber');
let next = document.getElementById('nextButton');
let text = document.getElementById('text');
let checkNum = document.getElementById('check');
let button = document.getElementById('btn');

//operatorArray = ["+", "-", "x", "/"];

document.getElementById('btn').addEventListener('click', randomizer);
document.getElementById('check').addEventListener('click', check);
document.getElementById('nextButton').addEventListener('click', reset)


function randomizer() {
  numOne.innerText = Math.floor(Math.random(1) * 999);
  numTwo.innerText = Math.floor(Math.random(1) * 999);
  //operator.innerText = operatorArray[Math.floor(Math.random(0) * 4)];
  button.style.display = "none";
  checkNum.style.visibility = "visible";
}

function check() {
  let results = parseInt(numOne.innerText) + parseInt(numTwo.innerText);
  if (userNum.value == results) {
    text.innerText = "Correct!";
    next.style.visibility = "visible";
  } else {
    text.innerText = "Incorrect, try again.";
  }
}

function reset() {
  userNum.value = "";
  next.style.visibility = "hidden";
  text.innerText = "";
  randomizer();
}

*/