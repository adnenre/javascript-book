---
title: Converting to Arrays
sidebar:
  order: 3
  label: 14.5.3 Converting to Arrays
---

You often need to convert array‑like objects or iterables into true arrays to use array methods. The most common ways are `Array.from()`, the spread operator (`...`), and `Array.prototype.slice.call()`.

### Key Points

- `Array.from(arrayLike, mapFn)` – converts and optionally maps.
- Spread operator `[...arrayLike]` – works on iterables.
- `Array.prototype.slice.call(arrayLike)` – old‑style conversion.

### Code Example

```javascript
// Array-like object
const arrayLike = { 0: "a", 1: "b", length: 2 };

// Method 1: Array.from
const arr1 = Array.from(arrayLike);
console.log(arr1); // ["a", "b"]

// With mapping function
const arrMapped = Array.from(arrayLike, (x) => x.toUpperCase());
console.log(arrMapped); // ["A", "B"]

// Method 2: Spread operator (requires iterable)
// For array-like, must be iterable (array-like are not iterable by default)
// But works on NodeList, arguments, etc.
const nodeList = document.querySelectorAll("div");
const arr2 = [...nodeList];

// Method 3: slice
const arr3 = Array.prototype.slice.call(arrayLike);
console.log(arr3); // ["a", "b"]
```
