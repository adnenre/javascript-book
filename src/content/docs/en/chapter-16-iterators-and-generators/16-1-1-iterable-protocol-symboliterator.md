---
title: Iterable Protocol (Symbol.iterator)
sidebar:
  order: 1
  label: 16.1.1 Iterable Protocol (Symbol.iterator)
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

┌──────────────┐ ┌──────────────┐
│ Iterable │─────▶│ Iterator │
│ │ ──┐ │ │
│ Symbol.iterator│ │ next() │
└──────────────┘ │ └──────────────┘
│
▼
┌──────────────┐
│ Value, done │
└──────────────┘

text

### Key Points

- An **Iterable** is any object that implements the `Symbol.iterator` method.
- An **Iterator** is any object that implements a `next()` method returning `{ value, done }`.
- Built-in iterables include Arrays, Strings, Maps, Sets, and NodeLists.
- The protocol enables `for...of`, spread syntax (`...`), destructuring, and `yield*`.

### Why Learn This?

Understanding the iteration protocol allows you to:

- Create custom iterable data structures
- Understand how `for...of` works internally
- Build lazy evaluation sequences
- Debug generator behavior

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

// Using the iterable
for (const num of countdown) {
  console.log(num); // 3, 2, 1
}

console.log([...countdown]); // [3, 2, 1]

// Array is iterable by default
const array = [10, 20, 30];
const iterator = array[Symbol.iterator]();
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```
