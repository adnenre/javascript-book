---
title: Grouping Array Elements
sidebar:
  order: 4
  label: 15.4 Grouping Array Elements
---

Grouping array elements by a certain criterion is a common operation. JavaScript provides `Object.groupBy()` and `Map.groupBy()` (ES2024) as built‑in methods to simplify grouping. Before these, grouping was often done with `reduce()`.

### Using `Object.groupBy()`

Groups elements by a key derived from the callback. Returns an object where keys are the grouping keys and values are arrays of elements.

```javascript
const fruits = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
];

const grouped = Object.groupBy(fruits, (item) => item.category);
console.log(grouped);
// {
//   fruit: [{ name: "apple", ... }, { name: "banana", ... }],
//   vegetable: [{ name: "carrot", ... }]
// }
```

### Using `Map.groupBy()`

Similar to `Object.groupBy()`, but returns a Map, which can preserve non‑string keys.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const byParity = Map.groupBy(numbers, (n) => (n % 2 === 0 ? "even" : "odd"));
console.log(byParity); // Map { "odd" => [1,3,5], "even" => [2,4,6] }
```

### Using `reduce()` for grouping (fallback)

```javascript
const groupedReduce = fruits.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});
console.log(groupedReduce);
```
