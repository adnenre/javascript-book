---
title: Class Declarations and Expressions
sidebar:
  order: 1
  label: 12.1 Class Declarations and Expressions
---

The `constructor` method is a special method for creating and initializing an object created with a class. Only one `constructor` can exist in a class. If you do not provide one, a default empty constructor is added.

### Key Points

- Used to set up instance properties.
- Can call `super()` to call the parent class constructor when extending.
- Can return an object to override the default instance.

### Code Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Created ${this.name}`);
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const john = new Person("John", 30);
john.greet(); // "Hello, I'm John"
```
