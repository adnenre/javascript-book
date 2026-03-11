---
title: The arguments Object
sidebar:
  order: 3
  label: 5.7.3 The arguments Object
---

Inside non‑arrow functions, the arguments object is an array‑like object containing the passed arguments. It is not available in arrow functions.

```javascript
function showArgs() {
  console.log(arguments[0]);
  console.log(arguments.length);
}
showArgs("hello", 42); // hello, 2
```
