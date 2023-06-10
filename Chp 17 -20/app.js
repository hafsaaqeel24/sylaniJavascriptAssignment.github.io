// ===QUESTION #01 and #02===
// Declare and initialize a multidimensional array representing a matrix
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];

// console.log(matrix);
// document.write(matrix);

// ===QUESTION #03===
// Write a program to print numeric counting from 1 to 10
// for (let i = 1; i < 11; i++) {
//     document.write(i +"<br>")
// }

// ===QUESTION #04===
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// let number = +prompt("Enter a number to show its multiplication number");
// let length = +prompt("Enter the length of table")
// for (let i = 1; i <= length; i++){
//     document.write(number * i +"<br>")
// };

//  ===QUESTION #05===
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++){
//     document.write("element at index " + i + " is " + fruits[i] +"<br>")
// }
// console.log(fruits);

//  ===QUESTION #06===
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// for (i = 1; i = 15; i++){
//     document.write(i +",")
// };
// for (i = 10; i = 0; i--){
//     document.write(i +",")
// };

// let evenSeries = [];
// for (let i = 0; i <= 20; i += 2) {
//   evenSeries.push(i);
// }
// console.log("c. Even: " + evenSeries.join(", "));
// let oddSeries = [];
// for (let i = 1; i <= 19; i += 2) {
//   oddSeries.push(i);
// }
// console.log("d. Odd: " + oddSeries.join(", "));
// let series = [];
// for (let i = 1; i <= 10; i++) {
//   series.push(i * 2 + "k");
// }
// console.log("e. Series: " + series.join(", "));


//  ===QUESTION #07===
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search:");
// let lowercaseInput = userInput.toLowerCase();

// let isFound = A.includes(lowercaseInput);

// if (isFound) {
//   alert("The item is found in the list.");
// } else {
//   alert("The item is not found in the list.");
// }

// //  ===QUESTION #08===
// let A = [24, 53, 78, 91, 12];


// let largestNumber = A[0];


// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }


// console.log("The largest number is: " + largestNumber);


//  ===QUESTION #09===
// let A = [24, 53, 78, 91, 12];


// let smallesttNumber = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > smallestNumber) {
//         smallestNumber = A[i];
//     }
// }

//  ===QUESTION #10===

// let multiples = [];
// for (let i = 0; i <= 100; i += 5) {
//   multiples.push(i);
// }
// console.log("multiples: " + multiples.join(", "));