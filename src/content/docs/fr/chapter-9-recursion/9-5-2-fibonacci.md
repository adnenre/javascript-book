---
title: Fibonacci
sidebar:
  order: 2
  label: 9.5.2 Fibonacci
---

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
```
