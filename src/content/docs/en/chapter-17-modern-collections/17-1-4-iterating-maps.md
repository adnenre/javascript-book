---
title: Iterating Maps
sidebar:
  order: 5
  label: 17.1.4 Iterating Maps
---

Maps provide several built-in iteration methods that make traversing key-value pairs simple and efficient. Unlike objects, Maps are directly iterable and preserve insertion order.

### Iteration Methods

| Method          | Returns                    | Iterates over             |
| --------------- | -------------------------- | ------------------------- |
| `map.keys()`    | Iterator of keys           | Keys in insertion order   |
| `map.values()`  | Iterator of values         | Values in insertion order |
| `map.entries()` | Iterator of `[key, value]` | Key-value pairs           |
| `map.forEach()` | Callback function          | Key-value pairs           |

### Direct Iteration

Maps are iterable by default (same as `map.entries()`):

```javascript
for (const [key, value] of map) {
  // Iterates over [key, value] pairs
}
```

### Key Points

- Iteration order follows insertion order.
- Maps are iterable directly without calling a method.
- `forEach()` callback receives `(value, key, map)`.
- The iterator returned by `keys()`, `values()`, `entries()` is lazy.
- You can convert iterators to arrays with spread or `Array.from()`.

### Example Code

```javascript
// Creating a sample map
const userMap = new Map([
  ["Alice", { age: 30, city: "Paris" }],
  ["Bob", { age: 25, city: "London" }],
  ["Charlie", { age: 35, city: "Berlin" }],
]);

// 1. Using for...of (direct iteration)
console.log("Direct iteration:");
for (const [key, value] of userMap) {
  console.log(`${key}:`, value);
}

// 2. Using entries() method
console.log("\nUsing entries():");
for (const [key, value] of userMap.entries()) {
  console.log(`${key}: ${value.age} years old`);
}

// 3. Using keys() method
console.log("\nIterating keys only:");
for (const key of userMap.keys()) {
  console.log(`Key: ${key}`);
}

// 4. Using values() method
console.log("\nIterating values only:");
for (const value of userMap.values()) {
  console.log(`Age: ${value.age}, City: ${value.city}`);
}

// 5. Using forEach
console.log("\nUsing forEach:");
userMap.forEach((value, key, map) => {
  console.log(`${key} lives in ${value.city}`);
  // Third parameter gives access to the original map
  console.log(`Map size: ${map.size}`);
});

// Converting to arrays
const keys = [...userMap.keys()];
console.log(keys); // ['Alice', 'Bob', 'Charlie']

const values = Array.from(userMap.values());
console.log(values); // [{ age: 30, city: 'Paris' }, ...]

const entries = [...userMap.entries()];
console.log(entries); // [['Alice', {...}], ['Bob', {...}], ...]

// Destructuring during iteration
const fruits = new Map([
  ["apple", 10],
  ["banana", 5],
  ["orange", 8],
]);

for (const [fruit, count] of fruits) {
  console.log(`We have ${count} ${fruit}s`);
}

// Practical example: Shopping cart iteration
class ShoppingCart {
  constructor() {
    this.items = new Map();
  }

  addItem(id, name, price, quantity = 1) {
    if (this.items.has(id)) {
      const item = this.items.get(id);
      item.quantity += quantity;
    } else {
      this.items.set(id, { name, price, quantity });
    }
    return this;
  }

  printReceipt() {
    console.log("RECEIPT:");
    let total = 0;

    // Using forEach
    this.items.forEach((item, id) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      console.log(`${item.name} x${item.quantity} = $${subtotal}`);
    });

    console.log(`TOTAL: $${total}`);
  }

  getInventoryReport() {
    const report = [];

    // Using for...of with destructuring
    for (const [id, { name, quantity, price }] of this.items) {
      report.push({
        id,
        name,
        quantity,
        price,
        value: quantity * price,
      });
    }

    return report;
  }
}

const cart = new ShoppingCart();
cart.addItem("p1", "Laptop", 999.99, 1).addItem("p2", "Mouse", 29.99, 2).addItem("p3", "Keyboard", 79.99, 1);

cart.printReceipt();
console.log(cart.getInventoryReport());

// Iterating with break condition (using for...of)
const scores = new Map([
  ["Alice", 95],
  ["Bob", 87],
  ["Charlie", 92],
  ["Diana", 88],
]);

// Find first score above 90
for (const [name, score] of scores) {
  if (score > 90) {
    console.log(`First high scorer: ${name} with ${score}`);
    break;
  }
}

// Filtering during iteration
const highScorers = [];
for (const [name, score] of scores) {
  if (score >= 90) {
    highScorers.push({ name, score });
  }
}
console.log(highScorers);

// Transforming Map using iteration
const doubledValues = new Map();
for (const [key, value] of scores) {
  doubledValues.set(key, value * 2);
}
console.log(doubledValues);

// Using spread with Map iteration
const upperCaseKeys = new Map([...scores.entries()].map(([key, value]) => [key.toUpperCase(), value]));
console.log(upperCaseKeys);

// Chaining iterations
const result = [...scores].filter(([_, score]) => score >= 90).map(([name, score]) => `${name}: ${score}`);
console.log(result); // ['Alice: 95', 'Charlie: 92']

// Iterating with index (using Array.from)
Array.from(scores.entries()).forEach(([name, score], index) => {
  console.log(`${index + 1}. ${name} = ${score}`);
});

// Lazy iteration with iterators
const iterator = scores.entries();
console.log(iterator.next()); // { value: ['Alice', 95], done: false }
console.log(iterator.next()); // { value: ['Bob', 87], done: false }
console.log(iterator.next()); // { value: ['Charlie', 92], done: false }
console.log(iterator.next()); // { value: ['Diana', 88], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Performance note: for...of is generally faster than forEach for Maps
console.time("for...of");
for (const [key, value] of scores) {
  // operation
}
console.timeEnd("for...of");

console.time("forEach");
scores.forEach((value, key) => {
  // operation
});
console.timeEnd("forEach");
```
