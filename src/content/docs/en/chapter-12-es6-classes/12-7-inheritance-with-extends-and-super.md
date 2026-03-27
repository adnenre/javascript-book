---
title: Inheritance with extends and super
sidebar:
  order: 7
  label: 12.7 Inheritance with extends and super
---

The `extends` keyword is used to create a class as a child of another class. The `super` keyword is used to call the parent class's constructor or methods. This allows classical inheritance in JavaScript.

### Key Points

- `extends` sets up the prototype chain.
- `super()` must be called before accessing `this` in the child constructor.
- `super.method()` can call parent class methods.

### Code Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  speak() {
    super.speak(); // call parent method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
// "Rex makes a noise."
// "Rex barks."
```
