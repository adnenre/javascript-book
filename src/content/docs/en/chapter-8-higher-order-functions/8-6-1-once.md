---
title: once()
sidebar:
  order: 1
  label: 8.6.1 once()
---

once ensures that a given function is called only once, no matter how many times it is invoked. Subsequent calls return the result of the first invocation.

```javascript
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const init = once(() => console.log("Initializing"));
init(); // Initializing
init(); // (nothing)
init(); // (nothing)
```
