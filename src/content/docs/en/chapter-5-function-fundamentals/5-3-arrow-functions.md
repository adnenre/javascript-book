---
title: Arrow Functions
sidebar:
  order: 3
  label: 5.3 Arrow Functions
---

Arrow functions provide a concise syntax for writing functions. They do not have their own this, arguments, or super bindings, and cannot be used as constructors. They are best suited for non‑method functions.

```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 7)); // 3
```
