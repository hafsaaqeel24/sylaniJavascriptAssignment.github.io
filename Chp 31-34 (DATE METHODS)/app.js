// QUESTION #01 
// let currentDate = new Date();
// document.write(currentDate);

// QUESTION #02
// let newDate = new Date();
// let currentMonth = newDate.getMonth();
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// alert(months[currentMonth]);

// QUESTION #03
// let newDate = new Date();
// let currentDay = newDate.getDay();
// let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// let dayShort = days[currentDay];
// dayShort = dayShort.slice(0,3);
// alert("Today is " + dayShort);

// QUESTION #04
// let newDate = new Date();
// let currentDay = newDate.getDay();
// let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// let newDay = days[currentDay];
// // document.write(newDay);
// if(newDay == "Saturday" ) {
//     document.write("it's fun day")
// }
// elseif(newDay == "Sunday"){
//     document.write("it's fun day")
// }

// QUESTION #05
// let newDate = new Date();
// let currentDate = newDate.getDate();
// if(currentDate < 16) {
//     document.write("Firs Fifteen Days Of The Month")
// }
// else {
//     document.write("last Days Of The Month")
// }

// QUESTION #06
// let newDate = new Date();
// let oldTimeMilliSec = newDate.getTime();
// let currentMinutes = newDate.getMinutes();
// let oldTimeMin = oldTimeMilliSec / 60000;
// document.write( "Current Date: " + newDate + "<br>"+ " Elapsed Milliseconds since January 1, 1970: " + oldTimeMilliSec + "<br>" +" Elapsed Minutes since January 1, 1970: " +  oldTimeMin);

// QUESTION #07
// let newDate = new Date();
// let currentTime = newDate.getHours();
// if (currentTime < 12) {
//     document.write("it's AM")
// }
// else {
//     document.write("it's PM")
// }

// QUESTION #08
// let laterDate = new Date("Dec 31, 2020")
// document.write(laterDate);

// QUESTION #09
// let pastRamadan = new Date("Jun 18, 2015")
// let pastRamadanDays = pastRamadan.getTime();
// let comingRamadan = new Date("Mar 10, 2024")
// let comingRamadanDays = comingRamadan.getTime();
// let timeDifference = comingRamadanDays - pastRamadanDays;
// let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
// alert(daysPassed + " days have passed since 1st Ramadan, 2015")

// QUESTION #10
// let startDate = new Date("Jan 1, 2015")
// let secOfStartDate = startDate.getTime();
// let referenceDate = new Date("Dec 5, 2015")
// let secOfReferenceDate = referenceDate.getTime();
// let timeDifference = (secOfReferenceDate - secOfStartDate) /1000;
// document.write(timeDifference +" seconds have been passed since reference date Sat Dec 05 2015");

// QUESTION #11
// let newDate = new Date();
// document.write("current date " + newDate + "<br>");

// let anHourAgo = new Date();
// anHourAgo.setHours(11);

// document.write( "1 hour ago it was " + anHourAgo)

// QUESTION #12
// let newDate = new Date();
// document.write("current date " + newDate + "<br>");

// let anYearAgo = new Date("1923");

// document.write( "1 year ago it was " + anYearAgo)

// QUESTION #13
// let userAge = +prompt("enter you age");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - userAge;
// document.write("your age is " + userAge + "<br>")
// document.write( "your birth year is " + birthYear);

// QUESTION #14
// let customerName = "ABC customer";
// let  currentMonth = "February";
// let   numberOfUnits = 410;
// let  chargesPerUnit = 16;
// let  netAmountPayable  = numberOfUnits * chargesPerUnit;
// let  latePaymentSurcharge = 350;
// let  grossAmountPayable  =netAmountPayable + latePaymentSurcharge;
// document.write(
//     "Customer Name: " + customerName + "<br>" +
//     "Current Month: " + currentMonth + "<br>" +
//     "Number Of Units: " + numberOfUnits + "<br>" +
//     "Charges Per Unit: " + chargesPerUnit + "<br>" +
//     "Net Amount Payable(within due date): " + netAmountPayable + "<br>" +
//     "Late Payment Surcharge: " + latePaymentSurcharge + "<br>" +
//     "Gross Amount Payable(after due date): " + grossAmountPayable + "<br>" 
// )

