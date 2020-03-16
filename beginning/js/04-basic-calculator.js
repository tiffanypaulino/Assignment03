// In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. 
// To complete this lab follow the steps outlined here:
// 1. Prompt the user for a number and store that in a variable.
// 2. Prompt the user for a second number and store that in a variable.
// 3. Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// 4. Create a new named function called calculate() that accepts 3 parameters.
// 5. Call the calculate function and pass in the 3 variables as parameters. 
// HINT: You will need to convert the 2 numbers from strings to numbers. 
// 6. Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
// 7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.

let num1, num2, operation, answer;
let loop = true;

function calculate(one, two, three) {
    while(loop) {
        num1 = window.prompt("Enter a number");
        num2 = window.prompt("Enter second number");
        operation = window.prompt("To add enter +" + 
                             "To subtract enter - " + 
                             "To multiply enter * " + 
                             "To divide enter / " + 
                             "To stop enter 'stop' ");
        switch(operation) {
            case "+": 
                let ans = Number(num1) + Number(num2);
                window.document.write("Your answer is " + answer + "<br>")
                break;
            case "-":
                let ans = Number(num1) - Number(num2);
                window.document.write("Your answer is " + answer + "<br>")
                break;
    
            case "*":
                let ans = Number(num1) * Number(num2);
                window.document.write("Your answer is " + answer + "<br>")
                break;
    
            case "/":
                let ans = Number(num1) / Number(num2);
                window.document.write("Your answer is " + answer + "<br>")
                break;
            case "stop":
                loop = false;
                break;
            default:
                alert("Enter + - * or /");
                continue;
    }
};
calculate (num1, num2, operation); 
window.document.write("Your answer is " + answer);
