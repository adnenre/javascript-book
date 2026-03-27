---
title: Immutable Array Operations
sidebar:
  order: 7
  label: 15.7 Immutable Array Operations
---

Immutable operations do not modify the original array but return a new array with the changes. This pattern is important in functional programming and state management (e.g., Redux). JavaScript provides many methods that naturally return new arrays.

### Key Concepts

- **Mutating methods** (e.g., `push`, `pop`, `sort`) modify the original array.
- **Immutable alternatives** create a copy first or use non‑mutating methods.

### Common Immutable Operations

```javascript
const original = [1, 2, 3, 4];

// Adding elements (immutable)
const withAdded = [...original, 5]; // [1,2,3,4,5]
const withAddedFront = [0, ...original]; // [0,1,2,3,4]

// Removing elements
const withoutLast = original.slice(0, -1); // [1,2,3]
const withoutFirst = original.slice(1); // [2,3,4]
const withoutIndex = [...original.slice(0, 2), ...original.slice(3)]; // [1,2,4]

// Updating an element
const updated = original.map((val, i) => (i === 2 ? 99 : val)); // [1,2,99,4]

// Sorting immutably
const sorted = [...original].sort((a, b) => b - a); // [4,3,2,1]

// Reversing immutably
const reversed = [...original].reverse(); // [4,3,2,1]

// Using `toSorted`, `toReversed`, `toSpliced` (ES2023)
const toSorted = original.toSorted((a, b) => a - b); // [1,2,3,4]
const toReversed = original.toReversed(); // [4,3,2,1]
const toSpliced = original.toSpliced(1, 2, 99); // [1,99,4]
```

### ES2023 Immutable Methods

- `toSorted()` – returns a sorted new array
- `toReversed()` – returns a reversed new array
- `toSpliced()` – returns a new array with splice operation
- `with()` – returns a new array with an element replaced at a given index

```javascript
const arr = [1, 2, 3, 4];
const newArr = arr.with(2, 99); // [1,2,99,4]
console.log(arr); // unchanged [1,2,3,4]
```
