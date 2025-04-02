// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");

// console.log("Start");

// function doSyncTask() {
//   for (let i = 0; i < 3; i++) {
//     console.log("Sync task in progress:", i);
//   }
// }

// doSyncTask();
// console.log("End");

//***************************************************88 */

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// function fakeAsyncOperation(data, callback) {
//   console.log('Processing:', data);
//   setTimeout(function() {
//     callback(data + '[processed]');
//   }, 1000);
// }

// fakeAsyncOperation('file1', function(result) {
//   console.log('Result:', result);
// });

//************************************** */
// 1. Simple Delayed Greeting
// Goal
// Learn how to use a callback that runs after a setTimeout delay.
// Steps
// Define a function delayedGreeting that takes a name, a delay, and a callback.
// Use setTimeout to log "Hello, <name>!" after delay milliseconds, then call the callback.

// Example usage:
// delayedGreeting.js

// function delayedGreeting(name, delay, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     if (callback) {
//       callback();
//     }
//   }, delay);
// }

// // Example usage:
// delayedGreeting('Alice', 1000, () => {
//   console.log('Greeting complete!');
// });


//==================================================================




// chainedCallbacks.js

// 1) Get user name (simulated)
// function getUser(callback) {
//   setTimeout(() => {
//     const userName = 'Ashe';
//     console.log('Fetched user:', userName);
//     callback(userName);
//   }, 1000);
// }

// // 2) Build a welcome message
// function getWelcomeMessage(name, callback) {
//   setTimeout(() => {
//     const message = `Welcome, ${name}!`;
//     callback(message);
//   }, 1000);
// }



// // Chaining them together
// getUser((userName) => {
//   getWelcomeMessage(userName, (welcomeMsg) => {
//     console.log('Final message:', welcomeMsg);
//   });
// });

///*************************************** */

// const myPromise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve('Promise resolved successfully');
//   } else {
//     reject('Promise rejected');
//   }
// });

// myPromise
//  .then((message) => {
//   console.log('success:', message);
// })
// .catch((error) => {
//   console.log('error:', error);
// });
//***************************************** */



// const isReady = false;

// const checkReadiness = new Promise((resolve, reject) => {
//   if (isReady) {
//     resolve('Ready to go!');
//   } else {
//     reject('Not ready yet.');
//   }
// });

// checkReadiness
//   .then((message) => {
//     console.log('success:', message);
//   })
//   .catch((error) => {
//     console.log('error:', error);
//   });

//****************************************** */
// Exercise:
// Random Result Promise
// Goal: Simulate a short asynchronous task using setTimeout, resolving or rejecting randomly.
// Write a function randomResult() that returns a Promise. Inside it:
// Use Math.random() to produce a 0–1 value.
// After 1 second (setTimeout), resolve if the number is above 0.5, reject otherwise.



// const randomResult = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomValue = Math.random();
//     console.log("Rando value:", randomValue)
//     if (randomValue > 0.5) {
//       resolve('Resolved successfully');
//     } else {
//       reject('Rejected');
//     }
//   }, 2000);
// });

// randomResult
//   .then((message) => {
//     console.log('Success:', message);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   })

// const isReady = false;

// const checkReadiness = new Promise((resolve, reject) => {
//   if (isReady) {
//     resolve('Everything is ready!');
//   } else {
//     reject('Not ready yet.');
//   }
// })

// checkReadiness
//   .then((message) => {
//     console.log('Success:', message);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   })

//==============================================================
// promise chaining 

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// add(2, 3)
//   .then((sum) => {
//     console.log('Sum:', sum);
//     return add(sum, 4);
//   })
//   .then((newSum) => {
//     console.log('New Sum:', newSum);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   })
//========================================

// Exercise 1: Chaining Two Simple Promises
// Goal: See how returning a promise from the first .then() feeds into the second .then().
// Define two functions that return Promises – each uses setTimeout to simulate an async operation:

// chainTwoPromises.js

// function promiseStep1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step 1 complete');
//       resolve('Data from Step 1');
//     }, 1000);
//   });
// }

// function promiseStep2(dataFromStep1) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step 2 received:', dataFromStep1);
//       resolve('Final Result');
//     }, 1000);
//   });
// }

// // Chain them:
// promiseStep1()
//   .then((result1) => {
//     return promiseStep2(result1);
//   })
//   .then((result2) => {
//     console.log('Final output:', result2);
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });

//================================================================

// Exercise 2: Chaining with a Synchronous Return
// Goal: Show how a .then() can return a non-promise value (synchronous result), which becomes the fulfillment value for the next .then().
// Write a function that returns a promise, then follow it with a .then() that returns a simple string:

// chainSyncReturn.js

// function fakeAsyncOperation() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Async operation done');
//       resolve(10);
//     }, 500);
//   });
// }

// fakeAsyncOperation()
//   .then((value) => {
//     console.log('Received:', value);
//     // Return a synchronous value
//     return value * 2;
//   })
//   .then((newValue) => {
//     console.log('Next step sees:', newValue);
//     // Another synchronous return
//     return 'All done!';
//   })
//   .then((finalValue) => {
//     console.log('Final value:', finalValue);
//   })
//   .catch((err) => {
//     console.error('Error occurred:', err);
//   });

//===========================

// Exercise 3: Multi-Step Chain with Conditional Rejection
// Goal: Chain multiple promises, with at least one step possibly rejecting based on a condition.
// Define three steps (stepA, stepB, stepC), each returning a Promise:

// multiStepChaining.js

// function stepA(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step A complete');
//       resolve(num + 1);
//     }, 500);
//   });
// }

// function stepB(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 5) {
//         reject('stepB error: number is too large!');
//       } else {
//         console.log('Step B complete');
//         resolve(num * 2);
//       }
//     }, 500);
//   });
// }

// function stepC(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step C complete');
//       resolve(num - 1);
//     }, 500);
//   });
// }

// // Chain them:
// stepA(3)
//   .then((resultA) => {
//     console.log('Result A:', resultA);
//     return stepB(resultA); // Might reject if resultA > 5
//   })
//   .then((resultB) => {
//     console.log('Result B:', resultB);
//     return stepC(resultB);
//   })
//   .then((resultC) => {
//     console.log('Final result:', resultC);
//   })
//   .catch((error) => {
//     console.error('Chain error:', error);
//   });

//===================================
// async/await

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// const fetchData = async () => {
//   try {
//     const result = await add(5, 7);
//     console.log('Result:', result);
//   } catch (error) {
//     console.error('Error', error);
//   }
// }

// fetchData();
//=====================================================

// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number!');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }

// async function showMultiplication() {
//   try {
//     const result = await multiply(4, 5);
//     console.log('Result:', result);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// showMultiplication();
//=============================

// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number!');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }


// async function doMultipleThings() {
//   try {
//     const step1 = await multiply(2, 3);
//     console.log('Step 1:', step1);

//     const step2 = await multiply(step1, 4);
//     console.log('Step 2:', step2);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// doMultipleThings();
//============================

// fetch api 

// const fetchUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/leonshimizu')

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`)
//     }

//     const userData = await response.json();
//     console.log(`${userData.name} has ${userData.public_repos} public GitHub repos!`);

//     console.log(userData);

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUser();


// function fetchUserData(userId) {
//   // Return a new Promise
//   return new Promise((resolve, reject) => {
//     // Use fetch (built-in in modern browsers, Node 18+, or via polyfill)
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((response) => {
//         if (!response.ok) {
//           // If we get an HTTP error (e.g., 404), reject with an error
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Otherwise, parse and return JSON data
//         return response.json();
//       })
//       .then((data) => {
//         // Resolve the Promise with the fetched user data
//         resolve(data);
//       })
//       .catch((error) => {
//         // Reject the Promise if any error occurs
//         reject(error);
//       });
//   });
// }

// // How to use this function:
// fetchUserData(1)
//   .then((user) => {
//     console.log('User data:', user);
//   })
//   .catch((err) => {
//     console.error('Error fetching user:', err);
//   });

//=========================

// Async/Await Exercises for anyone who wants more practice:
// Exercise 1: Converting a Promise to Async/Await
// Goal: Take a simple promise-based function and rewrite it using async/await.
// Write a function multiply(a, b) that returns a Promise:

// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Inputs must be numbers!');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   });
// }
//===========================

// reate an async function that uses await on multiply(a, b):
// async function showMultiplication() {
//   try {
//     const result = await multiply(4, 5);
//     console.log('Product:', result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

//===============================================

// Exercise 2: Multiple Awaits in a Single Function
// Goal: Demonstrate sequential async operations, each depending on the previous result.
// Reuse multiply(a, b) or add(a, b) from the previous example, or define your own.
// Write an async function that does multiple awaits in a row:


// async function doSequentialOps() {
//   try {
//     const step1 = await multiply(2, 3);
//     console.log('Step 1 result:', step1);

//     const step2 = await multiply(step1, 4);
//     console.log('Step 2 result:', step2);

//     // Maybe a third await, or a synchronous step
//     const finalResult = step2 + 10;
//     console.log('Final result:', finalResult);
//   } catch (err) {
//     console.error('An error occurred:', err);
//   }
// }

// doSequentialOps();

//=====================================

// Exercise 3: Async/Await with Forced Error and Cleanup
// Goal: Practice error handling in async/await, using a forced error to see how try...catch responds. Optionally, demonstrate a .finally()-like pattern.
// Define two separate async functions:
// fetchNumber(): Returns a random number, but occasionally throws an error to simulate a failure.
// processNumber(num): Expects a valid number and returns a “processed” result.

// function fetchNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.3) {
//         reject('Random fetch error!');
//       } else {
//         resolve(rand * 100);
//       }
//     }, 600);
//   });
// }

// function processNumber(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof num !== 'number') {
//         reject('Invalid input. Expected a number!');
//       } else {
//         resolve(Math.round(num));
//       }
//     }, 400);
//   });
// }
//======================================

// Create an async function to orchestrate both steps:
// async function runProcess() {
//   console.log('Starting process...');
//   try {
//     const rawNum = await fetchNumber();
//     console.log('Fetched raw number:', rawNum);

//     const processed = await processNumber(rawNum);
//     console.log('Processed number:', processed);
//   } catch (error) {
//     console.error('Error in runProcess:', error);
//   } finally {
//     console.log('Process finished (success or error).');
//   }
// }

// runProcess();
//======================================

// Callback example:
// function delayedGreeting(name, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }, 1000)
// }

// delayedGreeting('Damen', () => {
//   console.log('Greeting has finished.');
// });

//============================================

// // promise 

// const fetchNumber = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 10);

//   if (num > 5) {
//     resolve(`Number is ${num}, which is greater than 5.`);
//   } else {
//     reject(`Number is ${num}, which is not greater than 5.`);
//   }
// });

// fetchNumber
//   .then((message) => {
//     console.log('Promise fulfilled:', message);
//   })
//   .catch((err) => {
//     console.error('Promise rejected:', err);
//   })

//=================================================

//   // async/await 


// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }

// async function showMultiplication() {
//   try {
//     const product = await multiply(4, 5);
//     console.log('Product:', product);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// showMultiplication();

//============================

// Exercises:
// 1) Callbacks
// Part A
// Task: Write a function that takes in an array of names and a callback. The function should use a setTimeout to simulate an async operation (e.g., “fetching” names) and then pass the loaded names to the callback.
// Create a function called loadNames(namesArray, callback).
// Inside the function, use setTimeout(...) (e.g., 1 second delay) to simulate an async operation.
// After the timeout, log "Names loaded" to the console, then invoke the callback with the array of names.
// Test it by passing in an array of strings (e.g., ["Alice", "Bob", "Charlie"]) and a callback that logs each name to the console.
// function loadNames(namesArray, callback) {
//   setTimeout(() => {
//     console.log("Names loaded");
//     // TODO: call the callback with the namesArray
//   }, 1000);
// }

// // Usage:
// const names = ["Alice", "Bob", "Charlie"];

// loadNames(names, (loadedNames) => {
//   // TODO: log each name or do something with loadedNames
// });
// Part B
// Task: Chain two callback-based functions to handle “loading user data” and then “formatting it.” This is to practice the callback pattern more deeply (and see how it can get nested).
// Create a function loadUserData(callback) that simulates loading data via setTimeout. Let it return an object like { firstName: "John", lastName: "Doe" }.
// Create another function formatUserData(userData, callback) that takes the user object and returns a formatted string, e.g., "User: John Doe".
// Chain these calls, so loadUserData(...) triggers formatUserData(...).
// Print the final formatted string in the callback chain.
// function loadUserData(callback) {
//   setTimeout(() => {
//     const user = { firstName: "John", lastName: "Doe" };
//     console.log("User data loaded:", user);
//     // TODO: pass user to callback
//   }, 1000);
// }

// function formatUserData(userData, callback) {
//   setTimeout(() => {
//     const formatted = `User: ${userData.firstName} ${userData.lastName}`;
//     console.log("User data formatted:", formatted);
//     // TODO: pass formatted string to callback
//   }, 1000);
// }

// // Usage:
// loadUserData((user) => {
//   formatUserData(user, (finalString) => {
//     // TODO: final console.log or any other operation
//   });
// });
// 2) Promises
// Part A
// Task: Create a function that returns a Promise which resolves or rejects based on a “random coin flip.”
// Create a function coinFlip() that returns a new Promise.
// Use Math.random() to decide if it’s heads (resolve("Heads!")) or tails (reject("Tails!")).
// Chain a .then() to handle the “Heads!” scenario and a .catch() to handle “Tails!”.
// Log the result accordingly.
// function coinFlip() {
//   return new Promise((resolve, reject) => {
//     // TODO: generate a random number, if it's >= 0.5 => resolve, else reject
//   });
// }

// coinFlip()
//   .then((result) => {
//     console.log("Promise fulfilled:", result);
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   });
// Part B
// Task: Write a Promise-based function that simulates “fetching a list of scores,” then chain the promise with a second function that calculates the average.
// Create a function fetchScores() that returns a Promise. Inside, use setTimeout (~1 second) to simulate an API call and resolve with an array of numbers (e.g., [90, 80, 75, 88]).
// Then chain to a .then(...) that calculates the average and returns it.
// Add another .then(...) to log the average, and .catch(...) to handle any possible error (you can artificially introduce an error if needed).
// function fetchScores() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // For demonstration, let's say there's a 10% chance of failure
//       const isError = Math.random() < 0.1;
//       if (isError) {
//         reject("Failed to fetch scores!");
//       } else {
//         resolve([90, 80, 75, 88]);
//       }
//     }, 1000);
//   });
// }

// fetchScores()
//   .then((scores) => {
//     console.log("Scores:", scores);
//     // TODO: calculate average and return it
//   })
//   .then((average) => {
//     // TODO: log the average
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// 3) async/await
// Part A
// Task: Convert a simple “add two numbers” Promise into an async/await function.
// Create a Promise-based function addNumbers(a, b) that resolves the sum after a short delay.
// Write an async function displaySum() that awaits addNumbers(...) and logs the sum.
// Use try/catch to handle rejections (e.g., if either a or b is not a number).
// function addNumbers(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== "number" || typeof b !== "number") {
//         reject("Parameters must be numbers!");
//       } else {
//         resolve(a + b);
//       }
//     }, 500);
//   });
// }

// async function displaySum() {
//   try {
//     // TODO: await the result of addNumbers
//     // TODO: log the sum
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// displaySum(); // call with e.g., addNumbers(2, 3)
// Part B
// Task: Fetch two sets of “fake data” in sequence using async/await and combine them.
// Create two Promise-based functions: fetchUsers() and fetchPosts(). Each one uses setTimeout to simulate an async call and returns an array of objects (e.g., users or posts).
// Write an async function loadAndCombineData():
// Await fetchUsers()
// Await fetchPosts()
// Combine or correlate the data in some way (e.g., match each user to one of the posts by index)
// Log the combined result
// Add try/catch to handle any rejection from fetchUsers() or fetchPosts().
// function fetchUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Let's say there's a small chance of error
//       if (Math.random() < 0.2) {
//         reject("Failed to fetch users!");
//       } else {
//         resolve([
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" },
//         ]);
//       }
//     }, 800);
//   });
// }

// function fetchPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Another small chance of error
//       if (Math.random() < 0.2) {
//         reject("Failed to fetch posts!");
//       } else {
//         resolve([
//           { userId: 1, title: "Hello World" },
//           { userId: 2, title: "Async/Await Post" },
//         ]);
//       }
//     }, 800);
//   });
// }

// async function loadAndCombineData() {
//   try {
//     // TODO: await both fetchUsers and fetchPosts
//     // TODO: combine them by matching user.id === post.userId
//     // TODO: log the combined data
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// loadAndCombineData();

//===========================================