---
title: Functions as First-Class Citizens
sidebar:
  order: 1
  label: 8.1 Functions as First-Class Citizens
---

In JavaScript, functions are treated as first‑class citizens, meaning they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This enables powerful functional programming patterns.

```javascript
const greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet("Alice")); // Hello, Alice
```
