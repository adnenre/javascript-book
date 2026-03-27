---
title: Sorting Custom Objects
sidebar:
  order: 3
  label: 15.3 Sorting Custom Objects
---

The `sort()` method sorts array elements in place and returns the sorted array. By default, it sorts elements as strings. To sort numbers or objects, you must provide a compare function.

### Compare Function

The compare function takes two arguments `a` and `b` and returns:

- `< 0` if `a` should come before `b`
- `0` if `a` and `b` are equal
- `> 0` if `a` should come after `b`

### Code Example

```javascript
// Sorting numbers correctly
const numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 25, 40]

// Sorting objects by property
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Sort by age ascending
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// Sort by name alphabetically
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
// [{ name: "Alice", ... }, { name: "Bob", ... }, { name: "Charlie", ... }]

// Multi-level sorting: by age, then by name
const users2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
users2.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.name.localeCompare(b.name);
});
console.log(users2);
// Bob (25), Alice (30), Charlie (30)
```
