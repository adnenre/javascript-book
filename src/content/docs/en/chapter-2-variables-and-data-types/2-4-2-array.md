---
title: Array
sidebar:
  order: 2
  label: 2.4.2 Array
---

Arrays are ordered, integer‑indexed collections. They can hold values of any type, including mixed types.

**Creating arrays**:

```javascript
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "two", { three: 3 }, [4, 5]];
let empty = new Array(10); // sparse array of length 10
```

Accessing elements:

```javascript
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3
```

Common methods:

push(), pop() – add/remove at end.

shift(), unshift() – add/remove at beginning.

splice() – add/remove at any position.

slice() – extract a portion.

indexOf(), includes() – search.

forEach(), map(), filter(), reduce() – iteration.

```javascript
fruits.push("mango"); // ['apple','banana','orange','mango']
let citrus = fruits.slice(1, 3); // ['banana','orange']
```

Arrays are objects, so they are also passed by reference.
