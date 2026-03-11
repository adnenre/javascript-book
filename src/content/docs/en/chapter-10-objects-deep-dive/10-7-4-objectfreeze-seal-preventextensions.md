---
title: Object.freeze(), seal(), preventExtensions()
sidebar:
  order: 4
  label: 10.7.4 Object.freeze(), seal(), preventExtensions()
---

- `Object.freeze()` makes an object immutable: cannot add, delete, or change properties.

- `Object.seal()` prevents adding or deleting properties, but existing properties can be changed.

- `Object.preventExtensions() `prevents adding new properties, but existing ones can be changed or deleted.

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // ignored or error
console.log(obj.a); // 1
```
