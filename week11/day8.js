// Promise.all

// async function fetchMultipleResources() {
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/users/2',
//     'https://jsonplaceholder.typicode.com/comments/3',
//   ];

//   try {
//     const responses = await Promise.all(urls.map(url => fetch(url)));

//     responses.forEach(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error. Status: ${response.status}`);
//       }
//     });

//     const dataPromises = responses.map(response => response.json());

//     const data = await Promise.all(dataPromises);

//     console.log('All Data Received:', data);

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchMultipleResources();
//=====================================================

// Promise.race
// let's you proceed with the first Promise that completes
// helpful if you only care about the earliest response

// function createTimer(delay, name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Timer ${name} finished in ${delay} ms`);
//     }, delay);
//   })
// }

// async function raceTimers() {
//   try {
//     const result = await Promise.race([
//       createTimer(1000, 'One'),
//       createTimer(2000, 'Two'),
//       createTimer(500, '.5')
//     ]);
//     console.log('Winner:', result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// raceTimers()

//===================================================

// Exercise for Promise.all
// Goal: Use Promise.all to fetch or simulate two simple Promises concurrently.
// Create two functions, fetchName() and fetchAge(), each returning a Promise that resolves after a short setTimeout.
// Use Promise.all([fetchName(), fetchAge()]) in an async function.
// Log the combined results when both promises have resolved.
// function fetchName() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Alice"), 500);
//   });
// }

// function fetchAge() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(30), 700);
//   });
// }

// async function getUserInfo() {
//   try {
//     const [name, age] = await Promise.all([fetchName(), fetchAge()]);
//     console.log(`User: ${name}, Age: ${age}`);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// getUserInfo();
// Exercise for Promise.race
// Goal: Implement a “fetch with fallback” approach.
// Create two fetch calls to different URLs (e.g., a primary API and a backup API).
// Use Promise.race([primaryFetch, fallbackFetch]).
// Whichever fetch resolves first, log the data. If one fails, see if the other can still respond first.
// Use try/catch to handle rejections. If both fail quickly, your .catch block should handle it.
// function fetchPrimary() {
//   return fetch('https://jsonplaceholder.typicode.com/posts/1');
// }

// function fetchFallback() {
//   return fetch('https://jsonplaceholder.typicode.com/posts/2');
// }

// async function fetchWithFallback() {
//   try {
//     const response = await Promise.race([fetchPrimary(), fetchFallback()]);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Fetched data (first response):', data);
//   } catch (error) {
//     console.error('All fetch attempts failed:', error);
//   }
// }

// fetchWithFallback();