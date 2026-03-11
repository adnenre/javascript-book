---
title: Object.defineProperty()
sidebar:
  order: 6
  label: 10.7.6 Object.defineProperty()
---

Object.defineProperty() defines a new property or modifies an existing one with a given descriptor.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
console.log(obj.x); // 10
```
