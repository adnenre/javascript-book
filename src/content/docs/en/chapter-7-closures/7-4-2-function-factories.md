---
title: Function Factories
sidebar:
  order: 2
  label: 7.4.2 Function Factories
---

Closures allow creating function factories – functions that generate specialized functions with preset behaviour.

```javascript
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```
