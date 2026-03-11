---
title: debounce()
sidebar:
  order: 2
  label: 8.6.2 debounce()
---

Debouncing limits the rate at which a function is executed. It ensures that the function is called only after a certain amount of time has passed since the last invocation. Useful for handling events like typing or resizing.

```javascript
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const log = debounce((msg) => console.log(msg), 500);
log("Hello"); // will execute after 500ms if no other call
```
