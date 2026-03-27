---
title: Understanding Prototypes
sidebar:
  order: 1
  label: 11.1 Understanding Prototypes
---

In JavaScript, **prototypes** are the mechanism by which objects inherit features from one another. Every object has an internal property called `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`) that points to another object. When you try to access a property on an object and it does not exist, JavaScript looks up the prototype chain until it finds the property or reaches `null`.

Prototypes allow sharing methods and properties across instances, saving memory and enabling inheritance.

### Code Example

```javascript
// A simple object with a prototype
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const rabbit = Object.create(animal); // rabbit's prototype is animal
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited from animal)
rabbit.walk(); // "Animal walks"
```
