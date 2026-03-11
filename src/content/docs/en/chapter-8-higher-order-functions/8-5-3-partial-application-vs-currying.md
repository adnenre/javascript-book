---
title: Partial Application vs Currying
sidebar:
  order: 3
  label: 8.5.3 Partial Application vs Currying
---

Partial application fixes a certain number of arguments to a function, producing a function with smaller arity. Currying transforms a multi‑argument function into a chain of unary functions. While related, they are different: currying always yields unary functions; partial application can fix any number of arguments.

```javascript
// Partial application (not automatic)
function add(a, b, c) {
  return a + b + c;
}
const add5 = add.bind(null, 5); // fixes first argument to 5
console.log(add5(2, 3)); // 10

// Currying always gives unary functions
const curriedAdd = (a) => (b) => (c) => a + b + c;
const add5Curried = curriedAdd(5); // returns b => c => 5 + b + c
console.log(add5Curried(2)(3)); // 10
```
