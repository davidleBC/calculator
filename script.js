let num1 = 0;
let num2 = 0;
let operator;
let display;


const add = function(num1, num2) {
    return num1 + num2;    
  };
  
  const subtract = function(num1, num2) {
    return num1 - num2;
  };
  
  const multiply = function(num1, num2) {
    return num1 * num2;
  };
  
  const divide = function(num1, num2) {
    return num1 / num2;
  };

  const operate = function(num1, num2, operator) {
    switch(operator) {
      case "+":
        add(num1, num2);
        break;
      case "-":
        subtract(num1, num2);
        break;    
      case "x":
        multiply(num1, num2);
        break;
      case "%":
        divide(num1, num2);
        break;
    }  
  
  };
  
let plusBtn = document.querySelector('#plus');
let subtractBtn = document.querySelector('#subtract');
let divideBtn = document.querySelector('#divide');
let multiplyBtn = document.querySelector('#multiply');
let oneBtn = document.querySelector('#one');
let twoBtn = document.querySelector('#two');
let threeBtn = document.querySelector('#three');
let fourBtn = document.querySelector('#four');
let fiveBtn = document.querySelector('#five');
let sixBtn = document.querySelector('#six');
let sevenBtn = document.querySelector('#seven');
let eightBtn = document.querySelector('#eight');
let nineBtn = document.querySelector('#nine');
let zeroBtn = document.querySelector('#zero');
let decimalBtn = document.querySelector('#decimal');
let equalBtn = document.querySelector('#equal');
let displayScrn = document.querySelector('#display');
let clearBtn = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');

oneBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 1;
  }
  else {displayScrn.textContent += 1;}
});

twoBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 2;
  }
  else {displayScrn.textContent += 2;}
});

threeBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 3;
  }
  else {displayScrn.textContent += 3;}
});

fourBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 4;
  }
  else {displayScrn.textContent += 4;}
});

fiveBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 5;
  }
  else {displayScrn.textContent += 5;}
});

sixBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 6;
  }
  else {displayScrn.textContent += 6;}
});

sevenBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 7;
  }
  else {displayScrn.textContent += 7;}
});

eightBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 8;
  }
  else {displayScrn.textContent += 8;}
});

nineBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0") {
    displayScrn.textContent = "";
    displayScrn.textContent += 9;
  }
  else {displayScrn.textContent += 9;}
});

zeroBtn.addEventListener('click', function(event) {
  if (displayScrn.textContent == "0" ) {
  }
  else {displayScrn.textContent += 0;};
});

clearBtn.addEventListener('click', function(event) {
  displayScrn.textContent = "0";
});

deleteBtn.addEventListener('click', function(event){
  if (displayScrn.textContent == "0") {  }
  else if (displayScrn.textContent.length == 1) {displayScrn.textContent = "0"}
  else {displayScrn.textContent = displayScrn.textContent.slice(0,-1)}
  });

