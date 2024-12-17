'use strict';

// NOTE: CREATING INSTANCES OF PERSON || NOT DOING SOMETHING LIKE USER class / ADMIN class

// NOTE : no difference between normal function and construction function, the only difference difference is that we call constructor function with the 'new' keyowrd. Convention is that they start with capital letter.

// NOTE : constructor function is also known as 'factory function'. It is not actual classes like in other languages - it is just a pattern made by other devs

// FIXME: arrow functions cannot be used becuase they do not have their own 'this' keyword

// NOTE: CREATING

// NOTE: #1 use parameters to set properties of the object

const Person = function (firstName, birthYear) {
  // NOTE: #2.1 use 'this' keyword to set the properties of object -> these properties are instance properties, that is they are available to all instance

  this.firstName = firstName;
  this.birthYear = birthYear;
};

// NOTE: #2.2 creating methods for the constructor funcitions
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// NOTE: #3 call with 'new' keyword and store it
const jonas = new Person('Jonas', 1991);
jonas.calcAge(); // NOTE: 46

// NOTE: OUTPUTS;
console.log(typeof Person); // NOTE: type is 'function'

console.log(jonas);
console.log(typeof jonas); // NOTE: type is 'object'
console.log(jonas instanceof Person); // NOTE: true
console.log(jonas.__proto__); // NOTE: get the prototype of object
console.log(jonas.__proto__ === Person.prototype); // NOTE: true
console.log(Person.prototype.isPrototypeOf(jonas)); // NOTE: same as above method -> true

console.log(typeof Person.prototype); // NOTE: type is 'object'
