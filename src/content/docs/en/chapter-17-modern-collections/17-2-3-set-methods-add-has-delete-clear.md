---
title: Set Methods (add, has, delete, clear)
sidebar:
  order: 9
  label: 17.2.3 Set Methods (add, has, delete, clear)
---

Set provides a focused set of methods for managing collections of unique values. Understanding these methods is essential for effective Set usage.

### Method Reference

| Method   | Syntax              | Return Value | Description                       |
| -------- | ------------------- | ------------ | --------------------------------- |
| `add`    | `set.add(value)`    | Set object   | Adds value if not already present |
| `has`    | `set.has(value)`    | Boolean      | Checks if value exists            |
| `delete` | `set.delete(value)` | Boolean      | Removes value if exists           |
| `clear`  | `set.clear()`       | `undefined`  | Removes all values                |

### Add Method Details

The `add()` method:

- Adds a new value to the Set
- Does nothing if value already exists
- Returns the Set object (allows chaining)
- Uses SameValueZero algorithm for equality

### Has Method Details

The `has()` method:

- Returns `true` if value exists
- Returns `false` if value doesn't exist
- O(1) time complexity (very fast)
- Works with all value types

### Delete and Clear

- `delete()` removes a single value, returns success boolean
- `clear()` removes all values, no return value
- Deleting a non-existent value returns `false`

### Key Points

- All methods work with any value type (objects, primitives).
- `add()` returns the Set for method chaining.
- `has()` is O(1) - much faster than `array.includes()`.
- `delete()` returns boolean indicating if value was removed.
- Clearing a Set releases memory.

### Example Code

```javascript
// Basic add and has
const set = new Set();

set.add("apple");
set.add("banana");
set.add("apple"); // Duplicate, ignored

console.log(set.has("apple")); // true
console.log(set.has("banana")); // true
console.log(set.has("grape")); // false
console.log(set.size); // 2

// Chaining add() calls
set.add("orange").add("pear").add("apple"); // Duplicate, ignored

console.log(set); // Set {'apple', 'banana', 'orange', 'pear'}

// Using objects as values
const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };
const user3 = { id: 1, name: "Alice" }; // Different object

const userSet = new Set();
userSet.add(user1);
userSet.add(user2);
userSet.add(user1); // Same reference, ignored
userSet.add(user3); // Different reference, added

console.log(userSet.size); // 3 (user1, user2, user3 are all different)
console.log(userSet.has(user1)); // true
console.log(userSet.has({ id: 1, name: "Alice" })); // false (different object)

// NaN handling (SameValueZero)
const nanSet = new Set();
nanSet.add(NaN);
nanSet.add(NaN);
console.log(nanSet.size); // 1
console.log(nanSet.has(NaN)); // true

// -0 and +0 are considered equal
const zeroSet = new Set();
zeroSet.add(-0);
zeroSet.add(0);
console.log(zeroSet.size); // 1

// delete() method
const fruits = new Set(["apple", "banana", "orange", "grape"]);
console.log(fruits.delete("banana")); // true
console.log(fruits.delete("banana")); // false (already deleted)
console.log(fruits.has("banana")); // false
console.log(fruits.size); // 3

// delete() with objects
const objSet = new Set();
const obj = { x: 1 };
objSet.add(obj);
console.log(objSet.delete(obj)); // true
console.log(objSet.delete(obj)); // false

// clear() method
const tempSet = new Set([1, 2, 3, 4, 5]);
console.log(tempSet.size); // 5
tempSet.clear();
console.log(tempSet.size); // 0
console.log(tempSet.has(1)); // false

// Practical: Unique visitor tracker
class UniqueVisitorTracker {
  constructor() {
    this.visitors = new Set();
  }

  addVisitor(visitorId) {
    const isNew = !this.visitors.has(visitorId);
    this.visitors.add(visitorId);
    if (isNew) {
      console.log(`New visitor: ${visitorId}`);
    } else {
      console.log(`Returning visitor: ${visitorId}`);
    }
    return isNew;
  }

  hasVisited(visitorId) {
    return this.visitors.has(visitorId);
  }

  removeVisitor(visitorId) {
    const removed = this.visitors.delete(visitorId);
    if (removed) {
      console.log(`Visitor removed: ${visitorId}`);
    }
    return removed;
  }

  getUniqueCount() {
    return this.visitors.size;
  }

  clearAll() {
    this.visitors.clear();
    console.log("All visitors cleared");
  }
}

const tracker = new UniqueVisitorTracker();
tracker.addVisitor("user-1"); // New visitor: user-1
tracker.addVisitor("user-2"); // New visitor: user-2
tracker.addVisitor("user-1"); // Returning visitor: user-1
console.log(tracker.getUniqueCount()); // 2
console.log(tracker.hasVisited("user-2")); // true
tracker.removeVisitor("user-2"); // Visitor removed: user-2
console.log(tracker.getUniqueCount()); // 1

// Practical: Allowed list (whitelist)
class Whitelist {
  constructor() {
    this.allowed = new Set();
  }

  add(item) {
    this.allowed.add(item);
  }

  remove(item) {
    return this.allowed.delete(item);
  }

  isAllowed(item) {
    return this.allowed.has(item);
  }

  addMany(items) {
    for (const item of items) {
      this.allowed.add(item);
    }
  }

  clear() {
    this.allowed.clear();
  }

  list() {
    return [...this.allowed];
  }
}

const whitelist = new Whitelist();
whitelist.add("alice@example.com");
whitelist.add("bob@example.com");
whitelist.addMany(["charlie@example.com", "diana@example.com"]);

console.log(whitelist.isAllowed("bob@example.com")); // true
console.log(whitelist.isAllowed("eve@example.com")); // false
console.log(whitelist.list()); // ['alice@example.com', 'bob@example.com', ...]

// Batch operations with Set methods
const mainSet = new Set([1, 2, 3, 4, 5]);

// Add multiple values
[6, 7, 8, 9, 10].forEach((v) => mainSet.add(v));
console.log(mainSet.size); // 10

// Delete multiple values
[2, 4, 6, 8].forEach((v) => mainSet.delete(v));
console.log(mainSet); // Set {1, 3, 5, 7, 9, 10}

// Check multiple values
const toCheck = [1, 2, 3, 4, 5];
const results = toCheck.map((v) => ({ value: v, exists: mainSet.has(v) }));
console.log(results);
// [
//   { value: 1, exists: true },
//   { value: 2, exists: false },
//   { value: 3, exists: true },
//   { value: 4, exists: false },
//   { value: 5, exists: true }
// ]
```
