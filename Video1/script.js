//arrays in js .
//arrays are used to store multiple values in a single variable.
//some functions of arrays are:forEach(),mao(),fliter(),find(),indexOf().

//1. forEach() function
//The forEach method is used to iterate over an array and execute a provided function once for each element.

//systax:-
// array.forEach(function (element, index, array) {
//   // Code to execute
// });
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num + " is even");
//   }
//   else {
//     console.log(num + " is odd");
//   }
// });
// Key Points:
// It does not return a new array (unlike map).
// It cannot be stopped or broken (use for...of or for loop if needed).
// It is useful for performing operations like logging or modifying elements.

//2.map() function
//The map method is used to create a new array by applying a function to each element of an existing array.
// let newArray = array.map(function (element, index, array) {
//   // Return modified element
// });
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// Key Points:
// It returns a new array (unlike forEach, which doesn't return anything).
// The original array remains unchanged.
// Used for transforming data efficiently.

//3.filter
//The filter method is used to create a new array containing elements that satisfy a given condition.
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(function (val) {
//      if(val%2 === 0) return true;
// });
// console.log(evenNumbers);
// Key Points:
// It returns a new array with only the elements that pass the test.
// The original array remains unchanged.
// Useful for removing unwanted values based on conditions.
// return true for the element that will in the new array

//4.find
//The find method returns the first element in an array that satisfies a given condition.
// let numbers = [10, 20, 30, 40];
// let found = numbers.find((num) => num > 50);
// console.log(found);
// Key Points:
// Returns only the first matching element.
// Returns undefined if no element matches.
// Does not modify the original array.

//5.indexOf
//The indexOf method returns the first index of a specified value in an array, or -1 if not found.
// let numbers = [10, 20, 30, 30, 40];
// let index = numbers.indexOf('30');
// console.log(index);
// Key Points:
// Returns the first index of the given value.
// Returns -1 if the value is not found.
// Uses strict equality (===) for comparison.

//OBJECTS
//An object in JavaScript is a collection of key-value pairs where keys are strings (or Symbols), and values can be any data type, including functions (methods).
// let person = {
//   name: "Aniket",
//   age: 22,
//   isDeveloper: true,
//   greet: function() {
//     console.log("Hello, I am " + this.name);
//   }
// };
// console.log(person.age);
// Object.freeze(person);
// person.greet();
// person.age = 25;
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, I am ${this.name} and my age ${this.age}`);
//   }
// }
// let user2 = new Person("Aniket", 22);
// user2.greet();
// Key Points
// Objects store data in key-value pairs.
// Functions inside objects are called methods.
// Objects can be created using literals, constructors, or classes.
// Use dot (.) or bracket ([]) notation to access properties.
// Use delete to remove properties.

//async in JavaScript
//The async keyword is used to define an asynchronous function, which always returns a promise. It allows handling asynchronous operations in a simpler and more readable way compared to callbacks or .then().
// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// fetchData();
// Key Points:
// async functions always return a promise.
// await pauses execution until a promise resolves.
// try...catch is used for error handling in async functions.
// Works well with APIs and asynchronous operations like fetch().