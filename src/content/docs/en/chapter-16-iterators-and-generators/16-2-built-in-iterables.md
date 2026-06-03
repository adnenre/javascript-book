---
title: Built-in Iterables
sidebar:
  order: 2
  label: 16.2 Built-in Iterables
---

JavaScript provides several built-in iterable data structures. Understanding what makes each iterable and what values they produce is essential for effective iteration.

### Complete List of Built-in Iterables

| Constructor       | Returns             | Iteration Value                 |
| ----------------- | ------------------- | ------------------------------- |
| `Array`           | Array iterator      | Elements in index order         |
| `String`          | String iterator     | Characters (UTF-16 code points) |
| `Map`             | Map iterator        | `[key, value]` pairs            |
| `Set`             | Set iterator        | Values in insertion order       |
| `TypedArray`      | TypedArray iterator | Numeric elements                |
| `arguments`       | Array-like iterator | Function arguments              |
| `NodeList`        | DOM iterator        | DOM elements                    |
| `HTMLCollection`  | DOM iterator        | DOM elements (live)             |
| `URLSearchParams` | Iterator            | `[name, value]` pairs           |

### Array Iterables

Arrays are the most common iterable. They iterate over elements in numeric index order.

### String Iterables

Strings iterate over characters. Unlike `charAt()`, string iterators respect Unicode code points (surrogate pairs are handled correctly).

### Map Iterables

Maps iterate over `[key, value]` pairs. The order follows insertion order. Maps also provide `keys()`, `values()`, and `entries()` methods that return different iterators.

### Set Iterables

Sets iterate over unique values in insertion order. They also provide `keys()`, `values()`, and `entries()` methods.

### Key Points

- All built-in iterables share the same protocol.
- Some iterables are **live** (NodeList reflects DOM changes) while others are **snapshots** (Array).
- Strings correctly handle Unicode characters beyond BMP.
- Map and Set iteration order is guaranteed to be insertion order.

### Example Code

```javascript
// Array iteration
const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log(item); // 'a', 'b', 'c'
}

// String iteration (Unicode safe)
const str = "Hello";
for (const char of str) {
  console.log(char); // 'H','e','l','l','o' (one log per character)
}

console.log([...str]); // ['H','e','l','l','o']

// Map iteration
const map = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["city", "Paris"],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// 'name: Alice', 'age: 30', 'city: Paris'

// Map specific iterators
for (const key of map.keys()) {
  console.log(key); // 'name', 'age', 'city'
}

for (const value of map.values()) {
  console.log(value); // 'Alice', 30, 'Paris'
}

// Set iteration
const set = new Set(["apple", "banana", "apple"]);
for (const fruit of set) {
  console.log(fruit); // 'apple', 'banana' (no duplicate)
}

// arguments object (function context)
function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4)); // 10
```
