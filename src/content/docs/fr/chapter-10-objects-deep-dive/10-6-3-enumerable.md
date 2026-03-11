---
title: enumerable
sidebar:
  order: 3
  label: 10.6.3 enumerable
---

Si enumerable est true, la propriété apparaît dans les boucles for...in et Object.keys() ; sinon elle est masquée.

```javascript
const obj = {};
Object.defineProperty(obj, "cache", { value: 42, enumerable: false });
Object.defineProperty(obj, "visible", { value: 99, enumerable: true });
console.log(Object.keys(obj)); // ['visible']
```
