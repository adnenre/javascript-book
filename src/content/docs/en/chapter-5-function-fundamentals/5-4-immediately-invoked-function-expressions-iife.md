---
title: Immediately Invoked Function Expressions (IIFE)
sidebar:
  order: 4
  label: 5.4 Immediately Invoked Function Expressions (IIFE)
---

An IIFE is a function that is executed immediately after its definition. It is often used to create a private scope and avoid polluting the global namespace. It can be written with either function declarations or arrow functions.

```javascript
(function () {
  console.log("IIFE executed");
})();

(() => console.log("Arrow IIFE"))();
```
