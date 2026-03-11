---
title: Object.keys(), values(), entries()
sidebar:
  order: 3
  label: 10.7.3 Object.keys(), values(), entries()
---

These methods return arrays of an object’s own enumerable property keys, values, and key‑value pairs, respectively.

```javascript
const user = { name: "Alice", age: 30 };
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['Alice', 30]
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 30]]
```
