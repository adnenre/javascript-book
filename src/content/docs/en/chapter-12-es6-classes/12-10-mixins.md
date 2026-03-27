---
title: Mixins
sidebar:
  order: 10
  label: 12.10 Mixins
---

Mixins are a way to compose classes by combining behaviors from multiple sources. Since JavaScript classes support single inheritance, mixins allow you to "mix in" additional properties and methods from other classes or objects.

### Key Points

- Implemented as functions that copy or inherit properties onto a target class.
- Can use `Object.assign` to add methods to a prototype.
- Multiple mixins can be applied to create a class with combined capabilities.

### Code Example

```javascript
// Mixin functions
const CanFly = (superclass) =>
  class extends superclass {
    fly() {
      console.log("Flying!");
    }
  };

const CanSwim = (superclass) =>
  class extends superclass {
    swim() {
      console.log("Swimming!");
    }
  };

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Create a class with multiple mixins
class Duck extends CanSwim(CanFly(Animal)) {
  constructor(name) {
    super(name);
  }
  quack() {
    console.log(`${this.name} quacks.`);
  }
}

const duck = new Duck("Donald");
duck.fly(); // "Flying!"
duck.swim(); // "Swimming!"
duck.quack(); // "Donald quacks."
```
