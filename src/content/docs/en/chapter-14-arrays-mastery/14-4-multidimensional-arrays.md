---
title: Multidimensional Arrays
sidebar:
  order: 4
  label: 14.4 Multidimensional Arrays
---

JavaScript does not have built‑in multidimensional arrays, but you can create arrays of arrays. These are often used for matrices, grids, or nested data structures. Access elements using multiple indices.

### Key Points

- Arrays are not true multidimensional; they are nested.
- Can be jagged (sub‑arrays can have different lengths).
- Use nested loops to iterate.

### Code Example

```javascript
// 2D array (3x3 matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 6

// Jagged array
const jagged = [[1, 2], [3, 4, 5], [6]];

// Iteration
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// Using forEach
matrix.forEach((row) => {
  row.forEach((cell) => console.log(cell));
});
```
