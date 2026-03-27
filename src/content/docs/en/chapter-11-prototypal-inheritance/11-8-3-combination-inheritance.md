---
title: Combination Inheritance
sidebar:
  order: 3
  label: 11.8.3 Combination Inheritance
---

**Combination inheritance** (also called **pseudo‑classical inheritance**) combines prototype chain inheritance and constructor stealing. It allows inheriting both instance properties (with their own copies) and shared methods via the prototype.

### Code Example

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // inherit instance properties
  this.age = age;
}
Child.prototype = new Parent(); // inherit methods
Child.prototype.constructor = Child; // fix constructor reference

const child1 = new Child("John", 10);
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]
child1.greet(); // "Hello John"

const child2 = new Child("Jane", 12);
console.log(child2.colors); // ["red", "blue"]
```
