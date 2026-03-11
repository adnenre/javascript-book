---
title: value
sidebar:
  order: 1
  label: 10.6.1 value
---

La propriété value contient la valeur effective de la propriété.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 42 });
console.log(obj.x); // 42
```
