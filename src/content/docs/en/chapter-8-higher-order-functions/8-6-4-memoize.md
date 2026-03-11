---
title: memoize()
sidebar:
  order: 4
  label: 8.6.4 memoize()
---

Memoization caches the results of expensive function calls based on the arguments provided. Subsequent calls with the same arguments return the cached value without recomputing.

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowFactorial = memoize((n) => {
  console.log("Computing...");
  return n <= 1 ? 1 : n * slowFactorial(n - 1);
});

console.log(slowFactorial(5)); // Computing... 120
console.log(slowFactorial(5)); // 120 (cached)
```
