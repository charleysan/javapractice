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



const randomResult = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.random();
    console.log("Rando value:", randomValue)
    if (randomValue > 0.5) {
      resolve('Resolved successfully');
    } else {
      reject('Rejected');
    }
  }, 2000);
});

randomResult
.then((message) => {
  console.log('Success:', message);
})
.catch((error) => {
  console.log('Error:', error);
})


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
