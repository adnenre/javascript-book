---
title: Array Methods Categories
sidebar:
  order: 3
  label: 14.3 Array Methods Categories
---

Array methods in JavaScript are grouped into three categories based on their behavior:

- **Mutator methods** – modify the original array (e.g., `push`, `pop`, `splice`).
- **Accessor methods** – return a new value or a new array without modifying the original (e.g., `concat`, `slice`, `includes`).
- **Iteration methods** – iterate over array elements and perform operations (e.g., `forEach`, `map`, `filter`, `reduce`).

### Code Example

```javascript
const arr = [1, 2, 3];

// Mutator (changes original)
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// Accessor (returns new array)
const newArr = arr.slice(1, 3);
console.log(newArr); // [2, 3]
console.log(arr); // unchanged [1, 2, 3, 4]

// Iteration (does not mutate)
arr.forEach((x) => console.log(x * 2)); // 2,4,6,8
```
