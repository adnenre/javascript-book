---
title: value
sidebar:
  order: 1
  label: 10.6.1 value
---

The value property holds the actual value of the property.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 42 });
console.log(obj.x); // 42
```
