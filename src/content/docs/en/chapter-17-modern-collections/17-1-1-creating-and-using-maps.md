---
title: Creating and Using Maps
sidebar:
  order: 2
  label: 17.1.1 Creating and Using Maps
---

Maps can be created in several ways and offer intuitive methods for managing key-value pairs.

### Creating Maps

| Method               | Description                        | Example                       |
| -------------------- | ---------------------------------- | ----------------------------- |
| **Empty Map**        | Create with no entries             | `new Map()`                   |
| **From iterable**    | Pass array of `[key, value]` pairs | `new Map([['a',1], ['b',2]])` |
| **From another Map** | Clone existing Map                 | `new Map(existingMap)`        |

### Basic Usage Pattern

```javascript
// Create
const map = new Map();

// Set values
map.set(key, value);

// Get values
const value = map.get(key);

// Check existence
const exists = map.has(key);

// Delete
map.delete(key);

// Clear all
map.clear();
```

### Key Points

- `set()` returns the Map object (allows chaining).
- `get()` returns `undefined` if key doesn't exist.
- `has()` returns boolean for key existence.
- `delete()` returns `true` if key existed and was deleted.
- `clear()` removes all entries.

### Example Code

```javascript
// Different ways to create Maps

// 1. Empty Map
const emptyMap = new Map();
console.log(emptyMap.size); // 0

// 2. From array of pairs
const userMap = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["city", "Paris"],
]);
console.log(userMap.size); // 3

// 3. From another Map (cloning)
const cloneMap = new Map(userMap);
console.log(cloneMap.get("name")); // 'Alice'

// 4. From generator
function* entries() {
  yield ["x", 10];
  yield ["y", 20];
  yield ["z", 30];
}
const genMap = new Map(entries());
console.log(genMap.get("y")); // 20

// Chaining set() calls
const chainMap = new Map().set("first", 1).set("second", 2).set("third", 3);

console.log(chainMap.size); // 3

// Using get() with non-existent key
console.log(chainMap.get("nonexistent")); // undefined

// Checking existence before access
if (chainMap.has("first")) {
  console.log(chainMap.get("first")); // 1
}

// Deleting entries
const inventory = new Map([
  ["apples", 10],
  ["bananas", 5],
  ["oranges", 8],
]);

console.log(inventory.delete("apples")); // true
console.log(inventory.delete("grapes")); // false
console.log(inventory.size); // 2

// Clearing all entries
inventory.clear();
console.log(inventory.size); // 0

// Practical: Caching with Map
function createCache() {
  const cache = new Map();

  return {
    get(key) {
      return cache.get(key);
    },
    set(key, value) {
      cache.set(key, value);
      console.log(`Cached: ${key}`);
      return value;
    },
    has(key) {
      return cache.has(key);
    },
    delete(key) {
      return cache.delete(key);
    },
    clear() {
      cache.clear();
    },
    size() {
      return cache.size;
    },
  };
}

const cache = createCache();
cache.set("user:1", { name: "Alice" });
cache.set("user:2", { name: "Bob" });
console.log(cache.get("user:1")); // { name: 'Alice' }
console.log(cache.has("user:2")); // true
console.log(cache.size()); // 2
```
