// Task 1 - var, let, const

// Creating variables
var studentName = "Varun";
let studentAge = 22;
const collegeName = "ABC College";

// Printing all values
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("College:", collegeName);

// Changing var value
studentName = "Deepak";
console.log("Updated Name:", studentName);

// Changing let value
studentAge = 23;
console.log("Updated Age:", studentAge);

// Trying to change const value
// collegeName = "XYZ College";
// Error: Assignment to constant variable.

// Redeclaring var variable
var studentName = "Naveen";
console.log("Redeclared Name:", studentName);

// Trying to redeclare let variable
// let studentAge = 25;
// Error: Identifier 'studentAge' has already been declared.
var → value can be changed and redeclared.
let → value can be changed but cannot be redeclared in the same scope.
const → value cannot be changed or redeclared

// Task 2 - User Information

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
// Task 3 - Welcome Message

let userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");
// Task 4 - Age Calculator

let birthYear = prompt("Enter your birth year:");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Your age is:", age);
// Task 5 - Identify Data Types

let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(value1, "-", typeof value1);
console.log(value2, "-", typeof value2);
console.log(value3, "-", typeof value3);
console.log(value4, "-", typeof value4);
console.log(value5, "-", typeof value5);
console.log(value6, "-", typeof value6);
console.log(value7, "-", typeof value7);
Hello - string
100 - number
25.5 - number
true - boolean
false - boolean
undefined - undefined
null - object
// Task 6 — Student Data

let student = {
    name: "Varun",
    age: 22,
    city: "Hyderabad",
    qualification: "Graduate",
    isStudent: true
};

// Print complete object
console.log("Complete Object:", student);

// Print individual properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("Is Student:", student.isStudent);

// Task 7 — Fruit Array

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

// Print first fruit
console.log("First fruit:", fruits[0]);

// Print second fruit
console.log("Second fruit:", fruits[1]);

// Print last fruit
console.log("Last fruit:", fruits[fruits.length - 1]);

// Print total number of fruits
console.log("Total number of fruits:", fruits.length);
First fruit: Apple
Second fruit: Mango
Last fruit: Papaya
Total number of fruits: 6

// Task 8 — Basic Calculator

let a = 20;
let b = 5;

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus
console.log("Modulus:", a % b);

// Exponentiation
console.log("Exponentiation:", a ** b);
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
Modulus: 0
Exponentiation: 3200000
// Task 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", total);
output
Shirt: 999
Pant: 1499
Shoes: 1999
Total: 4497
// Task 10 — Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

// Calculate total marks
let totalMarks = tamil + english + maths;

// Calculate average marks
let averageMarks = totalMarks / 3;

console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
Total Marks: 245
Average Marks: 81.66666666666667
Total Marks ÷ Number of Subjects

// Task 11-let a = 10;

let b = a++;

console.log(a);
console.log(b);
output
11
10
// Task 12 -let a = 10;

let b = ++a;

console.log(a);
console.log(b);
let b = ++a;
output
a=11
b=11
// Task 13=let a = 20;

let b = a--;

console.log(a);
console.log(b);
19
20
let a = 20;

let b = --a;

console.log(a);
console.log(b);
let b = --a;
output
19
19
// Task 15-let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
a = 7
b = 4
c = 7
d = 5
// Task 16 — Assignment Operators

let num = 10;

// Addition assignment
num += 5;
console.log("After += :", num);

// Reset value
num = 10;

// Subtraction assignment
num -= 5;
console.log("After -= :", num);

// Reset value
num = 10;

// Multiplication assignment
num *= 5;
console.log("After *= :", num);

// Reset value
num = 10;

// Division assignment
num /= 5;
console.log("After /= :", num);

// Reset value
num = 10;

// Modulus assignment
num %= 3;
console.log("After %= :", num);

// Reset value
num = 10;

// Exponentiation assignment
num **= 2;
console.log("After **= :", num);
// Variables
let name = "Varun";
let age = 22;
let city = "Hyderabad";
let college = "ABC College";

// Array with 5 favourite subjects
let subjects = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Java"
];

// Task 17 = Student Object
let student = {
  name: name,
  age: age,
  city: city,
  college: college,
  subjects: subjects,
  isStudent: true
};

// Printing required values

console.log("Student Name:", student.name);

console.log("Student Age:", student.age);

console.log("City:", student.city);

console.log("First Subject:", student.subjects[0]);

console.log(
  "Last Subject:",
  student.subjects[student.subjects.length - 1]
);

console.log(
  "Total Subjects:",
  student.subjects.length
);

console.log("Complete Student Object:", student);

Final challange 

let num1 = 30;
let num2 = 15;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);


Addition: 45
Subtraction: 15
Multiplication: 450
Division: 2
Modulus: 0
Power: 14348907000000000000000
