---
title: Property Enumeration Order
sidebar:
  order: 8
  label: 10.8 Property Enumeration Order
---

The enumeration order of properties in modern JavaScript is: first numeric keys in ascending order, then string keys in insertion order, then Symbol keys in insertion order.

```javascript
const obj = { b: 2, 10: "ten", a: 1, 1: "one" };
console.log(Object.keys(obj)); // ['1', '10', 'b', 'a']
```
