---
title: Creating and Using Sets
sidebar:
  order: 7
  label: 17.2.1 Creating and Using Sets
---

Sets provide intuitive methods for managing collections of unique values. Understanding how to create and manipulate Sets is essential for effective usage.

### Creating Sets

| Method               | Description                | Example                |
| -------------------- | -------------------------- | ---------------------- |
| **Empty Set**        | Create with no values      | `new Set()`            |
| **From iterable**    | Pass array or any iterable | `new Set([1,2,3])`     |
| **From another Set** | Clone existing Set         | `new Set(existingSet)` |
| **From string**      | Characters become elements | `new Set('hello')`     |

### Basic Usage Pattern

```javascript
// Create
const set = new Set();

// Add values
set.add(value);

// Check existence
const exists = set.has(value);

// Delete value
set.delete(value);

// Clear all
set.clear();
```

### Key Points

- `add()` returns the Set object (allows chaining).
- `add()` does nothing if value already exists.
- `has()` returns boolean in O(1) time.
- `delete()` returns `true` if value existed.
- `clear()` removes all values.

### Example Code

```javascript
// Different ways to create Sets

// 1. Empty Set
const emptySet = new Set();
console.log(emptySet.size); // 0

// 2. From array
const colors = new Set(["red", "green", "blue", "red"]);
console.log(colors); // Set {'red', 'green', 'blue'}
console.log(colors.size); // 3

// 3. From another Set (cloning)
const original = new Set([1, 2, 3]);
const clone = new Set(original);
console.log(clone); // Set {1, 2, 3}

// 4. From generator
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 2;
  yield 3;
}
const genSet = new Set(generateNumbers());
console.log(genSet); // Set {1, 2, 3}

// 5. From NodeList (DOM)
// const divs = new Set(document.querySelectorAll('div'));

// Chaining add() calls
const chainSet = new Set()
  .add("apple")
  .add("banana")
  .add("apple") // Duplicate, ignored
  .add("orange");

console.log(chainSet); // Set {'apple', 'banana', 'orange'}

// has() method
const fruits = new Set(["apple", "banana", "orange"]);
console.log(fruits.has("apple")); // true
console.log(fruits.has("grape")); // false

// delete() method
console.log(fruits.delete("banana")); // true
console.log(fruits.delete("banana")); // false (already deleted)
console.log(fruits.size); // 2

// clear() method
const tempSet = new Set([1, 2, 3]);
console.log(tempSet.size); // 3
tempSet.clear();
console.log(tempSet.size); // 0

// Practical: Unique ID tracker
class UniqueIDTracker {
  constructor() {
    this.ids = new Set();
  }

  addID(id) {
    if (this.ids.has(id)) {
      console.log(`ID ${id} already exists`);
      return false;
    }
    this.ids.add(id);
    console.log(`ID ${id} added`);
    return true;
  }

  hasID(id) {
    return this.ids.has(id);
  }

  removeID(id) {
    return this.ids.delete(id);
  }

  get count() {
    return this.ids.size;
  }

  clear() {
    this.ids.clear();
  }
}

const tracker = new UniqueIDTracker();
tracker.addID("usr-001"); // ID usr-001 added
tracker.addID("usr-002"); // ID usr-002 added
tracker.addID("usr-001"); // ID usr-001 already exists
console.log(tracker.hasID("usr-002")); // true
console.log(tracker.count); // 2
tracker.removeID("usr-002");
console.log(tracker.count); // 1
```
