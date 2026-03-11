---
title: Parameter Destructuring
sidebar:
  order: 4
  label: 5.7.4 Parameter Destructuring
---

Parameters can be destructured directly in the function signature, extracting values from objects or arrays passed as arguments.

```javascript
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
displayUser({ name: "Alice", age: 30 }); // Alice is 30 years old
```
