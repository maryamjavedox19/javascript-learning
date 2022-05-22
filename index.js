console.log("hello world");

let variable = "josh";
console.log(variable);

//can write more than 1 variable in single line
let variable2 = "john",
  variable3 = "mark";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//while in constant, the value won't change

//const interestRate2 = 0.3;
//interestRate2 = 1;
//console.log(interestRate2);

//error

let name = "josh"; //string literal

let age = "30"; // integer literal

let isApproved = "true"; // boolean literal

let firstname = "undefined";

let selectedColor = "null"; //when we want to clear the value of variable

//dynamic language

//typeof variable;          to check the type

//in javascript we don't have integer, float, all numbers are in type numbers

//OBJECT

let person = {
  name: "mosh",
  age: 30,
};

console.log(person);

//dot notation
person.name = "john";

//bracket notation
person["name"] = "mary";

console.log(person.name);

let selectedColors = ["red", "blue"];
selectedColors[2] = 5;
console.log(selectedColors);

//to find lengh
console.log(selectedColors.length);

//to access elements
let selectedColors2 = ["red", "blue"];
console.log(selectedColors2[0]);

//can write different data types in array

//functions

function greet() {
  console.log("hello world");
}

greet();

function greet(name) {
  console.log("hello " + name);
}

greet("josh");

function greet(name, lastName) {
  console.log("hello " + name + " " + lastName);
}

greet("mark", "daniel");

//calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));
