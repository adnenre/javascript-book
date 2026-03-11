---
title: Computed Properties
sidebar:
  order: 3
  label: 10.3 Computed Properties
---

Computed property names allow you to use an expression in square brackets as a property key when creating an object.

```javascript
const key = "color";
const car = {
  brand: "Toyota",
  [key]: "red",
};
console.log(car.color); // red
```
