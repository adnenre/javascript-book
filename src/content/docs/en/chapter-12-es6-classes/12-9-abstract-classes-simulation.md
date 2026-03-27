---
title: Abstract Classes (Simulation)
sidebar:
  order: 9
  label: 12.9 Abstract Classes (Simulation)
---

JavaScript does not have built-in abstract classes, but they can be simulated. An abstract class is a class that cannot be instantiated directly and is meant to be extended by subclasses. It may define methods that must be implemented by subclasses.

### Key Points

- Use a convention (like `new.target` or throwing errors) to prevent instantiation.
- Define abstract methods that throw errors if not overridden.
- Provide common functionality that subclasses inherit.

### Code Example

```javascript
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Cannot instantiate abstract class Animal");
    }
    this.name = name;
  }

  // Abstract method
  makeSound() {
    throw new Error("Abstract method makeSound must be implemented");
  }

  // Concrete method
  move() {
    console.log(`${this.name} moves.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

// const animal = new Animal("Generic"); // Error
const dog = new Dog("Rex");
dog.makeSound(); // "Rex barks."
dog.move(); // "Rex moves."
```
