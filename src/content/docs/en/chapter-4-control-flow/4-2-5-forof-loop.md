---
title: for...of loop
sidebar:
  order: 5
  label: 4.2.5 for...of loop
---

The for...of loop iterates over iterable objects (such as arrays, strings, maps, sets) and returns the values of each element, not their indices or keys.

```javascript
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, orange

// Works with strings
const greeting = "Hello";
for (let char of greeting) {
  console.log(char);
}
// Output: H, e, l, l, o
```
