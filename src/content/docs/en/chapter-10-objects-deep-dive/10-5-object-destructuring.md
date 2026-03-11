---
title: Object Destructuring
sidebar:
  order: 5
  label: 10.5 Object Destructuring
---

Object destructuring extracts properties from an object into variables, providing a concise way to unpack values.

```javascript
const user = { name: "Charlie", age: 25 };
const { name, age } = user;
console.log(name); // Charlie
console.log(age); // 25

// With renaming
const { name: userName } = user;
console.log(userName); // Charlie
```
