//add function
const add = function (x, y) {
    return x + y;
}
console.log(add(2,5));
//subtract 
const subtract = function (x, y) {
    return x - y;
}
console.log(subtract(2,5));
//multiply
const multiply = function (x, y) {
    return x * y;
}
console.log(multiply(2,5));
//divide 
const divide = function (x, y) {
    return x / y;
}
console.log(divide(2,5));

//operator function for calculator
function operate (operator, x, y) {
    if (operator === "+" || "add") {
        return x + y;
    } else if (operator === "-") {
        return x -y ;
    } else if (operator === "*") {
        return x * y;
    } else if (operator ==="/") {
        return x / y;
    }
};
console.log(operate("+",3,1));