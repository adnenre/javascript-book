---
title: The Iteration Protocol
sidebar:
  order: 1
  label: 16.1 The Iteration Protocol
---

The iteration protocol is a set of standards that allows JavaScript objects to define or customize their iteration behavior. It consists of two complementary protocols: **Iterable** and **Iterator**.

### What Problem Does It Solve?

Before ES6, iterating over custom data structures was inconsistent. You had to know if an object used `for-in`, `Object.keys()`, or custom methods like `getNext()`. The iteration protocol provides a **unified way to traverse any data structure**.

### The Two Protocols

| Protocol     | Role                           | Who Implements        |
| ------------ | ------------------------------ | --------------------- |
| **Iterable** | Defines how to get an iterator | The collection itself |
| **Iterator** | Defines how to traverse values | The iterator object   |

### Relationship Diagram

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Iterable │─────▶│ Iterator │─────▶│ Value │
│ │ │ │ │ │
│ Symbol.iterator│ │ next() │ │ done: false │
└──────────────┘ └──────────────┘ └──────────────┘
│
▼
┌──────────────┐
│ Done │
│ done: true │
└──────────────┘

text

### How It Works

1. An **iterable** is any object that has a `Symbol.iterator` method.
2. Calling `obj[Symbol.iterator]()` returns an **iterator** object.
3. The iterator has a `next()` method.
4. Each call to `next()` returns an object with `value` and `done` properties.
5. When iteration is complete, `done` becomes `true`.

### Built-in Iterables

JavaScript has many built-in iterables:

- Array
- String
- Map
- Set
- TypedArray
- arguments object
- NodeList (DOM)
- Generator objects

### Key Points

- An **Iterable** is any object that implements the `Symbol.iterator` method.
- An **Iterator** is any object that implements a `next()` method returning `{ value, done }`.
- The protocol enables `for...of`, spread syntax (`...`), destructuring, and `yield*`.
- Plain objects are NOT iterable by default.

### Why Learn This?

Understanding the iteration protocol allows you to:

- Create custom iterable data structures
- Understand how `for...of` works internally
- Build lazy evaluation sequences
- Debug generator behavior
- Implement your own data collections

### Example Code

```javascript
// Basic iterable implementation
const countdown = {
  start: 3,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next() {
        if (current >= 1) {
          return { value: current--, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// Using the iterable with for...of
for (const num of countdown) {
  console.log(num); // 3, 2, 1
}

// Using with spread operator
console.log([...countdown]); // [3, 2, 1]

// Using with destructuring
const [first, second, third] = countdown;
console.log(first, second, third); // 3 2 1

// Array is iterable by default
const array = [10, 20, 30];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// String is iterable
const str = "hello";
for (const char of str) {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

// Set is iterable
const set = new Set(["a", "b", "c"]);
for (const item of set) {
  console.log(item); // 'a', 'b', 'c'
}

// Map is iterable (returns [key, value] pairs)
const map = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // 'name: Alice', 'age: 30'
}

// Checking if something is iterable
function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === "function";
}

console.log(isIterable([1, 2, 3])); // true
console.log(isIterable("hello")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable({ a: 1 })); // false
console.log(isIterable(null)); // false
```
