//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    return window.console.log("Half of " + num + " is " + num/2);
}

halfNumber(12);

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    return window.console.log("The result of squaring the number " + num + " is " + num * num);
}

squareNumber(5);

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

function percentOf(numOne, numResult) {
    return window.console.log(numOne + " is " + (numOne/numResult)*100 + "% of " + numResult);
}
percentOf(12, 48);
//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus(numOne, numResult) {
    let answer = (numResult % numOne);
    return window.console.log(answer + " is the modulus of " + numOne + " and " + numResult + ".");
}

findModulus(4, 10);

//STEP 5
// Create a JavaScript function that accepts three numbers as parameters. 
// Collect these numbers using a series of prompts. 
// Once the values are collected, within the function, find the sum of all of the numbers combined. 
// Make sure to use the arguments object and several type conversion functions to accomplish this task.

function jsFunction(num1, num2, num3) {
    window.console.log("The calculated result is: " + (Number(arguments[0])+Number(arguments[1])+Number(arguments[2])) + ".");
    }
let num1 = Number(window.prompt("Enter a number"));
let num2 = Number(window.prompt("Enter another number"));
let num3 = Number(window.prompt("Enter one more number"));
jsFunction(num1, num2, num3);
