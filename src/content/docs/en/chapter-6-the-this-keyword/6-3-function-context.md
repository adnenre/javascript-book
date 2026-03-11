---
title: Function Context
sidebar:
  order: 3
  label: 6.3 Function Context
---

Inside a regular (non‑arrow) function, the value of this depends on how the function is called. In non‑strict mode, if the function is called without an explicit context, this defaults to the global object. In strict mode, it defaults to undefined.

```javascript
function showThis() {
  console.log(this);
}
showThis(); // window (non‑strict) or undefined (strict)
```
