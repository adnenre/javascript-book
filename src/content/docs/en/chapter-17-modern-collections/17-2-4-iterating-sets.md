---
title: Iterating Sets
sidebar:
  order: 10
  label: 17.2.4 Iterating Sets
---

Sets provide built-in iteration methods that make traversing unique values simple and efficient. Like Maps, Sets preserve insertion order during iteration.

### Iteration Methods

| Method          | Returns                      | Iterates over                         |
| --------------- | ---------------------------- | ------------------------------------- |
| `set.keys()`    | Iterator of values           | Values in insertion order             |
| `set.values()`  | Iterator of values           | Values in insertion order             |
| `set.entries()` | Iterator of `[value, value]` | Key-value pairs (value appears twice) |
| `set.forEach()` | Callback function            | Values                                |

### Direct Iteration

Sets are iterable by default (same as `set.values()`):

```javascript
for (const value of set) {
  // Iterates over values
}
```

### Why entries() Returns [value, value]

For compatibility with Maps, `set.entries()` returns an iterator of `[value, value]` pairs. This allows Sets to be used in places expecting a Map-like interface.

### Key Points

- Iteration order follows insertion order.
- Sets are directly iterable without calling a method.
- `forEach()` callback receives `(value, value, set)` - value appears twice.
- `keys()` and `values()` return the same iterator (for Map compatibility).
- You can convert Sets to arrays with spread or `Array.from()`.

### Example Code

```javascript
// Creating a sample Set
const fruits = new Set(["apple", "banana", "orange", "mango"]);

// 1. Using for...of (direct iteration)
console.log("Direct iteration:");
for (const fruit of fruits) {
  console.log(fruit);
}
// apple, banana, orange, mango

// 2. Using values() method
console.log("\nUsing values():");
for (const fruit of fruits.values()) {
  console.log(fruit);
}

// 3. Using keys() method (same as values() for Sets)
console.log("\nUsing keys():");
for (const fruit of fruits.keys()) {
  console.log(fruit);
}

// 4. Using entries() method (returns [value, value])
console.log("\nUsing entries():");
for (const [key, value] of fruits.entries()) {
  console.log(`${key} -> ${value}`);
}
// apple -> apple, banana -> banana, etc.

// 5. Using forEach
console.log("\nUsing forEach:");
fruits.forEach((value, key, set) => {
  console.log(`${key}: ${value}`);
  console.log(`Set size: ${set.size}`);
});

// Converting to arrays
const fruitsArray = [...fruits];
console.log(fruitsArray); // ['apple', 'banana', 'orange', 'mango']

const fromArray = Array.from(fruits);
console.log(fromArray); // ['apple', 'banana', 'orange', 'mango']

// Destructuring during iteration
for (const fruit of fruits) {
  console.log(`I like ${fruit}`);
}

// Practical: Set iteration for data analysis
const scores = new Set([95, 87, 92, 88, 95, 92, 100]);
console.log("Unique scores:", [...scores]); // [95, 87, 92, 88, 100]

// Find average of unique scores
let sum = 0;
for (const score of scores) {
  sum += score;
}
const average = sum / scores.size;
console.log(`Average unique score: ${average}`);

// Find highest score
let highest = 0;
for (const score of scores) {
  if (score > highest) highest = score;
}
console.log(`Highest unique score: ${highest}`);

// Filtering during iteration
const highScores = [];
for (const score of scores) {
  if (score >= 90) {
    highScores.push(score);
  }
}
console.log("High scores (>= 90):", highScores);

// Practical: Tag cloud generator
class TagCloud {
  constructor() {
    this.tags = new Set();
    this.frequencies = new Map();
  }

  addTag(tag) {
    const normalized = tag.toLowerCase().trim();
    this.tags.add(normalized);
    this.frequencies.set(normalized, (this.frequencies.get(normalized) || 0) + 1);
  }

  getUniqueTags() {
    return [...this.tags].sort();
  }

  getTagFrequency(tag) {
    return this.frequencies.get(tag.toLowerCase()) || 0;
  }

  printCloud() {
    console.log("=== TAG CLOUD ===");
    for (const tag of this.tags) {
      const freq = this.frequencies.get(tag);
      const stars = "*".repeat(Math.min(freq, 5));
      console.log(`${tag.padEnd(15)} ${stars} (${freq})`);
    }
  }

  getTopTags(n = 5) {
    return [...this.tags]
      .map((tag) => ({ tag, count: this.frequencies.get(tag) }))
      .sort((a, b) => b.count - a.count)
      .slice(0, n);
  }
}

const cloud = new TagCloud();
cloud.addTag("JavaScript");
cloud.addTag("React");
cloud.addTag("javascript");
cloud.addTag("Node.js");
cloud.addTag("React");
cloud.addTag("JavaScript");
cloud.addTag("TypeScript");

cloud.printCloud();
console.log("Top tags:", cloud.getTopTags(2));

// Using Set iteration with break
const numbersSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Find first number divisible by 7
for (const num of numbersSet) {
  if (num % 7 === 0) {
    console.log(`Found: ${num}`);
    break;
  }
}

// Transforming Set using iteration
const doubledSet = new Set();
for (const num of numbersSet) {
  doubledSet.add(num * 2);
}
console.log(doubledSet); // Set {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}

// Chaining operations with spread
const processed = [...numbersSet].filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(processed); // [20, 40, 60, 80, 100]

// Using iterator manually
const iterator = fruits.values();
console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }
console.log(iterator.next()); // { value: 'mango', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Performance comparison
const largeSet = new Set(Array.from({ length: 10000 }, (_, i) => i));

console.time("for...of");
for (const item of largeSet) {
  // operation
}
console.timeEnd("for...of");

console.time("forEach");
largeSet.forEach((item) => {
  // operation
});
console.timeEnd("forEach");
```
