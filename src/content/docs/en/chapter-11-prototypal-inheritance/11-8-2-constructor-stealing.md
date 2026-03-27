---
title: Constructor Stealing
sidebar:
  order: 2
  label: 11.8.2 Constructor Stealing
---

**Constructor stealing** (or **classical inheritance**) involves calling the parent constructor inside the child constructor using `call()` or `apply()`. This allows the child to inherit the parent’s instance properties, but methods are not shared via the prototype.

### Code Example

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

function Child(name) {
  Parent.call(this, name); // steal constructor
}

const child1 = new Child("John");
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]

const child2 = new Child("Jane");
console.log(child2.colors); // ["red", "blue"] (not affected)
// child1.greet(); // error: greet is not shared
```
