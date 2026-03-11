---
title: configurable
sidebar:
  order: 4
  label: 10.6.4 configurable
---

If configurable is true, the property descriptor can be changed and the property can be deleted; otherwise it cannot be reconfigured or removed.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 1, configurable: false });
delete obj.x; // false or error in strict mode
console.log(obj.x); // 1
```
