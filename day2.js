//CONDITIONALS
// const age = 19;

// if (age > 18) {
//   console.log("You are old enough to vote.");
// } else if (age == 18) {
//   console.log("You are just old enough to vote.");
// } else {
//   console.log("You are not old enought to vote.");
// }


// const isMember = false;

// if (!isMember) { // ! changed it to true
//   console.log("Welcome, member!");
// } else {
//   console.log("Access denied. Please sign up.");
// }
//****************************** */

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the work week!");
//     break;
//   case "Tuesday":
//     console.log("It's only Tuesday...");
//     break;
//   default:
//     console.log("Enjoy your day!");
// }

// ternary operator 
// condition ? if it's true : if it's false 

//***************************** */

// const age = 16;

// const canDrive = (age >= 16) ? "Yes" : "No";

// console.log(canDrive)
//*********************************** */

//LOOPS
// for loop 
// for (inialization; condition; finalExpression) {

// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// while loop
// while (condition) {

// }

// let count = 0;

// while (count < 3) {
//   console.log(count);
//   count++;
// }

// do loop 
// do {

// } while (condition)

// let number = 5;

// do {
//   console.log("Number is:", number);
//   number--;
// } while (number > 0);



// const person = { name: "Jess", age: 26 };

// for (let key in person) {
//   // console.log(key);
//   // console.log(person[key]);
//   console.log(key, "=", person[key]);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) { // make sure to use of instead of in - in prints the indexes rather than the actual value
//   console.log(fruit);
// }

// const word = "something";

// for (let char of word) {
//   console.log(char);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }

// push - adds to the end of the array
// pop - removes the item at the end of the array
// unshift - adds to the beginning of the array
// shift - removes the item at the beginning of the array
// slice - copies a part of the array from the startIndex up to (but not including) the endIndex
// splice - removes or replaces elements
// Remove 1 element at index 1, replace it with 'strawberry'
// fruits.splice(1, 1, 'strawberry'); 



// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits);

// fruits.push("grape");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.unshift("mango");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// const coolFruits = fruits.slice(1, 3);

// console.log(coolFruits)

// fruits.splice(2, 1, 'strawberry');

// console.log(fruits);

//***************************************** */
// Task:
// Initialize an array of 5 elements.
// Use each of push, pop, shift, unshift, slice, and splice at least once.
// Log the array before and after each operation.
// (Optional) Try reversing the array (arr.reverse()) or sorting it (arr.sort()) to see how those mutate it.
// const magic = ["fire", "ice", "earth", "water", "wind"];

// console.log(magic);

// magic.push("light"); //adds to the end

// console.log("added light magic")
// console.log(magic);

// magic.pop(); //deletes end index
// console.log(magic);

// magic.unshift("darkness"); //adds to front index
// console.log(magic);

// magic.shift(); //deletes front index
// console.log(magic);

// const baseMagic = magic.slice(1,3);
// console.log(baseMagic);

// magic.splice(2, 1, 'dendro');
// console.log(magic);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
  // console.log(number ** 2);
// });

// const squares = numbers.map(num => num ** 2);
// console.log(squares);

// const evenNumbers = numbers.filter(num => (num % 2) === 0);
// console.log(evenNumbers);

// const sum = numbers.reduce((total, num) => total + num, 0)
// console.log(sum);

//************************************************ */
Exercise:
// Create an array of student grades (like [85, 92, 78, 90, 88]).
// Use forEach() to log each grade with a message: "Grade is X".
// Use map() to convert each grade to a letter grade if you’d like (e.g., 90+ is A, etc.).
// Use filter() to get only the passing grades.
// Use reduce() to calculate the average.

// const grades =[75, 80, 92, 90, 85]

// grades.forEach((grade) => {
//   console.log(`Grade is" + ${grade}`);
// });

// const bonus = grades.map(grade => grade + 5);
// console.log(bonus);

// const passingGrades = grades.filter(grade => grade >= 70); 

// console.log(passingGrades);

// const average = grades.reduce((total,grade) => total + grade, 0)/ grades.length;
// console.log(average);

//************************************************* */

// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 500 },
//   { name: 'Headphones', price: 150 },
// ];

// 1. Filter out expensive products (> $500)
// const expensive = products.filter(product => (product.price > 500));
// console.log(expensive);

// console.log(products[0].price)

// 2. Apply a 10% discount via map
// const discount = products.map(product => (product.price - (product.price * 0.1)));
// console.log(discount);

// const discountedPrice = products.map(product => ({
//   name: product.name,
//   price: product.price * 0.9
// }));
// console.log(discountedPrice);

// 3. Calculate the total price of discounted items with reduce
// const total = discountedPrice.reduce((total, product) => total + product.price, 0);
// console.log(total);

//*********************************************** */

//DESTRUCTURING ASSIGNMENT - reread

// const rgb = [255, 200, 0];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// const nested = [1, [2, 3], 4];

// const [one, [two, three], four] = nested;

// console.log(one, two, three, four);

// const user = {
//   name: 'Alanna', 
//   age: 22,
//   city: 'Tamuning'
// };

// const { name, age } = user;

// console.log(`${name}, is ${age} years old.`)

// setting default values 
// function greet(name = "Someone") {
//   console.log(`Hello ${name}`);
// }

// greet("Charles"); 