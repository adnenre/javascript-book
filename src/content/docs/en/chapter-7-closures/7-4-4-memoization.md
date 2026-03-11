---
title: Memoization
sidebar:
  order: 4
  label: 7.4.4 Memoization
---

Memoization uses closures to cache the results of expensive function calls, avoiding repeated computations.

```javascript
function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return 1;
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}
const fact = memoizedFactorial();
console.log(fact(5)); // 120
console.log(fact(5)); // from cache
```
