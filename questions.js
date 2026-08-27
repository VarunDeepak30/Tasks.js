// JavaScript Basics — Variables

// 1. What is a variable in JavaScript?
// Answer: A variable is a named container used to store data values in JavaScript.


// 2. What are the three keywords used to create variables?
// Answer: The three keywords are var, let, and const.


// 3. Write the syntax to create a variable using var.
// Answer:
var name = "John";


// 4. Write the syntax to create a variable using let.
// Answer:
let age = 25;


// 5. Write the syntax to create a variable using const.
// Answer:
const pi = 3.14;


// 6. What is declaration?
// Answer: Declaration means creating a variable by specifying its name without assigning a value.
// Example:
let age;


// 7. What is initialization?
// Answer: Initialization means assigning the first value to a variable when it is created.
// Example:
let age = 25;


// 8. What is reassignment?
// Answer: Reassignment means changing the value of an already declared variable.
// Example:
let marks = 50;
marks = 80;


// 9. What is redeclaration?
// Answer: Redeclaration means declaring the same variable again using the same keyword within the allowed scope.
// Example:
var age = 25;
var age = 30;


// 10. Which keyword allows redeclaration?
// Answer: The var keyword allows redeclaration.


// 11. Which keyword allows reassignment?
// Answer: var and let allow reassignment. const does not allow reassignment.


// 12. Which keyword requires initialization when declared?
// Answer: The const keyword requires initialization when declared.
// Example:
const country = "India";


// 13. Identify the declaration and initialization:
// let age = 25;
//
// Answer:
// Declaration: let age
// Initialization: age = 25
// 14. What is the value of a?
// Code:
// var a = 100;
// console.log(a);
//
// Answer: 100


// 15. Change the value of this variable to 200:
// let number = 100;
//
// Answer:
let number = 100;
number = 200;


// 16. What will be the output?
// Code:
// var a = 10;
// console.log(a);
//
// Answer: 10


// 17. What will be the output?
// Code:
// var a = 10;
// a = 20;
// console.log(a);
//
// Answer: 20


// 18. What will be the output?
// Code:
// var a = 10;
// var a = 30;
// console.log(a);
//
// Answer: 30


// 19. Write a var variable named name with the value "John".
//
// Answer:
var name = "John";
// 20. Create a var variable named price with the value 500.
// Answer:
var price = 500;


// 21. Reassign price from 500 to 1000.
// Answer:
price = 1000;


// 22. What will be the output?
// Code:
// var x = 50;
// x = 100;
// console.log(x);
//
// Answer: 100


// 23. Can a var variable be reassigned?
// Answer: Yes, a var variable can be reassigned.


// 24. Can a var variable be redeclared?
// Answer: Yes, a var variable can be redeclared.


// 25. Write an example of var redeclaration.
// Answer:
var age = 25;
var age = 30;
// 26. Create a let variable named age with the value 25.
// Answer:
let age = 25;


// 27. What will be the output?
// Code:
// let age = 20;
// age = 30;
// console.log(age);
//
// Answer: 30


// 28. Can a let variable be reassigned?
// Answer: Yes, a let variable can be reassigned.


// 29. Can a let variable be redeclared?
// Answer: No, a let variable cannot be redeclared in the same scope.


// 30. Find the error:
// let name = "John";
// let name = "David";
//
// Answer: Error — Identifier 'name' has already been declared.


// 31. Create a let variable called city and assign "Chennai".
// Answer:
let city = "Chennai";


// 32. Change the value of city to "Salem".
// Answer:
city = "Salem";


// 33. What will be the output?
// Code:
// let x = 10;
// x = 50;
// console.log(x);
//
// Answer: 50


// 34. Write a let variable called salary with the value 25000.
// Answer:
let salary = 25000;
// 35. Reassign salary to 30000.
// Answer:
salary = 30000;


// const

// 36. Create a const variable called pi with the value 3.14.
// Answer:
const pi = 3.14;


// 37. Can a const variable be reassigned?
// Answer: No, a const variable cannot be reassigned.


// 38. Can a const variable be redeclared?
// Answer: No, a const variable cannot be redeclared in the same scope.


// 39. What is wrong with this code?
// const age;
// age = 25;
//
// Answer: A const variable must be initialized when it is declared.
// This code gives an error because age has no initial value.


// 40. What happens here?
// Answer: It gives a SyntaxError because a const variable must be initialized when declared.
// 41. Create a const variable called country with the value "India".
// Answer:
const country = "India";

// 42. What will be the output?
// const x = 100;
// console.log(x);
// Answer: 100

// 43. Which keyword should you use if the value should not be reassigned?
// Answer: const

// 44. What is the difference between let and const?
// Answer: let variables can be reassigned, but const variables cannot be reassigned.

// 45. What is the difference between var and const?
// Answer: var variables can be redeclared and reassigned, while const variables cannot be redeclared or reassigned.

// 46. Write JavaScript code to print Hello World using console.log().
// Answer:
console.log("Hello World");
// 46. Write JavaScript code to print Hello World using console.log().
console.log("Hello World");

// 47. Write JavaScript code to print the number 500 using console.log().
console.log(500);

// 48. What is the purpose of console.warn()?
// Answer: console.warn() is used to display warning messages in the console.

// 49. What is the purpose of console.error()?
// Answer: console.error() is used to display error messages in the console.

// 50. What is the purpose of each?

// alert()
// Answer: alert() displays a message in a popup box.

// prompt()
// Answer: prompt() asks the user to enter some input.

// confirm()
// Answer: confirm() displays a message with OK and Cancel buttons.

// document.writeln()
// Answer: document.writeln() writes content directly to the webpage.

// console.log()
// Answer: console.log() displays messages or values in the browser console.

// PRACTICAL QUESTIONS

// 1. Create a variable for student name, age, and mark and print all three.

let studentName = "Varun";
let studentAge = 25;
let studentMark = 90;

console.log(studentName);
console.log(studentAge);
console.log(studentMark);


// 2. Ask the user's name using prompt() and display it using alert().

let userName = prompt("Enter your name:");
alert(userName);


// 3. Ask the user's age using prompt() and print it using console.log().

let userAge = prompt("Enter your age:");
console.log(userAge);


// 4. Ask the user a question using confirm().

let answer = confirm("Do you like JavaScript?");
console.log(answer);


// 5. Ask the user's name and display it on the webpage using document.writeln().

let name = prompt("Enter your name:");
document.writeln("Hello " + name);
