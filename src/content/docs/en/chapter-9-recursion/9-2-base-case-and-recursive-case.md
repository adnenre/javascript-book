---
title: Base Case and Recursive Case
sidebar:
  order: 2
  label: 9.2 Base Case and Recursive Case
---

Every recursive function must have at least one base case (a condition that stops the recursion) and one recursive case (where the function calls itself). The base case prevents infinite recursion and stack overflow.

```javascript
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  // Recursive case
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```
