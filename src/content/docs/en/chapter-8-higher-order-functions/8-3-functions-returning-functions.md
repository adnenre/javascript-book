---
title: Functions Returning Functions
sidebar:
  order: 3
  label: 8.3 Functions Returning Functions
---

Functions can return other functions, creating a closure that retains access to the outer function's scope. This is used for function factories, partial application, and creating specialised functions.

```javascript
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```
