---
title: Tail Call Optimization
sidebar:
  order: 4
  label: 9.4 Tail Call Optimization
---

Tail call optimization (TCO) allows a function in tail position (the last action before returning) to reuse the current stack frame, preventing stack growth. In strict mode, JavaScript engines may support TCO, but it is not guaranteed in all environments.

```javascript
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, n * acc); // tail call
}
console.log(factorialTail(5)); // 120
```
