---
title: Implementing Custom Array Methods
sidebar:
  order: 8
  label: 15.8 Implementing Custom Array Methods
---

You can extend the Array prototype or create utility functions that mimic array methods. This helps understand how built‑in methods work internally and allows you to add missing functionality.

### Extending `Array.prototype` (not recommended in libraries)

```javascript
// Custom `sum` method
if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0);
  };
}
const nums = [1, 2, 3];
console.log(nums.sum()); // 6
```

### Creating a standalone function

```javascript
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      // skip holes
      result.push(callback(arr[i], i, arr));
    }
  }
  return result;
}
const doubled = customMap([1, 2, 3], (x) => x * 2);
console.log(doubled); // [2, 4, 6]
```

### Implementing `filter`

```javascript
function customFilter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const evens = customFilter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(evens); // [2, 4]
```

### Implementing `reduce`

```javascript
function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length === 2) {
    // No initialValue provided
    while (startIndex < arr.length && !(startIndex in arr)) {
      startIndex++;
    }
    if (startIndex >= arr.length) throw new TypeError("Reduce of empty array with no initial value");
    accumulator = arr[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = reducer(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}
const sum = customReduce([1, 2, 3], (acc, val) => acc + val, 0);
console.log(sum); // 6
```

### Important Notes

- When extending prototypes, use `Object.defineProperty` to make properties non‑enumerable.
- Always check for existing methods to avoid collisions.
- Consider using standalone functions for better compatibility.
