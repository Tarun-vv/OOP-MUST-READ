// NOTE: used to manually set the prototype of an object to any other object we want

// NOTE: creating the prototype of all other objects
const PersonProto = {
  // NOTE: will have methods remember ?
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // NOTE: setting properties of instance objects by a function
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// NOTE: creating object and setting the steven object's prototype to PersonProto
const steven = Object.create(PersonProto);
steven.init('Steven', 1979); // NOTE: calling the create function
steven.calcAge();

// NOTE: OUTPUT
console.log(typeof steven); // NOTE: object
console.log(steven.__proto__ === PersonProto); // NOTE: true

// NOTE: INHERITANCE BETWEEN CLASSES

const StudentProto = Object.create(PersonProto);
// NOTE: property filler function
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// NOTE: custom method
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'CS');
jay.introduce();
jay.calcAge();
