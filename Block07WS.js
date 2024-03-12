// I assign the three numbers each to its own variable using different arithmetic methods.
const firstNumber = 5+5; //this equals 10, the first number in the combination
const secondNumber = 20 * 2; //this equals 40, the second number
const thirdNumber =  40 - 1; //this equals 39, the final number

//Here I give the user the message

console.log("You have received this message because you have been chosen to open an important vault. Here is the secret combination:")

//And here is where I concantenate the variables with dashes to display to the user

console.log(`${firstNumber}-${secondNumber}-${thirdNumber}`);