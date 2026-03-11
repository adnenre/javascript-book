---
title: Function Composition
sidebar:
  order: 4
  label: 8.4 Function Composition
---

Function composition is the process of combining two or more functions to produce a new function. The result of one function is passed as input to the next. This allows building complex operations from simple building blocks.

```javascript
const add1 = (x) => x + 1;
const double = (x) => x * 2;
const composed = (x) => double(add1(x));
console.log(composed(3)); // 8

// More generic compose
const compose = (f, g) => (x) => f(g(x));
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3)); // 8
```
