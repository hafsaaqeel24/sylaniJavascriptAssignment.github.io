// QUESTION #01
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// let fullName = firstName + " " + lastName ;
// document.write("hello " + fullName);

// QUESTION #02
// let favPhone = prompt("enter you favourite phone model");
// document.write("my favourite phone is " + favPhone + "<br>" + "length of string is " + favPhone.length)

// // QUESTION #03
// let country = "Pakistani"
// document.write("string: " + country + "<br>" + "index of 'n': " + country.indexOf("n"));

// QUESTION #04
// let str = "hello world"
// document.write("string: " + str + "<br>" + "last index of 'l': " + str.lastIndexOf("l"));

// QUESTION #05
// let country = "Pakistani"
// document.write("string: " + country + "<br>" + "character at index3: " + country[3]);

// QUESTION #06
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name")
// document.write("hello " + firstName.concat(" ", lastName));

// QUESTION #07
// let city = "Hyderabad"
// let newText = city.replace("Hyder", "Islam");
// document.write("city: " + city + "<br>" + "after replacement: " + newText)
 
// QUESTION #08
// let message = "Ali and Sami are best friends. They play cricket and football together";
// let newText = message.replace(/and/g, "&");
// document.write("original text: " + message + "<br>" + "after replacement: " + newText)

// QUESTION #09
// let a = "472";
// let b = Number(a);
// document.write("value " + a + "<br>" + "type: " + typeof(a) + "<br>" +"value " + b + "<br>" + "type: " + typeof(b))

// QUESTION #10
// let str = prompt("enter any word");
// let upperCase = str.toUpperCase();
// document.write("user input: " + str + "<br>" + "upper case: " + upperCase)

// QUESTION #11
// let str = prompt("enter any word");
// let titleCase = str.replace(str[0], str[0].toUpperCase());
// document.write("user input: " + str + "<br>" + "title case: " + titleCase);

// QUESTION #12
// let str = 35.36;
// let changeStr = str.toString();
// document.write(changeStr * 100);

// QUESTION #13
// function isValidUsername(username) {
//     const specialSymbols = ['@', '.', ',', '!'];
//     for (let i = 0; i < username.length; i++) {
//       if (specialSymbols.includes(username[i])) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function getUsername() {
//     let username = prompt('Enter your username:');
//     if (!username) {
//       alert('Username cannot be empty. Please enter a username.');
//       getUsername();
//     } else if (!isValidUsername(username)) {
//       alert('Username contains special symbols. Please enter a valid username.');
//       getUsername();
//     } else {
//       alert('Username stored successfully!');
//       console.log('Username:', username);
//     }
//   }
//   getUsername();
  
// QUESTION #14
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// let searchItem = prompt("welcome to fine bakery. what do you want to order Ma'am/Sir?")
// searchItem = searchItem.toLowerCase();
// var matchFound = false;
// for (var i = 0; i <= 4; i++){
//  if (searchItem === bakeryItems[i]) {
//  matchFound = true;
//  alert("yes its available");
//  }
//  }
//  if (matchFound === false) {
//  alert("It's not on the list");
//  }

// QUESTION #15
// function isValidPassword(password) {
//     const containsAlphabetAndNumber = /^(?=.*[a-zA-Z])(?=.*\d)/.test(password);
//     const doesNotStartWithNumber = /^[^0-9]/.test(password);
//     const isLongEnough = password.length >= 6;
  
//     return containsAlphabetAndNumber && doesNotStartWithNumber && isLongEnough;
//   }
  
//   function getPassword() {
//     let password = prompt('Enter your password:');
//     if (!password || !isValidPassword(password)) {
//       alert('Please enter a valid password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number.');
//       getPassword();
//     } else {
//       alert('Password is valid and accepted!');
//       console.log('Password:', password);
//     }
//   }
  
//   getPassword();
  
// QUESTION #16
// let str = "University of Karachi"
// let parameter = ",";
// let splitToArray = str.split(parameter);
// document.write(splitToArray);

// QUESTION #17
// let str = "Pakistan"
// let lastChar = str[str.length - 1];
// document.write("user input: " + str + "<br>" + "last character of input: " + lastChar);

// QUESTION #18
// const inputString = "The quick brown fox jumps over the lazy dog";
// const targetWord = "the";

// function countOccurrences(inputString, targetWord) {
//   const words = inputString.toLowerCase().split(" ");
//   let count = 0;

//   for (let word of words) {
//     if (word === targetWord.toLowerCase()) {
//       count++;
//     }
//   }

//   return count;
// }

// const occurrences = countOccurrences(inputString, targetWord);
// document.write("The word " + targetWord + " occurs " + occurrences + " times.");


