---
title: Parasitic Combination Inheritance
sidebar:
  order: 5
  label: 11.8.5 Parasitic Combination Inheritance
---

**Parasitic combination inheritance** is considered the most efficient inheritance pattern. It uses constructor stealing for instance properties and a parasitic function to set up the prototype chain without calling the parent constructor twice (unlike combination inheritance).

### Code Example

```javascript
function inheritPrototype(child, parent) {
  const prototype = Object.create(parent.prototype); // create prototype object
  prototype.constructor = child; // fix constructor
  child.prototype = prototype; // assign
}

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // steal constructor
  this.age = age;
}
inheritPrototype(Child, Parent); // set up prototype chain

const child1 = new Child("John", 10);
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]
child1.greet(); // "Hello John"
```
