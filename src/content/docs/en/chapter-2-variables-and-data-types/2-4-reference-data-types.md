---
title: Reference Data Types
sidebar:
  order: 4
  label: 2.4 Reference Data Types
---

Reference types (also called objects) store **references** to values in memory. When you assign an object to a variable, the variable holds a reference (pointer) to the actual data, not the data itself.

Primitive types are compared by value; reference types are compared by reference.

```javascript
let a = { name: "Alice" };
let b = { name: "Alice" };
console.log(a === b); // false – different references
```

The main reference types are Object, Array, and Function. We'll cover them next.
