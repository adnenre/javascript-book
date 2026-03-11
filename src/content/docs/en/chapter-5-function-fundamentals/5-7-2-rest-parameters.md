---
title: Rest Parameters
sidebar:
  order: 2
  label: 5.7.2 Rest Parameters
---

Rest parameters (...args) collect all remaining arguments into an array. They must be the last parameter.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```
