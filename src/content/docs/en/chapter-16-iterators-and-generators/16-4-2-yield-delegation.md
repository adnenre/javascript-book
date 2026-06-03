---
title: yield* Delegation
sidebar:
  order: 2
  label: 16.4.2 yield* Delegation
---

The `yield*` expression delegates iteration to another iterable or generator. It yields each value from the delegated iterable before continuing with the current generator's own `yield`s.

### Syntax

```javascript
function* generator() {
  yield* otherIterable;
  // All values from otherIterable are yielded here
}
```

### How `yield*` Works

When `yield*` is encountered:

1. The expression is evaluated (must be iterable)
2. The generator calls the iterable's `[Symbol.iterator]()` method
3. Each value from the iterator is yielded one by one
4. The generator pauses/resumes as each value is produced

### Comparison: `yield` vs `yield*`

| `yield`                            | `yield*`                                 |
| ---------------------------------- | ---------------------------------------- |
| Yields a single value              | Yields each value from an iterable       |
| Returns the yielded value          | Returns the return value of the iterable |
| Manual iteration needed for arrays | Automatic delegation                     |

### Key Points

- `yield*` works with any iterable (arrays, strings, Maps, Sets, generators).
- Can be used to recursively traverse nested structures.
- The `yield*` expression returns the value returned by the delegated iterator (if any).
- Useful for composing generators from smaller ones.

## example

```javascript
// Basic yield* delegation to array
function* outerGenerator() {
  yield "start";
  yield* ["middle1", "middle2", "middle3"];
  yield "end";
}

for (const value of outerGenerator()) {
  console.log(value);
}
// 'start', 'middle1', 'middle2', 'middle3', 'end'

// Delegating to another generator
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* letters() {
  yield "a";
  yield "b";
  yield "c";
}

function* combined() {
  yield* numbers();
  yield* letters();
  yield* [4, 5, 6];
}

console.log([...combined()]); // [1, 2, 3, 'a', 'b', 'c', 4, 5, 6]

// Recursive tree traversal with yield*
class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.value;
    for (const child of this.children) {
      yield* child; // Recursive delegation
    }
  }
}

const tree = new TreeNode(1, [new TreeNode(2, [new TreeNode(4), new TreeNode(5)]), new TreeNode(3, [new TreeNode(6)])]);

console.log([...tree]); // [1, 2, 4, 5, 3, 6]

// yield* with string
function* chars() {
  yield* "Hello";
}

console.log([...chars()]); // ['H','e','l','l','o']

// Capturing return value from delegated generator
function* returnsValue() {
  yield 1;
  yield 2;
  return "secret";
}

function* wrapper() {
  const result = yield* returnsValue();
  yield `Got: ${result}`;
}

console.log([...wrapper()]); // [1, 2, 'Got: secret']
```
