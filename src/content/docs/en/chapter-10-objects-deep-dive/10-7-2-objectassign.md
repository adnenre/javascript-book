---
title: Object.assign()
sidebar:
  order: 2
  label: 10.7.2 Object.assign()
---

Object.assign() copies enumerable own properties from source objects to a target object.

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```
