// QUESTION #01 
// let students = [];

// QUESTION #02 
// let students = new Array();

// QUESTION #03
// let str = ["a", "c"];

// QUESTION #04
// let number = [3, 6];

// QUESTION #05
// let boln = [true, false];

// QUESTION #06
// let mix = ["g", 3, true];

// QUESTION #07
// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// document.write(qualification);

// QUESTION #08
// let students = ["Michael", "John", "Tony"];
// let obtainedMarks = [320, 230, 480];
// let totalMarks = 500;
// for (i = 0; i < obtainedMarks.length; i++){
// let percentage = (obtainedMarks[i] / totalMarks) * 100;
// document.write("Score of " + students[i] + " is " + obtainedMarks[i] + ". Percentage: " + percentage +"%" + "<br>")
// }

// QUESTION #09
// let colours = [];
// part A
// let addColour1 = prompt("enter colour you want to add in beginning")
// colours.unshift(addColour1);
// part B
// let addColour2 = prompt("enter colour you want to add in end")
// colours.push(addColour2);
// part C
// let addColour3 = prompt("enter another colour you want to add in beginning")
// let addColour4 = prompt("enter another colour you want to add in beginning")
// colours.unshift(addColour3);
// colours.unshift(addColour4);
// document.write(colours);
// part D
// colours.shift();
// document.write(colours); 
// part E
// colours.pop();
// document.write(colours);
// part F
// let addColour5 = prompt("enter another colour you want to add")
// let addColourInd = +prompt("enter index number at which you want to add a colour name")
// colours.splice(addColourInd, 0, addColour5);
// document.write(colours);
// part G
// let removeColourInd = +prompt("enter index number from where you want to start removing colour names")
// let removeColourNum = +prompt("enter index upto which you want to remove the colour names")
// colours.splice(removeColourInd, removeColourNum);
// document.write(colours);

// QUESTION #10
// let unsortedArray = [320, 230, 480, 120]
// let sortedArray = unsortedArray.sort(function(a, b) { return a - b; });
// document.write(sortedArray);
 
// QUESTION #11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// let selectedCities = cities.slice(2, 4);
// document.write(selectedCities);

// QUESTION #12
// let arr = ["This", "is", "my", "cat"];
// let text = arr.join(" ");
// document.write(text);
 
// QUESTION #13
// let devices = [];

// // Function to add elements 
// function addToQueue(value) {
//   devices.push(value);
// }

// // Function to remove and return the first element
// function removeFromQueue() {
//   return devices.shift();
// }

// // Adding elements
// addToQueue("keyboard ");
// addToQueue("mouse ");
// addToQueue("printer ");

// // Removing and displaying elements
// document.write(removeFromQueue());
// document.write(removeFromQueue());
// document.write(removeFromQueue());

// QUESTION #14
// let devices = [];

// // Function to add elements 
// function addToStack(value) {
//   devices.push(value);
// }

// // Function to remove and return the last element
// function removeFromStack() {
//   return devices.pop();
// }

// // Adding elements 
// addToStack("keyboard ");
// addToStack("mouse ");
// addToStack("printer ");

// // Removing and displaying elements in reverse order (Last In First Out)
// document.write(removeFromStack()); 
// document.write(removeFromStack()); 
// document.write(removeFromStack());

// QUESTION #15