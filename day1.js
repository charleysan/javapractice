// console.log("Hello Class");

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2); 
// console.log(10 % 3); // 1
// let exponent = 10 ** 2;
// console.log(exponent);

// +=

// let x = 10;

// console.log(x);
// x += 5;
// // x = 10 + 5;

// console.log(x);

// comparison operators
// == "Loose equality" - allows type coercion
// === "Strict equality" - no type coercion

// console.log(5 == '5');
// console.log(5 === '5');

// !=
// !==

// console.log(5 != '5');
// console.log(5 !== '5');

//=====================================================================

// console.log(5 > 1);
// console.log(5 > 10);
// console.log(5 <= 10);

// && if both are true
// || if one are true (or)
// !  inverts the operand

// let a = true;
// let b = false;

// c = !a;

// console.log(a && b);
// console.log(b);
// console.log(c);
// console.log(b && c);
// console.log(a || b);


// console.log('7' - 2);

// console.log('99' === 99);


// Short-Circuit Evaluation

// let something;

// // console.log(something);

// console.log(
  
// if (10 > 5 || (something = 10)) {

// }

// console.log(something);



//==========================================================================
// var 

// The original way to declare variables in JavaScript.
// Function-scoped or globally scoped.
// Accessible within the function in which it's declared. If declared outside any function, it becomes globally scoped.
// Can be re-declared and updated.
// Modern JavaScript development rarely uses var due to its quirks and potential for scope-related bugs. However, if you're working in legacy code or need to support very old browsers, you may still see or use var.

// var count = 4;

// console.log(count);

// if (count > 5) {
//   var result = "Greater than 5";
// }

// console.log(result);


// let 
// Introduced in ES6 (2015).
// Block-scoped.
// Only accessible within the block (e.g., {}) it's declared in. This provides better control over variable scope and avoids accidental overwrites.
// Can be updated but not re-declared in the same scope.
// Use let for variables that you anticipate reassigning within a block or scope. It's particularly useful for loops, conditionals, or situations where the variable's value needs to change.

// let score = 0;

// if (true) {
//   let score = 100;
//   console.log(score);
// }

// console.log(score);

// score = 20;

// console.log(score);

// const

// Also introduced in ES6.
// Block-scoped.
// Cannot be updated or re-declared.
// Must be initialized at the time of declaration.
// Use const for variables whose values should not change after they are initialized. It's great for configuration values, fixed data, or when you want to indicate that a value should remain constant throughout the program.
// const is generally preferred over let for any variable you don't plan to reassign, as it can make code more predictable and easier to read.

// let test;

// console.log(test);

// const test = 10;


// console.log(test);


// const user = { name: "Noah", age: 25 };

// console.log(user);

// user.age = 26;

// user.name = "Alanna"

// user.age = 22;

// console.log(user);

// user = 10;

// console.log(user);


// Number
// let count = 10;
// let price = 19.99;

// console.log(typeof(count));
// console.log(typeof(price));

// NaN - Not a Number 

// String 
// let message = "Hello Class";

// console.log(typeof message);


// Boolean
// let isLoggedIn = true;

// let hasAccess = false;

// console.log(typeof(isLoggedIn));
// console.log(typeof(hasAccess));

// null
// let data = null;

// console.log(typeof(data));


// undefined 

// let something;

// console.log(typeof something);


// Symbol 
// const id = Symbol('id');

// console.log(typeof id);




// Array 
// let numbers = [1, 2, 3, 4, 5];
// numbers[2] = 10
// console.log(numbers);


// Object (technically a ruby hash)

// let person = {
//   name: "Audreana",
//   age: 26
// };

// console.log(person.name);



// functions 


// console.log(greet("Charles"));


// let something = function greet(name) {
//   console.log("in the function");
//   return "Hello " + name + "!";
// }

// console.log(something("Leon"));






//===========================================================================
// original syntax way of function writing
// function greet(name) {           // more intuitive to right out
//   return "Hello" + name + "!";
// }

// arrow functions  2nd way for function writing
// const greet = (name) => {
//   return "Hello" + name + "!";
// };
// console.log(greet("Leon"));


// const greet = (name) => "Hello" + name + "!";  //one liner 3rd way 
// console.log(greet("Damen"))


// const add = (a, b) => a + b;
// console.log(add(2, 2));


//**************** */
// const chamGreet = (name) => {
//   return "Hafa adai " + name + "!" + " how much do you weigh!?";
// }

// console.log(chamGreet("Charooz"));

// let weight = (weight) => {
//   return "I weigh " + weight + " coconuts worth";
// }

// console.log(weight(20));

//======================================================

//scope
//global scope
// deals with variables that are declared outside of any function or block
// available pretty much everywhere
//often risky if overused because global variables can be modified from anywhere which can lead to naming collisions or unexpected behavior


// var globalVariable = "I am a global variable";

// function showGlobal() {
//   console.log(globalVariable);
// }
// showGlobal();
// console.log(globalVariable);


//************* */


// function scope
// variables declared with var inside of a function
//only avaialable within that specific function - cannot be accessed outside of the function
// great for encapsulating logic avoidung naming collisions

// function testScope() {
//   var functionVar = " Iam inside a function";
//   console.log(functionVar);
// }

// testScope();
// console.log(functionVar);


//*************** */

//block scope

//variables declared with let or const inside of a block ({})
//only available in a specific block
// can be if, loops, or any code wrapped in a  {}

// if (true) {
//   let blockVar = " Iam block scope";
//   const blockConst =10;
//   console.log(blockVar);
//   console.log(blockConst);
// }


//These not printed as outside of the block declared in
// console.log(blockVar); 
//   console.log(blockConst);

//======================================

//HOISTING
//VAR and FUNCTION only can do hoist
// console.log(x); //prints undefined 
// var x;

// console.log(x);
// x = 5;

// console.log(y); //does error
// let y = 0;

// function greet(name) {
//   return `Hello ${name}`;  %%%%%%%%%%%%%%%%%%%%%% INTERPOLATION %%%%%%%%%%%%%%%%%%%%%%%%%
// }
//  console.log(greet("Alanna")); //can be used (hoisted) before or after function

//============================================

//javascript can run code simultaneously asynchronus
// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2");
// }, 2000);

// console.log("Step 3");
// prints Step 1
//step 3
//step 2



// and ruby runs line by line
// puts "Step 1"
// sleep(2)
// puts "Step 2"
// puts "Step 3"
//prints
// step 1
// step 2
// step 3

//==============================
// function doHeavyCalculation() {
//   let sum = 0;
//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log("Start calculation...");
// console.log(doHeavyCalculation()); // synchronous & blocking
// console.log("End calculation.");

//*********************** */

// Hoisting Exercise:
// Experiment with var, let, and const:
// Declare variables in different blocks and see which ones produce errors when accessed outside. [only var outside of block]
// Try calling a var variable above its declaration. Confirm you get undefined instead of an error. [it does call undefined]



// Observe Hoisting in Action:
// Write multiple console.log statements before you actually declare variables. Watch how var differs from let/const.
// Test calling both a function declaration and a function expression before they appear. Note the differences.

// if (true) {
//   var blockVar = " I am Groot";
//   const blockConst = "DISAPPEAR!";
//   console.log(blockConst);
// }

// console.log(blockVar);
//******************************************** */

//functions cannot declare ANY variable before the declarartion in function
// console.log(weight(20));
// var weight = (weight) => {
//   return "I weigh " + weight + " coconuts worth";
// }

//*************** */

// console.log(x); 
// var x = 2; //prints undefined
// let x = 2; // prints error
// const x = 2; // prints error


//*************** */ NO SETTING OF VARIABLES FOR FUNCTIONS
// greet();

// function greet() {
//   console.log("Hi");
// }

// x= 5
//  if (x > 0) {
// console.log ("X is big");
//  }else {
// console.log ("x is small");
// }


// for (initialization; ConditionRule; finalExpression) {
//   loop body
// } 

// for (let i = 0; i< 5; i++) {
//   console.log(i);
// })

// let count = 0
// while (count < 3 ) {
//   console.log(count);
//   count++;
// }