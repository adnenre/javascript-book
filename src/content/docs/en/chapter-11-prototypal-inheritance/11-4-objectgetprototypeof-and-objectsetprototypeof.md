---
title: Object.getPrototypeOf() and Object.setPrototypeOf()
sidebar:
  order: 4
  label: 11.4 Object.getPrototypeOf() and Object.setPrototypeOf()
---

- **`Object.getPrototypeOf(obj)`** : Returns the prototype (i.e., the value of the internal `[[Prototype]]` property) of the specified object.
- **`Object.setPrototypeOf(obj, prototype)`** : Sets the prototype of a specified object. Use with caution because it can negatively impact performance.

These methods are the modern, standard way to read and modify prototypes, preferred over `__proto__`.

### Code Example

--code javascript
const parent = { name: "parent" };
const child = {};

Object.setPrototypeOf(child, parent);
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(child.name); // "parent"
--code
