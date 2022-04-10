/*to do 3/25 
1) if decimals repeat >3 times, round up to first decimal number  (goal: stop repeating decimals that extend for too long)
2) create function for percentageButton (toPercentage)  (Done)
3) returns "undefined" on negative secondNum 
4) doesn't always work with negative numbers

*/

const display = document.getElementById('display');
const operators = document.querySelectorAll("#plusMinus, #percentage, #addition, #subtraction, #multiplication, #division, #equals");
const plusMinusButton = document.querySelector("#plusMinus"); 
const percentageButton = document.querySelector("#percentage");
const displayResult = display.innerText;    

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

//positive to negative and vice-versa used in plusMinusButton and ran in operator function
const reverseNum = function reverseNum (firstNum, secondNum) {
    // return (parseInt(firstNum * -1)) (parseInt(secondNum * -1));
    if (firstNum > 0) {
        return (firstNum * -1);
    } else if (secondNum > 0) {
        return (secondNum * -1);
    } else if (firstNum < 0) {
        return (firstNum * -1);
    } else if (secondNum < 0) {
        return (secondNum * -1);
    }
}
console.log(reverseNum(10));

//convert displayed value to percentage on percentage click 
//On click, move decimal two places to the left. This happens on each click. 
//If value extends past the display box, add "e-[x]" where e is value and x is amount of spaces (look into e-x calc term)
//this rounds up the result to the nearest tenth. Somehow I need to get this to run for my actual operator functions to avoid returning results with multiple repeated decimal numbers (i.e. "4.9998888")
//this rounds a result to the second decimal place
// const toPercentage = function toPercentage (displayResult) {
//     return Math.round((displayResult * 100)/100;
// }

const toPercentage = function toPercentage (displayResult) {
    return (displayResult / 100);
}
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
        return divide(firstNum, secondNum);
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
    if (operator !== '' && firstNum !== '' && secondNum == '') {
        secondNum += "0" + decimal.innerText;
        display.innerText = secondNum;
    }
    //this might not do anything
    else if (operator !== '' && !secondNum.includes(".")) {
        secondNum += decimal.innerText;
         display.innerText = secondNum;
     }
})

/*rounds up or down displayed product if result has two or more of the same integer

// function roundUpOrDown() {
}
*/ 

function calc(e) {
    if (e.target.className === "number" || e.target.getElementById === "decimal") {
        if (operator === '') {
            firstNum += e.target.innerText;
            display.innerText = firstNum;
    
        } else {
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
        if (e.target.innerText !== "=" && e.target.innerText !== "+/-" && operator == '' && firstNum !== '') {
            operator = e.target.innerText;
            console.log(firstNum);
            console.log(operator);
        } 
        
        //essential if statement. Clears operator upon running operator function (if display == sum & firstnum == sum)
        if (firstNum == result && display.innerText == result) {
            operator = '';
        }
        //plusMinus if statement to validate +/- button and reset operator after executing
        if (e.target == plusMinusButton && display.innerText == firstNum) {
        console.log(firstNum);
        firstNum = reverseNum(firstNum)
        display.innerText = '';
        display.innerText = firstNum;
        }
        // work in progress to solve secondNum to negative without running operator function
        if (e.target == plusMinusButton && display.innerText == secondNum) {
        secondNum = reverseNum(secondNum);
        console.log(secondNum);
        display.innerText = '';
        display.innerText = secondNum;
        }
        //percentage if statement to validate % button 
        if (e.target == percentageButton && display.innerText !== "0") {
        newPercent = toPercentage(display.innerText);
        console.log(newPercent);
        display.innerText = '';
        display.innerText = newPercent;
        }

        //runs operator function on all operator buttons, changes operator value to operator clicked
        if (e.target.innerText == "+" && secondNum !== "" || secondNum == ".") {
            result = operate(operator, firstNum, secondNum);
            console.log(secondNum)
            console.log(result);
            display.innerText = '';
            display.innerText += result;
            operator = '+';
        }
        
        if (e.target.innerText == "-" && secondNum !== "" || secondNum == ".") {
            result = operate(operator, firstNum, secondNum);
            console.log(secondNum)
            console.log(result);
            display.innerText = '';
            display.innerText += result;
            operator = "-"; 

        }
        if (e.target.innerText == "*" && secondNum !== "" || secondNum == ".") {
            result = operate(operator, firstNum, secondNum);
            console.log(secondNum)
            console.log(result);
            display.innerText = '';
            display.innerText += result;
            operator = "*";
            
        }
        if (e.target.innerText == "/" && secondNum !== "" || secondNum == ".") {
            result = operate(operator, firstNum, secondNum);
            console.log(secondNum)
            console.log(result);
            display.innerText = '';
            display.innerText += result;
            operator = "/";
        }
        
        //creates functional equals button, runs operator function, displays result 
        if (e.target.innerText == "=") {
            result = operate(operator, firstNum, secondNum);
            display.innerText = '';
            display.innerText += result;
            
            if (secondNum == '' && e.target.innerText == '=') {
                display.innerText = firstNum;
            } 
        } 
        //prevents secondNum from continuously becoming what's clicked (numbers keep getting added to secondNum w/o)
        if (display.innerText == result) {
                firstNum = '';
                firstNum += result; 
                secondNum = '';
                secondNum += e.target.value; 
        };
        //runs operate function if target is an operator and an operator is already selected
        // if (firstNum !== '' && secondNum !== '' && operator.innerText !== '' && e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*' || e.target.innerText == '/') {
            
                  
        // }
    });
});


// plusMinusButton.addEventListener("click", reverseNum);

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