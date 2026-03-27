---
title: Mutator Methods (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)
sidebar:
  order: 1
  label: 14.3.1 Mutator Methods (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)
---

Mutator methods modify the original array. They are used to add, remove, reorder, or fill elements in place.

### Common Mutator Methods

| Method         | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `push()`       | Adds one or more elements to the end. Returns new length.           |
| `pop()`        | Removes the last element. Returns removed element.                  |
| `shift()`      | Removes the first element. Returns removed element.                 |
| `unshift()`    | Adds one or more elements to the beginning. Returns new length.     |
| `splice()`     | Adds, removes, or replaces elements at a specified index.           |
| `sort()`       | Sorts the array in place (optionally with compare function).        |
| `reverse()`    | Reverses the order of elements in place.                            |
| `fill()`       | Fills a range of elements with a static value.                      |
| `copyWithin()` | Copies a sequence of elements to another position within the array. |

### Code Example

```javascript
let arr = [1, 2, 3, 4];

arr.push(5); // arr = [1, 2, 3, 4, 5]
arr.pop(); // arr = [1, 2, 3, 4]
arr.unshift(0); // arr = [0, 1, 2, 3, 4]
arr.shift(); // arr = [1, 2, 3, 4]

arr.splice(1, 2, "a", "b"); // arr = [1, 'a', 'b', 4]
arr.sort(); // arr = [1, 4, 'a', 'b'] (lexicographic)
arr.reverse(); // arr = ['b', 'a', 4, 1]

arr.fill(0, 1, 3); // arr = ['b', 0, 0, 1]
arr.copyWithin(0, 2, 4); // arr = [0, 1, 0, 1]
```
