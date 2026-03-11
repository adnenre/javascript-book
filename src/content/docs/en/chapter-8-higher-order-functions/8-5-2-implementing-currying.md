---
title: Implementing Currying
sidebar:
  order: 2
  label: 8.5.2 Implementing Currying
---

We can create a helper function to automatically curry any given function. This function collects arguments until it has enough, then calls the original function.

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
```
