---
title: writable
sidebar:
  order: 2
  label: 10.6.2 writable
---

If writable is true, the property’s value can be changed; otherwise it is read‑only.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
obj.x = 20; // ignored or error in strict mode
console.log(obj.x); // 10
```
