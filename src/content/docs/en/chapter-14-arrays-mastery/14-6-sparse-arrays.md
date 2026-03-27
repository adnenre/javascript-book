---
title: Sparse Arrays
sidebar:
  order: 6
  label: 14.6 Sparse Arrays
---

Sparse arrays are arrays with empty slots (holes) where no element exists. They occur when you create an array with a length larger than the number of elements, or when you delete an element with `delete`. Sparse arrays are not common in modern JavaScript; it’s better to avoid them because they behave inconsistently with iteration methods.

### Key Points

- Empty slots are different from `undefined` values.
- Most iteration methods (like `forEach`, `map`, `filter`) skip empty slots.
- Methods like `find` and `includes` treat empty slots as `undefined` in some cases.
- Use `Array.from()` to convert sparse arrays to dense (fill holes with `undefined`).

### Code Example

```javascript
// Creating sparse arrays
const sparse = [1, , 3]; // hole at index 1
console.log(sparse.length); // 3
console.log(sparse[1]); // undefined (but it's a hole)

const sparse2 = new Array(5); // empty array with length 5 (all holes)

// Deleting an element creates a hole
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, empty, 3]

// Iteration skips holes
arr.forEach((x) => console.log(x)); // 1, 3

// Converting to dense
const dense = Array.from(arr);
console.log(dense); // [1, undefined, 3]
```
