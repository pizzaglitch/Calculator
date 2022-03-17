//add function
const add = function add (x, y) {
    return x + y;
};
console.log(add(2,5));
//subtract 
const subtract = function subtract (x, y) {
    return x - y;
};
console.log(subtract(2,5));
//multiply
const multiply = function multiply (x, y) {
    return x * y;
};
console.log(multiply(2,5));
//divide 
const divide = function divide (x, y) {
    return x / y;
};
console.log(divide(2,5));

//operator function for calculator
function operate (operator, x, y) {
    if (operator === "+" || "add") {
        return x + y;
    } else if (operator === "-") {
        return x - y ;
    } else if (operator === "*") {
        return x * y;
    } else if (operator ==="/") {
        return x / y;
    }
};
console.log(operate("+",3,1));

//displays numbers from buttons in display
const numbers = document.querySelectorAll('button.number');
const display = document.getElementById('display');
for (i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(event) {
        display.innerText = display.innerText + event.currentTarget.value;
    })
};
//clears display with CE (Clear Entry) button click
const clearEntry = document.getElementById('clear');
clearEntry.addEventListener('click', function(event) {
    display.innerText = '';
});

//