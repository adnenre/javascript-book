---
title: Flattening Arrays (flat, flatMap)
sidebar:
  order: 2
  label: 15.2 Flattening Arrays (flat, flatMap)
---

ES2019 introduced `Array.prototype.flat()` and `Array.prototype.flatMap()` to simplify working with nested arrays.

### `flat()`

Flattens nested arrays up to a specified depth. The default depth is 1. It returns a new array with sub‑array elements concatenated.

```javascript
const nested = [1, [2, [3, [4]]]];
console.log(nested.flat()); // [1, 2, [3, [4]]]
console.log(nested.flat(2)); // [1, 2, 3, [4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
```

### `flatMap()`

First maps each element using a mapping function, then flattens the result by one level. It is equivalent to `map().flat(1)`, but more efficient.

```javascript
const words = ["hello", "world"];
const letters = words.flatMap((word) => word.split(""));
console.log(letters); // ["h","e","l","l","o","w","o","r","l","d"]

// Map and filter in one pass
const numbers = [1, 2, 3, 4];
const doubledEven = numbers.flatMap((n) => (n % 2 === 0 ? [n * 2] : []));
console.log(doubledEven); // [4, 8]
```

### Key Points

- `flat()` removes empty slots in arrays (makes them dense).
- `flatMap()` is ideal for mapping to multiple values or filtering with mapping.
