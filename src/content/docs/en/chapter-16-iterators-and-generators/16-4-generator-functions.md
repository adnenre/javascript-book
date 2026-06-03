---
title: Generator Functions
sidebar:
  order: 4
  label: 16.4 Generator Functions
---

Generator functions are a special type of function that can be paused and resumed, making them the perfect tool for creating iterators. They are defined using the `function*` syntax.

### Syntax

```javascript
function* generatorName() {
  // Generator body
}
```

## How Generators Work

Unlike regular functions that run to completion, generators:

1.Start execution when first called

2.Pause at each yield expression

3.Resume from where they paused when next() is called

4.Maintain state between pauses

## Generator Execution Flow

Call generator → Returns iterator object
↓
First next() → Runs to first yield → Pauses
↓
Second next() → Resumes → Runs to next yield → Pauses
↓
Final next() → Runs to return/end → done: true

## example

```javascript
function* simpleGenerator() {
  console.log("Start");
  yield 1;
  console.log("After first yield");
  yield 2;
  console.log("After second yield");
  return 3;
}

const gen = simpleGenerator();

console.log(gen.next());
// Logs: 'Start'
// Returns: { value: 1, done: false }

console.log(gen.next());
// Logs: 'After first yield'
// Returns: { value: 2, done: false }

console.log(gen.next());
// Logs: 'After second yield'
// Returns: { value: 3, done: true }

// Generator for array-like iteration
function* arrayIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const colors = arrayIterator(["red", "green", "blue"]);
console.log([...colors]); // ['red', 'green', 'blue']

// Generator with infinite sequence
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3

// Using generator in for...of (automatic)
function* countdown(n) {
  while (n > 0) {
    yield n--;
  }
}

for (const num of countdown(5)) {
  console.log(num); // 5, 4, 3, 2, 1
}
```
