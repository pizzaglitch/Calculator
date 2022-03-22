const display = document.getElementById('display');
const operators = document.querySelectorAll("#plusMinus, #percentage, #addition, #subtraction, #multiplication, #division, #equals");
let firstNum = '';
let secondNum = '';
let operator = '';
let result = operate(operator);

//add function
const add = function add (firstNum, secondNum) {
    return (parseInt(firstNum) + parseInt(secondNum));
};
console.log(add(2,5));

//subtract 
const subtract = function subtract (firstNum, secondNum) {
    return (parseInt(firstNum) - parseInt(secondNum));
};
console.log(subtract(2,5));

//multiply
const multiply = function multiply (firstNum, secondNum) {
    return (parseInt(firstNum) * parseInt(secondNum));
};
console.log(multiply(2,5));

//divide 
const divide = function divide (firstNum, secondNum) {
    return (parseInt(firstNum) / parseInt(secondNum));
};
console.log(divide(2,5));

//operator function for calculator
function operate (operator, firstNum, secondNum) {
    if (operator == "+") {
        add(firstNum, secondNum);
        return add(firstNum, secondNum);
    } else if (operator == "-") {
        subtract(firstNum, secondNum);
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        multiply(firstNum, secondNum);
        return multiply(firstNum, secondNum);
    } else if (operator == "/") {
        divide(firstNum, secondNum);
        return divide(firstNum, secondNum);s
    }
    
};
console.log(operate("+"));

//applies click listeners to all buttons and runs calc(e) function on click
const buttons = document.querySelectorAll('button');
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        if (e.target.matches("button")){
            calc(e);
        } else if (e.target.matches("equals")) {
            operate(operator);
        }
    })
};
console.log();

// clears display with CE (Clear Entry) button click
const clearEntry = document.getElementById('clear');
clearEntry.addEventListener('click', function(event) {
    display.innerText = '';
    firstNum = '';
    secondNum = '';
    operator = '';
});

function calc(e) {
    if (e.target.className === "number") {
        if (operator === '') {
            firstNum = e.target.innerText; 
            display.innerText += firstNum;
        } else {
            display.innerText = '';
            secondNum += e.target.innerText;
            display.innerText += secondNum;
        }
        // display.innerText += e.currentTarget.value;
    }
}

ops = Array.prototype.slice.call(operators,0);

ops.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;
            console.log(firstNum);
            console.log(operator);
        } else {
            result = operate(operator, firstNum, secondNum);
            console.log(secondNum);
            console.log(result);
            display.innerText = '';
            display.innerText += result;
        } 
        if (display.innerText == result) {
                firstNum = '';
                firstNum += result; 
                secondNum = '';
                secondNum += e.target.value; 
        };
    });
});

// work in progress below
//working calc function
// const addition = document.getElementById('addition');
// const subtraction = document.getElementById('subtraction');
// const multiplication = document.getElementById('multiplication');
// const division = document.getElementById('division');
// const equals = document.getElementById('equals');
// const percentage = document.getElementById('percentage');
// const plusMinus = document.getElementById('plusMinus');

// function calc(e) {
//     const key = e.target; 
//     const action = key.dataset.action; 

//     if (action === "addition" || 
//         action === "subtraction"|| 
//         action === "multiplication" ||
//         action === "division"
//     ) {
//         console.log("operator key");
//     }
// }

//my own non functioning addition on 
// addition.addEventListener('click', function(event) {
//     x = display.innerText;
//     y = button
//     return operate("+",x,y);     
// });

// adds event listener to all buttons
// const keys = document.querySelector("#calcContent");
// keys.addEventListener("click", (e) => {
//     if (e.target.matches("button")){
//         calc(e);
//     }
//