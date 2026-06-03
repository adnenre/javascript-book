---
title: Set vs Array
sidebar:
  order: 8
  label: 17.2.2 Set vs Array
---

Sets and Arrays both store collections of values, but they serve different purposes. Understanding their differences helps you choose the right tool for the job.

### Comparison Table

| Feature             | Set                            | Array                      |
| ------------------- | ------------------------------ | -------------------------- |
| **Uniqueness**      | Automatic (no duplicates)      | Manual enforcement needed  |
| **Order**           | Insertion order                | Index order                |
| **Lookup by value** | O(1) with `has()`              | O(n) with `includes()`     |
| **Access by index** | Not available                  | O(1) with bracket notation |
| **Duplicates**      | Not allowed                    | Allowed                    |
| **Use case**        | Membership testing, uniqueness | Ordered lists, sequences   |

### When to Use Set

- Need to ensure uniqueness
- Frequent membership testing (`has()`)
- Eliminating duplicates from data
- Mathematical set operations (union, intersection)

### When to Use Array

- Need index-based access
- Need ordered sequence with positions
- Need duplicates
- Need built-in methods like `map`, `filter`, `reduce`
- Working with JSON APIs

### Performance Comparison

| Operation       | Set  | Array       |
| --------------- | ---- | ----------- |
| Add element     | O(1) | O(1) (push) |
| Lookup by value | O(1) | O(n)        |
| Delete element  | O(1) | O(n)        |
| Iteration       | O(n) | O(n)        |

### Key Points

- Sets are faster for membership testing on large collections.
- Arrays have more built-in transformation methods.
- Converting between Set and Array is easy.
- Use Set when uniqueness is important.
- Use Array when order and indexing matter.

### Example Code

```javascript
// Uniqueness: Set vs Array

// Set automatically handles uniqueness
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Ignored
console.log([...set]); // [1, 2]

// Array requires manual checks
const arr = [];
if (!arr.includes(1)) arr.push(1);
if (!arr.includes(2)) arr.push(2);
if (!arr.includes(1)) arr.push(1);
console.log(arr); // [1, 2]

// Performance: Membership testing

// Set is O(1) - fast
const largeSet = new Set(Array.from({ length: 10000 }, (_, i) => i));
console.time("Set has");
largeSet.has(5000);
console.timeEnd("Set has");

// Array is O(n) - slower for large arrays
const largeArr = Array.from({ length: 10000 }, (_, i) => i);
console.time("Array includes");
largeArr.includes(5000);
console.timeEnd("Array includes");

// Converting between Set and Array

// Array to Set (remove duplicates)
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueSet = new Set(numbers);
console.log([...uniqueSet]); // [1, 2, 3, 4, 5]

// Set to Array
const mySet = new Set(["a", "b", "c"]);
const myArray = [...mySet];
console.log(myArray); // ['a', 'b', 'c']

// Array.from() also works
const anotherArray = Array.from(mySet);
console.log(anotherArray); // ['a', 'b', 'c']

// Practical: Removing duplicates from array
const withDuplicates = [1, 2, 3, 2, 4, 3, 5, 1, 6];
const withoutDuplicates = [...new Set(withDuplicates)];
console.log(withoutDuplicates); // [1, 2, 3, 4, 5, 6]

// Access patterns

// Array: Index access
const fruitsArray = ["apple", "banana", "orange"];
console.log(fruitsArray[1]); // 'banana' (O(1))

// Set: No index access
const fruitsSet = new Set(["apple", "banana", "orange"]);
// console.log(fruitsSet[1]); // undefined (doesn't work)
console.log([...fruitsSet][1]); // 'banana' (convert first, O(n))

// Array methods vs Set methods

// Array includes (O(n))
const arrayHas = fruitsArray.includes("banana"); // true

// Set has (O(1))
const setHas = fruitsSet.has("banana"); // true

// Array deletion (O(n) - needs to find and shift)
const deleteFromArray = (arr, value) => {
  const index = arr.indexOf(value);
  if (index !== -1) arr.splice(index, 1);
  return arr;
};

// Set deletion (O(1))
fruitsSet.delete("banana");

// When to use Array (index-based operations)
const playlist = ["Song 1", "Song 2", "Song 3"];
const currentSong = playlist[1]; // Access by index
playlist.splice(1, 0, "New Song"); // Insert at position

// When to use Set (unique collection)
const visitedUrls = new Set();
visitedUrls.add("/home");
visitedUrls.add("/about");
visitedUrls.add("/home"); // Duplicate, ignored

if (visitedUrls.has("/about")) {
  console.log("Already visited about page");
}

// Hybrid approach: Use Set for uniqueness, convert to Array when needed
class UniqueList {
  constructor() {
    this.set = new Set();
  }

  add(item) {
    this.set.add(item);
    return this;
  }

  remove(item) {
    return this.set.delete(item);
  }

  has(item) {
    return this.set.has(item);
  }

  toArray() {
    return [...this.set];
  }

  // Array-like methods
  map(fn) {
    return this.toArray().map(fn);
  }

  filter(fn) {
    return this.toArray().filter(fn);
  }

  get size() {
    return this.set.size;
  }
}

const uniqueList = new UniqueList();
uniqueList.add("apple").add("banana").add("apple");
console.log(uniqueList.toArray()); // ['apple', 'banana']
console.log(uniqueList.size); // 2
console.log(uniqueList.map((fruit) => fruit.toUpperCase())); // ['APPLE', 'BANANA']

// Memory considerations
// Set typically uses more memory than Array for the same number of elements
// because it maintains hash tables for O(1) lookups

// Use case example: Tag system
class TagManager {
  constructor() {
    this.tags = new Set(); // No duplicate tags
  }

  addTag(tag) {
    this.tags.add(tag.toLowerCase());
  }

  removeTag(tag) {
    this.tags.delete(tag.toLowerCase());
  }

  hasTag(tag) {
    return this.tags.has(tag.toLowerCase());
  }

  getTags() {
    return [...this.tags].sort();
  }

  getTagCount() {
    return this.tags.size;
  }
}

const tags = new TagManager();
tags.addTag("JavaScript");
tags.addTag("React");
tags.addTag("JavaScript"); // Duplicate ignored
tags.addTag("Node.js");

console.log(tags.getTags()); // ['javascript', 'node.js', 'react']
console.log(tags.hasTag("React")); // true
console.log(tags.getTagCount()); // 3
```
