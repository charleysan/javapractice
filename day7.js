// const fetchUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/leonshimizu');

//     // console.log(response);

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`);
//       // throw - This is a JavaScript keyword that generates an exception (error). When you throw an error, code execution stops at that point and control moves to the nearest catch block.
//       // new Error() - This creates a new instance of JavaScript's built-in Error object. It's the standard way to create error objects in JavaScript.
//     }

//     const userData = await response.json();
//     console.log(userData);
//     console.log(`${userData.name} has ${userData.public_repos} public GitHub repos!`);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// fetchUser();

//=======================================


// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`);
//     }

//     const users = await response.json();

//     users.forEach(user => {
//       console.log(`Name: ${user.name}, Email: ${user.email}`);
//     });
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchUsers();

//=================================================