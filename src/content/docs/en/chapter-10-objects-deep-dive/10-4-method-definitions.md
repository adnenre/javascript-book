---
title: Method Definitions
sidebar:
  order: 4
  label: 10.4 Method Definitions
---

In object literals, methods can be defined using a shorter syntax, omitting the function keyword.

```javascript
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
};
calculator.add(5).subtract(2);
console.log(calculator.value); // 3
```
