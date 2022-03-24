const display = document.getElementById('display');
const operators = document.querySelectorAll("#plusMinus, #percentage, #addition, #subtraction, #multiplication, #division, #equals");
const plusMinusButton = document.querySelector("#plusMinus"); 

let firstNum = '';
let secondNum = '';
let operator = '';
let result = operate(operator);
//add function
const add = function add (firstNum, secondNum) {
    return (parseFloat(firstNum) + parseFloat(secondNum));
};
console.log(add(2,5));

//subtract 
const subtract = function subtract (firstNum, secondNum) {
    return (parseFloat(firstNum) - parseFloat(secondNum));
};
console.log(subtract(2,5));

//multiply
const multiply = function multiply (firstNum, secondNum) {
    return (parseFloat(firstNum) * parseFloat(secondNum));
};
console.log(multiply(2,5));

//divide 
const divide = function divide (firstNum, secondNum) {
    return (parseFloat(firstNum) / parseFloat(secondNum));
};
console.log(divide(2,5));

//positive to negative and vice-versa
const reverseNum = function reverseNum (firstNum, secondNum) {
    // return (parseInt(firstNum * -1)) (parseInt(secondNum * -1));
    if (firstNum > 0) {
        return firstNum * -1;
    } else if (secondNum > 0) {
        return (secondNum * -1);
    } else if (firstNum < 0) {
        return (firstNum * -1);
    } else if (secondNum < 0) {
        return (secondNum * -1);
    }
}
console.log(reverseNum(-5,-2));
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
    //might not need +/- function as part of operator function. inverses final result when I hit enter
    //  } else if (operator == "+/-") {
    //     reverseNum(firstNum, secondNum);
    //     return reverseNum(firstNum, secondNum);
    }
    
};

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
    display.innerText = '0';
    firstNum = '';
    secondNum = '';
    operator = '';
});

//event listener for decimal click, doesn't allow more than one decimal (THIS WORKS!)
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', function(event) {
    if (!firstNum.includes(".") && display.innerText.charAt(0) == "0") {
        firstNum += "0" + decimal.innerText;
        display.innerText = firstNum;
       
    } 
    if (!firstNum.includes(".") && !display.innerText.charAt(0) == "0") {
        firstNum += decimal.innerText;
        display.innerText = firstNum;
    }
    else if (operator !== '' && !secondNum.includes(".")) {
        secondNum += decimal.innerText;
         display.innerText = secondNum;
     }
})

//adds target's innerText to firstNum and secondNum 
const zero = document.querySelector('button[value="0"]');
// zero.click(function (event) {
//     if (display.innerText.charAt(0) == "0") {
//     e.stopPropagation();
//     }
// })

function calc(e) {
    if (e.target.className === "number" || e.target.getElementById === "decimal") {
        if (operator === '') {
            firstNum += e.target.innerText;
            display.innerText = firstNum;
        }
        
        //stop repeating zeros
        // if (zero.clicked == true && display.innerText.charAt(0) == "0") {
        //     return;
        // }
        
        // }
        else {
            display.innerText = '';
            secondNum += e.target.innerText;
            display.innerText = secondNum;
        }
    }
}

//adds event listeners for clicks to all operator buttons
ops = Array.prototype.slice.call(operators,0);
ops.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;
            console.log(firstNum);
            console.log(operator);
        } 
        //plusMinus if statement to validate +/- button
        if (e.target == plusMinusButton && display.innerText !== "0") 
        {
        newSwitch = reverseNum(display.innerText);
          console.log(firstNum);
        display.innerText = '';
        display.innerText = newSwitch; 
        //creates functional equals button, runs operator function, displays result 
        } else if (e.target.innerText == "=") {
            result = operate(operator, firstNum, secondNum)
            console.log(firstNum);
            console.log(secondNum);
            console.log(result);
            display.innerText = '';
            display.innerText += result;
            if (secondNum == '' && e.target.innerText == '=') {
                display.innerText = firstNum;
            }
        } 
        //default value for display and firstNum set to zero 
        // if (display.innerText == '0') {
        //     firstNum = 0;
        // }

        if (display.innerText == result) {
                firstNum = '';
                firstNum += result; 
                secondNum = '';
                secondNum += e.target.value; 
        };
        
        
    });
});


plusMinusButton.addEventListener("click", reverseNum);

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