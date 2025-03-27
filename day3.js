// closure example:
// function createCart() {
//   let items = []; // only available after this line in the function

//   return {
//     addItem(itemName, quantity) {
//       items.push({ name: itemName, quantity });
//     },
//     removeItem(itemName) {
//       items = items.filter(item => item.name !== itemName);
//     },
//     getItems() {
//       return items;
//     }
//   };
// }

// const myCart = createCart(); 
// myCart.addItem('Apple', 3);
// myCart.addItem('Banana', 2);
// console.log(myCart.getItems()); 
// [ { name: 'Apple', quantity: 3 }, { name: 'Banana', quantity: 2 } ]

// myCart.removeItem('Apple');
// console.log(myCart.getItems()); 
// [ { name: 'Banana', quantity: 2 } ]

//results
//******************************************* */

// Exercise:
// Use the rest operator to build a function multiplyAll(...nums) that returns the product of all numbers.
// Use the spread operator to combine two arrays:




//************************************************ */
// Rest Operator 
// (...rest)

// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));

// spread operator 
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);


// const obj1 = { a: 1, b: 2 };

// const obj2 = { ...obj1, c: 3 };

// console.log(obj2);

// function multiply(x, y, z) {
//   return x * y * z;
// }

// const nums = [1, 2, 3, 5];

// console.log(multiply(...nums));
//*********************************************** */

// const obj1 = { a: 1, b: 2 };

// const obj2 = { ...obj1, c: 3 };

// const merged = { ...obj1, ...{b: 5, c: 10}}
// console.log(merged);
// { a: 1, b: 5, c: 10 }

//*********************************************** */

//HTML Tags:
{/* <html>: The root of an HTML document.


<head>: Contains metadata about the page (e.g., <title>, <meta> tags).


<body>: Holds the main content displayed in the browser.


// <h1> to <h6>: Headings, with <h1> usually being the main title and <h6> the smallest heading.


<p>: Paragraphs for text.


<div>: A generic container for grouping content.


<span>: An inline container, often used for text or grouping inline elements.


<a>: Anchor tag for links (href attribute sets the destination).


<ul>, <ol>, <li>: Unordered and ordered lists and list items.


<img>: For images (src attribute sets the image file). */}