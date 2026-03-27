---
title: Array Properties (length)
sidebar:
  order: 2
  label: 14.2 Array Properties (length)
---

The `length` property of an array returns the number of elements. It is a dynamic property; you can set it to truncate or extend the array. When you set a new length, the array is truncated or padded with empty slots.

### Key Points

- `length` is an unsigned 32‑bit integer.
- Setting `length` to a smaller value removes elements beyond the new length.
- Setting `length` to a larger value adds empty slots (sparse array).
- The highest indexed element plus one determines the length.

### Code Example

```javascript
const arr = [10, 20, 30, 40];
console.log(arr.length); // 4

// Truncate
arr.length = 2;
console.log(arr); // [10, 20]

// Extend (creates empty slots)
arr.length = 5;
console.log(arr); // [10, 20, empty × 3]

// Accessing beyond length returns undefined
console.log(arr[4]); // undefined
```
