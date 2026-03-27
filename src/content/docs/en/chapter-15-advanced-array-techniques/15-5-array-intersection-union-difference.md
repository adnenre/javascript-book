---
title: Array Intersection, Union, Difference
sidebar:
  order: 5
  label: 15.5 Array Intersection, Union, Difference
---

Set operations on arrays can be implemented using combinations of `filter`, `includes`, and `Set` objects. When dealing with large arrays, `Set` provides O(n) performance.

### Intersection (common elements)

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection = arr1.filter((x) => arr2.includes(x));
console.log(intersection); // [3, 4]

// Using Set for efficiency
const set2 = new Set(arr2);
const intersectionSet = arr1.filter((x) => set2.has(x));
console.log(intersectionSet); // [3, 4]
```

### Union (all unique elements from both arrays)

```javascript
const union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4, 5, 6]
```

### Difference (elements in arr1 but not in arr2)

```javascript
const difference = arr1.filter((x) => !arr2.includes(x));
console.log(difference); // [1, 2]

// Using Set
const set2ForDiff = new Set(arr2);
const differenceSet = arr1.filter((x) => !set2ForDiff.has(x));
console.log(differenceSet); // [1, 2]
```

### Symmetric Difference (elements in either, but not both)

```javascript
const symDiff = [...arr1.filter((x) => !arr2.includes(x)), ...arr2.filter((x) => !arr1.includes(x))];
console.log(symDiff); // [1, 2, 5, 6]
```

### Using Set for all operations (with duplicates removal)

```javascript
// For arrays with potential duplicates, consider preserving duplicates or using Set logic.
```
