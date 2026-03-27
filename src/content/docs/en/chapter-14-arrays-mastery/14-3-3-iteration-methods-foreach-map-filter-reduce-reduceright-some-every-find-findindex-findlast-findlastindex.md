---
title: Iteration Methods (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)
sidebar:
  order: 3
  label: 14.3.3 Iteration Methods (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)
---

Iteration methods traverse the array and execute a function for each element. They can produce a new array, a single value, or a boolean.

### Common Iteration Methods

| Method            | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `forEach()`       | Executes a function for each element.                                        |
| `map()`           | Creates a new array with the results of calling a function on every element. |
| `filter()`        | Creates a new array with elements that pass a test.                          |
| `reduce()`        | Reduces the array to a single value by accumulating left to right.           |
| `reduceRight()`   | Same as reduce but from right to left.                                       |
| `some()`          | Returns true if at least one element passes the test.                        |
| `every()`         | Returns true if all elements pass the test.                                  |
| `find()`          | Returns the first element that passes the test.                              |
| `findIndex()`     | Returns the index of the first element that passes the test.                 |
| `findLast()`      | Returns the last element that passes the test (ES2023).                      |
| `findLastIndex()` | Returns the index of the last element that passes the test (ES2023).         |

### Code Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((n) => console.log(n * 2)); // 2,4,6,8,10

// map
const doubled = numbers.map((n) => n * 2); // [2,4,6,8,10]

// filter
const evens = numbers.filter((n) => n % 2 === 0); // [2,4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// some/every
console.log(numbers.some((n) => n > 4)); // true
console.log(numbers.every((n) => n > 0)); // true

// find/findIndex
const firstLarge = numbers.find((n) => n > 3); // 4
const indexLarge = numbers.findIndex((n) => n > 3); // 3

// findLast/findLastIndex (ES2023)
const lastLarge = numbers.findLast((n) => n > 3); // 5
const lastIndex = numbers.findLastIndex((n) => n > 3); // 4
```
