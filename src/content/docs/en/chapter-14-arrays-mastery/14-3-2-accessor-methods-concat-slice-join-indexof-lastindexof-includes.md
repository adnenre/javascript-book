---
title: Accessor Methods (concat, slice, join, indexOf, lastIndexOf, includes)
sidebar:
  order: 2
  label: 14.3.2 Accessor Methods (concat, slice, join, indexOf, lastIndexOf, includes)
---

Accessor methods do not modify the original array; they return a new array or a value derived from the array.

### Common Accessor Methods

| Method          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `concat()`      | Merges two or more arrays and returns a new array.               |
| `slice()`       | Extracts a portion of the array and returns a new array.         |
| `join()`        | Joins all elements into a string.                                |
| `indexOf()`     | Returns the first index where a value is found; -1 if not found. |
| `lastIndexOf()` | Returns the last index where a value is found.                   |
| `includes()`    | Checks if a value exists in the array.                           |

### Code Example

```javascript
const arr = [1, 2, 3, 4, 2];

const newArr = arr.concat([5, 6]); // [1,2,3,4,2,5,6]
const sliced = arr.slice(1, 4); // [2,3,4]
const str = arr.join("-"); // "1-2-3-4-2"

console.log(arr.indexOf(2)); // 1
console.log(arr.lastIndexOf(2)); // 4
console.log(arr.includes(3)); // true
console.log(arr.includes(5)); // false

// Original array unchanged
console.log(arr); // [1, 2, 3, 4, 2]
```
