---
title: Map Methods (set, get, has, delete, clear)
sidebar:
  order: 4
  label: 17.1.3 Map Methods (set, get, has, delete, clear)
---

Map provides a comprehensive set of methods for managing key-value pairs. Understanding each method's behavior is crucial for effective Map usage.

### Method Reference

| Method   | Syntax                | Return Value         | Description             |
| -------- | --------------------- | -------------------- | ----------------------- |
| `set`    | `map.set(key, value)` | Map object           | Adds or updates entry   |
| `get`    | `map.get(key)`        | Value or `undefined` | Retrieves value by key  |
| `has`    | `map.has(key)`        | Boolean              | Checks key existence    |
| `delete` | `map.delete(key)`     | Boolean              | Removes entry if exists |
| `clear`  | `map.clear()`         | `undefined`          | Removes all entries     |

### Set Method Details

The `set()` method:

- Adds a new key-value pair
- Updates existing key if it already exists
- Returns the Map object (allows chaining)
- Uses SameValueZero algorithm for key equality

### Get Method Details

The `get()` method:

- Returns the value associated with the key
- Returns `undefined` if key doesn't exist
- `undefined` can also be a stored value (use `has()` to check)

### Has Method Details

The `has()` method:

- Returns `true` if key exists
- Returns `false` if key doesn't exist
- Useful before `get()` to avoid ambiguity with stored `undefined`

### Delete and Clear

- `delete()` removes a single entry, returns success boolean
- `clear()` removes all entries, no return value

### Key Points

- All methods work with any key type (including objects).
- `set()` returns the Map for method chaining.
- `get()` returning `undefined` doesn't mean the key is missing.
- `has()` is O(1) operation (very fast).
- Clearing a large Map is memory-efficient.

### Example Code

```javascript
// Basic set and get
const map = new Map();

map.set("name", "Alice");
map.set("age", 30);
map.set("city", "Paris");

console.log(map.get("name")); // 'Alice'
console.log(map.get("age")); // 30
console.log(map.get("city")); // 'Paris'
console.log(map.get("country")); // undefined

// Chaining set() calls
map.set("x", 10).set("y", 20).set("z", 30);

console.log(map.get("x")); // 10
console.log(map.get("y")); // 20
console.log(map.get("z")); // 30

// Using objects as keys
const user1 = { id: 1 };
const user2 = { id: 2 };

map.set(user1, "User One");
map.set(user2, "User Two");

console.log(map.get(user1)); // 'User One'
console.log(map.get(user2)); // 'User Two'

// NaN as key (SameValueZero algorithm)
map.set(NaN, "Not a number");
console.log(map.get(NaN)); // 'Not a number'

// has() method
const inventory = new Map([
  ["apples", 10],
  ["bananas", 5],
  ["oranges", 0], // Zero is a valid value
]);

console.log(inventory.has("apples")); // true
console.log(inventory.has("grapes")); // false
console.log(inventory.has("oranges")); // true (key exists, even with value 0)

// Distinguishing between missing key and undefined value
const ambiguousMap = new Map();
ambiguousMap.set("exists", undefined);

console.log(ambiguousMap.get("missing")); // undefined
console.log(ambiguousMap.get("exists")); // undefined

// Use has() to know the difference
console.log(ambiguousMap.has("missing")); // false
console.log(ambiguousMap.has("exists")); // true

// delete() method
const sessionMap = new Map([
  ["session1", { user: "Alice" }],
  ["session2", { user: "Bob" }],
  ["session3", { user: "Charlie" }],
]);

console.log(sessionMap.delete("session2")); // true
console.log(sessionMap.delete("session2")); // false (already deleted)
console.log(sessionMap.size); // 2

// clear() method
const tempMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(tempMap.size); // 3
tempMap.clear();
console.log(tempMap.size); // 0
console.log(tempMap.get("a")); // undefined

// Practical example: Shopping cart
class ShoppingCart {
  constructor() {
    this.items = new Map();
  }

  addItem(id, name, price, quantity = 1) {
    if (this.items.has(id)) {
      const item = this.items.get(id);
      item.quantity += quantity;
      this.items.set(id, item);
    } else {
      this.items.set(id, { name, price, quantity });
    }
    return this; // Allow chaining
  }

  removeItem(id) {
    return this.items.delete(id);
  }

  getItem(id) {
    return this.items.get(id);
  }

  hasItem(id) {
    return this.items.has(id);
  }

  getTotal() {
    let total = 0;
    for (const [, { price, quantity }] of this.items) {
      total += price * quantity;
    }
    return total;
  }

  clear() {
    this.items.clear();
  }

  getCount() {
    return this.items.size;
  }
}

const cart = new ShoppingCart();
cart.addItem("p1", "Laptop", 999.99).addItem("p2", "Mouse", 29.99).addItem("p1", "Laptop", 999.99, 1); // Add second laptop

console.log(cart.getItem("p1")); // { name: 'Laptop', price: 999.99, quantity: 2 }
console.log(cart.getTotal()); // 2029.97
console.log(cart.hasItem("p2")); // true
console.log(cart.removeItem("p2")); // true
console.log(cart.getCount()); // 1
cart.clear();
console.log(cart.getCount()); // 0

// Batch operations
const batchMap = new Map();
const updates = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
];

// Batch set using loop
for (const [key, value] of updates) {
  batchMap.set(key, value);
}

console.log(batchMap.size); // 3

// Checking multiple keys
const keysToCheck = ["key1", "key2", "key4"];
const results = keysToCheck.map((key) => ({ key, exists: batchMap.has(key) }));
console.log(results);
// [{ key: 'key1', exists: true }, { key: 'key2', exists: true }, { key: 'key4', exists: false }]
```
