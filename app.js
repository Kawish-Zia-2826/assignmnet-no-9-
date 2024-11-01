//------------------------------------------------------------------------------- Assignment 09---------------------------------------------------------------------------------

//----------------------------------------------------------------------Task No 01----------------------------------------------------------------------
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter Your City Name");

// if(city === "karachi"){
//     console.log("Welcome to city of lights");
// }else{
//     console.log("Thanks God! Yourn't in Karachi");
// }

//----------------------------------------------------------------------Task No 02----------------------------------------------------------------------
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender. please!")
// if(gender == "Male"){
//     console.log("Good Morning! Sir");
// }else if (gender == "Female") {
//     console.log("Good Morning! Ma'am");
// }  

//----------------------------------------------------------------------Task No 03----------------------------------------------------------------------
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// var signalColor = prompt("Write Signals Colors According To  Your Signal")
// if(signalColor == "red"){
//     console.log("Must Stop");
// }else if(signalColor == "yellow"){
//     console.log("Ready to move");
// }
// else if(signalColor == "green"){
//     console.log("Move now");
// }
//----------------------------------------------------------------------Task No 04----------------------------------------------------------------------

// 4. Write a program to take input remaining fuel in car (in
//         litres) from user. If the current fuel is less than 0.25litres,
//         show the message “Please refill the fuel in your car”
// var fuel = prompt("How Much Fuel Do You Have..?.. Now" );
// if(fuel < 2){
//     alert("Need to refil");
// }

//----------------------------------------------------------------------Task No 05----------------------------------------------------------------------


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else {
//         alert("given condition for variable b is false");  
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//         alert("True");
//         }
//         if (false){
//         alert("False");
//         }

//         if("car" < "cat"){
//                 alert("car is smaller than cat");
                //}

//----------------------------------------------------------------------Task No 06----------------------------------------------------------------------
// var totalMarks = 300;
// var obtainedMarks = +prompt();
// var result = (obtainedMarks/totalMarks)*100;

// if (result >= 80){
// document.write("Grade:A-One Remarks:Excellent");

// }
// else if (result >= 70){
//         document.write("Grade:A Remarks:Good");
        
//         }
//         else if (result >= 60){
//                 document.write("Grade:B Remarks:you need to improve");
                
//                 }
//                 else if (result < 60){
//                         document.write("Grade:fail Remarks:sorry");
                        
//                         }


//----------------------------------------------------------------------Task No 07----------------------------------------------------------------------

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// var the_number = prompt("Dear User Guess the Secret Number Ranging from 1 to 10")
// var Secret_Number = "5";
// if (the_number === Secret_Number) {
//     console.log("Bingo! Correct Answer");
// }
// if(the_number !== Secret_Number){
//     console.log("Close enough to the correct answer");
// }

//----------------------------------------------------------------------Task No 08----------------------------------------------------------------------
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// var divisibleNum = prompt("Enter a Number");
// if(divisibleNum / 3){
//     console.log("The number is divisible by 3");
// }

//----------------------------------------------------------------------Task No 09----------------------------------------------------------------------
// var getNum = +promt();
//  var obtainedMarks = +prompt();
// var result =obtainedMarks % 2;
//     if( result == 0){
//         alert ("The number is even.")}

//     else{
//         alert ("The number is odd.")
// }

//----------------------------------------------------------------------Task No 10----------------------------------------------------------------------
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = prompt("Enter the Temperature. Acoording To Your Area.");
// if(temperature > 40){
//     alert("'It is too hot outside!'");
// }else if(temperature > 30){
//     alert("The Weather is Normal.");
// }else if(temperature > 20){
//     alert("Weather is cool.");
// }else if(temperature > 10){
//     alert("OMG! weather is so Cool");
// }


//----------------------------------------------------------------------Task No 11----------------------------------------------------------------------
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var takeFirstNum = +prompt();
// var takeExpression = prompt();
// var takeSecondNum = +prompt();
// var result;

// if (takeExpression === "+")
// {
//         result = takeFirstNum + takeSecondNum;
// document.write(result);
// }
// else if (takeExpression === "-")
// {
//         result = takeFirstNum - takeSecondNum;
// document.write(result);
// }
// else if (takeExpression === "/")
// {
//         result = takeFirstNum / takeSecondNum;
// document.write(result);
// }

// else if (takeExpression === "*")
// {
//         result = takeFirstNum * takeSecondNum;
// document.write(result);
// }
// else{
//         alert("you are wrong")
// }
