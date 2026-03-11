---
title: Function Expressions
sidebar:
  order: 2
  label: 5.2 Function Expressions
---

A function expression defines a function as part of a larger expression, typically assigning it to a variable. The function can be named or anonymous. Unlike declarations, function expressions are not hoisted.

```javascript
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20
```
