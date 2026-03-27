---
title: The Prototype Chain
sidebar:
  order: 2
  label: 11.2 The Prototype Chain
---

The **prototype chain** is a series of links between objects. When you access a property, JavaScript traverses the chain from the object itself up to the top (`Object.prototype`), and finally `null`. If a property is not found anywhere in the chain, `undefined` is returned. This chain is the foundation of inheritance in JavaScript.

### Code Example

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const john = new Person("John");
john.greet(); // "Hello, I'm John"
console.log(john.toString()); // inherited from Object.prototype
```
