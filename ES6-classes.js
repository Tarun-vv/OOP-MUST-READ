// NOTE: synthatic sugar over constructor function

// NOTE: class is NOT hoisted

class PersonCl {
  // NOTE: constructur takes the properties that we want the new object to have
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // NOTE: methods are declared here -> go to PersonCl.prototype (no need to do manually)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get name() {
    return this.firstName;
  }

  // NOTE: static methods / methods available on the constructor function and not the prototype
  static hey() {
    console.log('Hey there');
  }
}

// NOTE: use 'new' to create an object
const jonas = new PersonCl('jonas', 1991);

// NOTE: OUTPUTS
console.log(typeof PersonCl); // NOTE: function
console.log(typeof jonas); // NOTE: object
PersonCl.hey();
console.log(jonas.name); // 'jonas'
console.log(jonas);

//////////////
// NOTE: challenge
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return (this.speed += 10);
  }

  brake() {
    return (this.speed -= 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const bmw = new Car('bmw', 120);
console.log(bmw.accelerate());
console.log(bmw.speedUS);
