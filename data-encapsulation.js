// NOTE: types of fields

// NOTE: public fields -> fields that has to be accessible to all instances but not the prototypes
// NOTE: private fields -> fields that cannot be accessed from the outside, they are present not present in the prototypes
// NOTE: public methods
// NOTE: private methods

class Account {
  // NOTE: declare public fields here outside
  locale = navigator.language;
  bank = 'Bankist';

  // NOTE: protecting private fields
  #movements = [];
  // NOTE: if we want to private a field that is also an input
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  deposit(val) {
    this.#movements.push(val);
    // NOTE: to enable chaining of methods we have to return this
    return this;
  }

  withdraw(val) {
    // NOTE: can call other functions inside functions
    this.deposit(-val);
    return this;
  }

  // NOTE: private methods
  #approveLoan(val) {
    return true;
  }

  // NOTE: these are public methods
  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);
acc1.deposit(450);
acc1.withdraw(140);
acc1.deposit(500).withdraw(200).requestLoan(1000);

console.log(acc1);
