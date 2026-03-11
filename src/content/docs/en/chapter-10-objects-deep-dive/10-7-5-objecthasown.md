---
title: Object.hasOwn()
sidebar:
  order: 5
  label: 10.7.5 Object.hasOwn()
---

Object.hasOwn() returns true if the specified property is a direct property of the object, not inherited. It is a safer alternative to hasOwnProperty().

```javascript
const obj = { a: 1 };
console.log(Object.hasOwn(obj, "a")); // true
console.log(Object.hasOwn(obj, "toString")); // false
```
