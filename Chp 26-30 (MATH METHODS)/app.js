// QUESTION #01 
// let input = +prompt("enter any positive integer")
// document.write("number: " + input + "<br>" + "round off value: " + Math.round(input) + "<br>" + "floor value: " + Math.floor(input) + "<br>" + "ceil value: " + Math.ceil(input))

// QUESTION #02
// let input = +prompt("enter any negative integer")
// document.write("number: " + input + "<br>" + "round off value: " + Math.round(input) + "<br>" + "floor value: " + Math.floor(input) + "<br>" + "ceil value: " + Math.ceil(input))

// QUESTION #03
// let num1 = -4;
// document.write("the absolute value of " + num1 + " is " + Math.abs(num1))

// QUESTION #04
// function rollDice() {
//     let diceValue = Math.floor(Math.random() * 6) + 1;
//     let resultElement = document.getElementById('result');
//     resultElement.textContent = "random dice value: " + diceValue;
//   }

// QUESTION #05
// function tossCoin() {
//     let randomValue = Math.random();
//     let coinValue = randomValue < 0.5 ? "Heads" : "Tails";
//     let resultElement = document.getElementById('result');
//     resultElement.textContent = "You got: " +coinValue;
//   }

// QUESTION #06
// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1 ;
//     let resultElement = document.getElementById('result');
//     resultElement.textContent = "Random Number: " + randomNumber;
// }

// QUESTION #07
// let userWeight = +prompt("enter your weight in kilograms")
// document.write("the weight of user is " + parseFloat(userWeight) + " kg");


// QUESTION #08
//   let secretNumber = Math.floor(Math.random() * 10) + 1;

//   function checkNumber() {
//     const userInput = parseInt(document.getElementById('userInput').value, 10);

//     if (userInput >= 1 && userInput <= 10) {
//       if (userInput === secretNumber) {
//         let resultElement = document.getElementById('result');
//         resultElement.textContent = 'Congratulations! You guessed the secret number.';
//       } else {
//         let resultElement = document.getElementById('result');
//         resultElement.textContent = 'Oops! Try again. The secret number is different.';
//       }
//     } else {
//       alert('Please enter a valid number between 1 and 10.');
//     }
//   }
