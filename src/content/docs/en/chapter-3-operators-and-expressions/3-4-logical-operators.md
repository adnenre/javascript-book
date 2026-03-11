---
title: Logical Operators
sidebar:
  order: 4
  label: 3.4 Logical Operators
---

Logical operators work with boolean values or truthy/falsy values. && (AND) returns the first falsy operand or the last truthy operand. || (OR) returns the first truthy operand or the last falsy operand. ?? (nullish coalescing) returns the right operand only if the left operand is null or undefined.

```javascript
let a = true;
let b = false;
console.log(a && b); // false (AND)
console.log(a || b); // true  (OR)
console.log(!a); // false (NOT)

// Short-circuit evaluation
console.log(0 && "hello"); // 0
console.log(5 || "hello"); // 5
```
