"use strict";

// Simple Calculator: 50%

// Write a program that asks the user to input two numbers.
// The user will choose an operation (addition, subtraction, multiplication, division).
// Perform the chosen operation on the two numbers.
// Display the result of the operation.

let operator = prompt(
  "Enter an operator to perform the math problem of (either +,-,*,/)"
);

let Num1 = prompt("Enter a Number");
Num1 = Number(Num1);

let Num2 = prompt("Enter another Number");
Num2 = Number(Num2);

let result = 0

if (operator === "+") {
  result = Num1 + Num2;
} else if (operator === "-") {
  result = Num1 - Num2;
} else if (operator === "*") {
  result = Num1 * Num2;
} else if (operator === "/") {
  result = Num1 / Num2;
} else {
  alert("invalid");
}

alert("The result is " + result);
 