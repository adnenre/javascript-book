---
title: Iterator Protocol (next(), done, value)
sidebar:
  order: 2
  label: 16.1.2 Iterator Protocol (next(), done, value)
---

The **Iterator Protocol** defines a standard way to produce a sequence of values, potentially infinite. An iterator is an object that implements a `next()` method.

### The `next()` Method

The `next()` method is called repeatedly to traverse the sequence. Each call returns an object with two properties:

| Property | Type    | Description                                                                  |
| -------- | ------- | ---------------------------------------------------------------------------- |
| `value`  | Any     | The current element in the sequence (can be `undefined` if `done` is `true`) |
| `done`   | Boolean | `true` if the sequence is finished, `false` otherwise                        |

### Iterator Result Object Format

```javascript
// When there are more values
{ value: nextValue, done: false }

// When the sequence is complete
{ value: undefined, done: true }

// Or with a custom final value
{ value: finalValue, done: true }
```

### Iterator State

Iterators maintain internal state to know where they are in the sequence. This state is **mutable**—each call to `next()` advances the iterator.

### Iterator Characteristics

| Characteristic  | Description                                     |
| --------------- | ----------------------------------------------- |
| **Stateful**    | Remembers position between calls                |
| **One-pass**    | Cannot be rewound or reset                      |
| **Exhaustible** | Finite iterators eventually return `done: true` |
| **Lazy**        | Values computed on demand                       |

### Types of Iterators

| Type         | `done` Behavior                 | Example                         |
| ------------ | ------------------------------- | ------------------------------- |
| **Finite**   | Becomes `true` after last value | Array iterator                  |
| **Infinite** | Never becomes `true`            | Mathematical sequence generator |
| **Empty**    | First call returns `done: true` | Empty array iterator            |

### Key Points

- Once `done` becomes `true`, calling `next()` again typically returns `{ done: true }`.
- An iterator may be **finite** (has an end) or **infinite** (never sets `done` to `true`).
- The same iterator cannot be reused after completion.
- Iterators are **one-pass**—you cannot rewind them without creating a new iterator.
- The `value` property is optional when `done` is `true`.

### Early Termination

Some syntaxes may stop calling `next()` before the iterator finishes:

- `break` in a `for...of` loop
- Destructuring only part of an array
- `take()` function that limits items

This is normal and expected behavior.

### Example Code

```javascript
// Simple iterator implementation
function createRangeIterator(start, end, step = 1) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        const value = current;
        current += step;
        return { value, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const range = createRangeIterator(1, 3);
console.log(range.next()); // { value: 1, done: false }
console.log(range.next()); // { value: 2, done: false }
console.log(range.next()); // { value: 3, done: false }
console.log(range.next()); // { value: undefined, done: true }

// Manual iteration using the iterator protocol
const colors = ["red", "green", "blue"];
const colorIterator = colors[Symbol.iterator]();

let result = colorIterator.next();
while (!result.done) {
  console.log(result.value); // 'red', 'green', 'blue'
  result = colorIterator.next();
}
console.log("Iteration complete");

// Iterator on a string (Unicode-aware)
const str = "Hello 🌍";
const strIterator = str[Symbol.iterator]();

console.log(strIterator.next()); // { value: 'H', done: false }
console.log(strIterator.next()); // { value: 'e', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'o', done: false }
console.log(strIterator.next()); // { value: ' ', done: false }
console.log(strIterator.next()); // { value: '🌍', done: false }
console.log(strIterator.next()); // { value: undefined, done: true }

// Infinite iterator (be careful!)
function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

const numbers = naturalNumbers();
console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
console.log(numbers.next()); // { value: 3, done: false }
// Never reaches done: true

// Iterator with a final return value
function* withReturnValue() {
  yield 1;
  yield 2;
  return "finished";
}

const withReturn = withReturnValue();
console.log(withReturn.next()); // { value: 1, done: false }
console.log(withReturn.next()); // { value: 2, done: false }
console.log(withReturn.next()); // { value: "finished", done: true }

// Empty iterator
const emptyArray = [];
const emptyIterator = emptyArray[Symbol.iterator]();
console.log(emptyIterator.next()); // { value: undefined, done: true }

// Implementing a custom iterator manually (without generator)
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);

const listIterator = list[Symbol.iterator]();
console.log(listIterator.next()); // { value: 10, done: false }
console.log(listIterator.next()); // { value: 20, done: false }
console.log(listIterator.next()); // { value: 30, done: false }
console.log(listIterator.next()); // { value: undefined, done: true }

// Iterator exhaustion - cannot be reused
const array2 = [1, 2, 3];
const iter = array2[Symbol.iterator]();

console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
console.log(iter.next().value); // 3
console.log(iter.next().done); // true

// This will NOT work - iterator is exhausted
for (const item of iter) {
  console.log(item); // Never runs
}

// Create a new iterator for a fresh traversal
const newIter = array2[Symbol.iterator]();
for (const item of newIter) {
  console.log(item); // 1, 2, 3
}

// Practical: Custom pagination iterator
function createPaginator(data, pageSize = 5) {
  let index = 0;
  return {
    next() {
      if (index >= data.length) {
        return { done: true };
      }
      const page = data.slice(index, index + pageSize);
      index += pageSize;
      return { value: page, done: false };
    },
  };
}

const items = Array.from({ length: 23 }, (_, i) => `Item ${i + 1}`);
const paginator = createPaginator(items, 5);

console.log(paginator.next()); // { value: ['Item1','Item2','Item3','Item4','Item5'], done: false }
console.log(paginator.next()); // { value: ['Item6','Item7','Item8','Item9','Item10'], done: false }
console.log(paginator.next()); // { value: ['Item11','Item12','Item13','Item14','Item15'], done: false }
console.log(paginator.next()); // { value: ['Item16','Item17','Item18','Item19','Item20'], done: false }
console.log(paginator.next()); // { value: ['Item21','Item22','Item23'], done: false }
console.log(paginator.next()); // { done: true }

// The iterator protocol is used internally by for...of
const manually = [1, 2, 3];
const it = manually[Symbol.iterator]();

// This is what for...of does internally
let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}
```
