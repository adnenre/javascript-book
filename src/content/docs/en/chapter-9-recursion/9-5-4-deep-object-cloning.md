---
title: Deep Object Cloning
sidebar:
  order: 4
  label: 9.5.4 Deep Object Cloning
---

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 42;
console.log(original.b.c); // 2 (unchanged)
```
