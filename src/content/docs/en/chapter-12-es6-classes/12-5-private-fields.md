---
title: Private Fields (#)
sidebar:
  order: 5
  label: 12.5 Private Fields (#)
---

Private fields are a feature introduced in ES2022 to create truly private properties and methods inside a class. They are prefixed with a hash (`#`) and cannot be accessed from outside the class. This provides encapsulation.

### Key Points

- Declared using `#fieldName`.
- Can be used as instance fields or static fields.
- Private methods can also be defined with `#methodName()`.
- They are truly private (not just naming convention like `_`).

### Code Example

```javascript
class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  #logTransaction(amount) {
    // private method
    console.log(`Transaction: ${amount}`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction(amount);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice");
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError
```
