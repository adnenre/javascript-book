---
title: Array-Like Objects
sidebar:
  order: 5
  label: 14.5 Array-Like Objects
---

Array‑like objects are objects that have a `length` property and indexed elements but do not have array methods. Common examples include the `arguments` object, HTML collections (like `NodeList`), and strings. They can be converted to real arrays using `Array.from()` or `Array.prototype.slice.call()`.

### Key Points

- They have numeric indices and a `length` property.
- They do not inherit from `Array.prototype`, so they lack methods like `map`, `filter`.
- You can access elements using bracket notation.

### Code Example

```javascript
// An array-like object
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

console.log(arrayLike[0]); // "a"
console.log(arrayLike.length); // 3

// But cannot use array methods
// arrayLike.forEach is undefined

// Convert to array
const realArray = Array.from(arrayLike);
console.log(realArray); // ["a", "b", "c"]

// Alternative: slice
const anotherArray = Array.prototype.slice.call(arrayLike);
console.log(anotherArray); // ["a", "b", "c"]
```
