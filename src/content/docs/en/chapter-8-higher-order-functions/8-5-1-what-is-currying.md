---
title: What is Currying?
sidebar:
  order: 1
  label: 8.5.1 What is Currying?
---

Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument. This allows partial application and creates more reusable and composable functions.

```javascript
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6
```
