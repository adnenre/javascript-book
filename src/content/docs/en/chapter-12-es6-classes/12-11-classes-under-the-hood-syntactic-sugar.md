---
title: Classes Under the Hood (Syntactic Sugar)
sidebar:
  order: 11
  label: 12.11 Classes Under the Hood (Syntactic Sugar)
---

JavaScript classes are primarily **syntactic sugar** over the existing prototype-based inheritance. They provide a cleaner syntax but do not introduce a new object-oriented model. Under the hood, classes are still functions, and methods are defined on the prototype.

### Key Points

- A class declaration creates a constructor function.
- Methods are defined on the class’s prototype.
- Static methods are attached to the constructor function.
- The `extends` keyword sets up the prototype chain between constructors.

### Code Example

```javascript
// Class syntax
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  static describe() {
    console.log("A person class");
  }
}

// Equivalent prototype-based code
function Person_Old(name) {
  this.name = name;
}
Person_Old.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};
Person_Old.describe = function () {
  console.log("A person class");
};

const john = new Person("John");
const johnOld = new Person_Old("John");
console.log(john.greet === johnOld.greet); // true
console.log(Person.describe === Person_Old.describe); // true
```
