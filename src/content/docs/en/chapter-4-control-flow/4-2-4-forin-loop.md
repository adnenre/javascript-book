---
title: for...in loop
sidebar:
  order: 4
  label: 4.2.4 for...in loop
---

The for...in loop iterates over the enumerable property names (keys) of an object. It is commonly used to traverse object properties, but it can also iterate over array indices.

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John, age: 30, city: New York

// With arrays (iterates over indices)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index + ": " + colors[index]);
}
// Output: 0: red, 1: green, 2: blue
```
