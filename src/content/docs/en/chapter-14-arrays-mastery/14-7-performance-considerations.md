---
title: Performance Considerations
sidebar:
  order: 7
  label: 14.7 Performance Considerations
---

When working with arrays, performance can vary depending on the operations you perform. Understanding how JavaScript engines optimize array operations can help you write efficient code.

### Key Points

- **Preallocate length** when you know the size to avoid dynamic resizing costs.
- **Mutator methods** modify in place and are usually faster than creating new arrays.
- **Avoid sparse arrays** – they are slower and have inconsistent behavior.
- **Use `for` loops** instead of `forEach` when performance is critical (though modern engines optimize both well).
- **Avoid `delete`** – it leaves holes; use `splice` or set to `undefined`.
- **Typed arrays** (Uint8Array, etc.) offer better performance for numeric data.
- **`slice` and `concat`** create shallow copies; be mindful of memory usage.

### Code Example

```javascript
// Preallocation
const size = 1000000;
const arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = i;
}

// Mutator vs. accessor
const numbers = [1, 2, 3, 4, 5];
// Fast: in-place reverse
numbers.reverse();

// Slower: creates new array
const reversed = numbers.slice().reverse();

// Avoid sparse arrays
const dense = Array.from({ length: 10000 }, (_, i) => i);
// instead of sparse = new Array(10000); then assign individual indices

// Use typed arrays for heavy numeric work
const typed = new Float64Array(10000);
for (let i = 0; i < typed.length; i++) {
  typed[i] = Math.random();
}
```
