---
title: Prototype Chain Inheritance
sidebar:
  order: 1
  label: 11.8.1 Prototype Chain Inheritance
---

**Prototype chain inheritance** is the simplest inheritance pattern. It uses the prototype chain to make a child object inherit from a parent object. The child’s prototype is set to an instance of the parent, allowing all parent properties and methods to be accessible.

### Code Example

```javascript
function Parent() {
  this.name = "Parent";
}
Parent.prototype.greet = function () {
  console.log(`Hello from ${this.name}`);
};

function Child() {}
Child.prototype = new Parent(); // inheritance

const child = new Child();
child.greet(); // "Hello from Parent"
```
