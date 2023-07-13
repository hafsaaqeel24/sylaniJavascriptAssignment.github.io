// QUESTION #01 
// let todayDate = new Date();
// document.write(todayDate);

// QUESTION #02
// function greeting() {
//   let firstName = prompt("enter your first name");
//   let lastName = prompt("enter your last name");
//   document.write("Hello " + firstName + " " + lastName);
// } 
// greeting();

// QUESTION #03
// function sum() {
//     let num1 = +prompt("enter first number");
//     let num2 = +prompt("enter second number"); 
//     let sumNum = num1 + num2 ;
//     document.write(sumNum);
//     return sumNum;   
// }
// sum();

// QUESTION #04
// function performOperation(num1, num2, operator) {
//     let result;
    
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       case '%':
//         result = num1 % num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
//     document.write(result);       
//   }  
//   performOperation(7, 3, '+');
  
// QUESTION #05
// function square(a) {
// let square = a*a ;
// document.write(square);
// }
// square(8);

// QUESTION #06
// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       let result = 1;
//       for (let i = 2; i <= num; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }  
//   const number = 5;
//   const result = factorial(number);
//   document.write(`The factorial of ${number} is: ${result}`);
  
// QUESTION #07
// function counting(a, b) {
//  for (let i = a; i=b; i++) {    
//     document.write(i);
//  }
// }
// counting(4, 9);

// QUESTION #08
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
  
//     const baseSquared = calculateSquare(base);
//     const perpendicularSquared = calculateSquare(perpendicular);
//     const hypotenuseSquared = baseSquared + perpendicularSquared;
//     const hypotenuse = Math.sqrt(hypotenuseSquared);
  
//     return hypotenuse;
//   }
//   const base = 3;
//   const perpendicular = 4;
//   const hypotenuse = calculateHypotenuse(base, perpendicular);
//   console.log("The hypotenuse of the triangle is:" + hypotenuse);

// QUESTION #09
// function area(w, h) {
//     let area = w * h ;
//     document.write(area + " sq meters");
// }
// area(9, 9);

// QUESTION #10

// QUESTION #11
// function changingCase() {
//     let str = prompt("enter any word");
//     let firsChr = str.slice(0,1);
//     let scndChr = str.slice(1);
//     firsChr = firsChr.toUpperCase();
//     scndChr = scndChr.toLowerCase();
//     let capped = firsChr + scndChr;
//     document.write(capped);
// }
// changingCase();

// QUESTION #12
// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
//     let longestLength = 0;
//     for (let i = 0; i < words.length; i++) {
//       let currentWord = words[i];
//       let currentLength = currentWord.length;
//       if (currentLength > longestLength) {
//         longestWord = currentWord;
//         longestLength = currentLength;
//       }
//     }
//     return longestWord;
//   }  
//   let inputString = 'Web Development Tutorial';
//   let longestWord = findLongestWord(inputString);
//   console.log("Longest word in " + inputString +" is: " +longestWord);
  
// QUESTION #13
// function countOccurrences(str, letter) {
//     const lowerStr = str.toLowerCase();
//     const lowerLetter = letter.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < lowerStr.length; i++) {
//       if (lowerStr[i] === lowerLetter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   // Example usage
//   const inputString = 'JavaScript is an amazing language';
//   const inputLetter = 'a';
//   const occurrenceCount = countOccurrences(inputString, inputLetter);
//   console.log("The letter " + inputLetter + " occurs" + occurrenceCount + " times in the string.");
  
// QUESTION #14
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference}`);
//   }  
//   function calcArea(radius) {
//     let area = Math.PI * radius ** 2;
//     console.log(`The area is ${area}`);
//   }  
//   let radius = 5;
//   calcCircumference(radius);
//   calcArea(radius);
  





