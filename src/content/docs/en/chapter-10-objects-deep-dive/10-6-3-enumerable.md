---
title: enumerable
sidebar:
  order: 3
  label: 10.6.3 enumerable
---

If enumerable is true, the property appears in for...in loops and Object.keys(); otherwise it is hidden.

```javascript
const obj = {};
Object.defineProperty(obj, "hidden", { value: 42, enumerable: false });
Object.defineProperty(obj, "visible", { value: 99, enumerable: true });
console.log(Object.keys(obj)); // ['visible']
```
