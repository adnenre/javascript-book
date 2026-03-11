---
title: Comma Operator
sidebar:
  order: 7
  label: 3.7 Comma Operator
---

The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. It is often used in for loops to combine multiple expressions.

```javascript
let result = (5 + 3, 10 - 2, 20 / 5);
console.log(result); // 4 (last expression)

// Used in loops
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(i, j);
}
```
