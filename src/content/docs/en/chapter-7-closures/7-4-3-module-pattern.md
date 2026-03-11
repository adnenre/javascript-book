---
title: Module Pattern
sidebar:
  order: 3
  label: 7.4.3 Module Pattern
---

The module pattern uses an IIFE to create a closure that encapsulates private data and exposes a public API.

```javascript
const counterModule = (function () {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
})();
counterModule.increment();
console.log(counterModule.getCount()); // 1
```
