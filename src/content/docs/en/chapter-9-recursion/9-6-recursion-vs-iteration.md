---
title: Recursion vs Iteration
sidebar:
  order: 6
  label: 9.6 Recursion vs Iteration
---

Recursion and iteration are two ways to repeat code. Recursion often leads to cleaner, more declarative solutions for problems with a recursive structure (e.g., trees). However, recursion can be less performant due to call stack overhead and may cause stack overflow for deep recursion. Iteration (loops) is usually more efficient and safe for large repetitions. The choice depends on readability, problem nature, and performance requirements.

```javascript
// iterative factorial
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log(factorialIterative(5)); // 120
```
