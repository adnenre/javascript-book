---
title: Creating Arrays
sidebar:
  order: 1
  label: 14.1 Creating Arrays
---

Arrays in JavaScript are used to store ordered collections of values. They can be created using array literals, the `Array` constructor, or static methods like `Array.from()` and `Array.of()`.

### Key Points

- Array literals: `[]` with comma‑separated values.
- `Array` constructor: `new Array(length)` or `new Array(elements)`.
- `Array.of()`: creates an array from arguments, avoiding the single‑number special case.
- `Array.from()`: creates an array from array‑like or iterable objects.

### Code Example

```javascript
// Array literal
const fruits = ["apple", "banana", "cherry"];

// Array constructor
const numbers = new Array(5); // empty array with length 5
const colors = new Array("red", "blue"); // ["red", "blue"]

// Array.of() – avoids single‑number trap
const arr1 = Array.of(7); // [7]
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]

// Array.from() – from string or array-like
const chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const fromSet = Array.from(new Set([1, 2, 3])); // [1, 2, 3]
```
