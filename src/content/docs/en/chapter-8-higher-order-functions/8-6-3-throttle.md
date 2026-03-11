---
title: throttle()
sidebar:
  order: 3
  label: 8.6.3 throttle()
---

Throttling ensures that a function is called at most once in a specified time interval. Unlike debounce, it guarantees execution at regular intervals while events are firing.

```javascript
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      fn(...args);
      lastTime = now;
    }
  };
}

const log = throttle((msg) => console.log(msg), 1000);
log("A"); // executes
log("B"); // ignored if less than 1s after A
```
