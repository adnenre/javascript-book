---
title: yield Keyword
sidebar:
  order: 1
  label: 16.4.1 yield Keyword
---

The `yield` keyword is the heart of generator functions. It pauses the generator's execution and returns a value to the caller. Each `yield` expression produces one value in the iterator sequence.

### Syntax

```javascript
function* generator() {
  yield expression;
  // Pauses and returns expression value
}
```

### How `yield` Works

When the generator encounters a `yield`:

1. The expression is evaluated
2. The value is returned as the `value` property of the iterator result
3. `done` is set to `false`
4. The generator pauses at that exact point

### `yield` as an Expression

`yield` can also receive values from the caller (via `next(value)`). The value passed to `next()` becomes the result of the `yield` expression inside the generator.

### Key Points

- Each `yield` produces one value in the iteration sequence.
- A generator can have zero, one, or multiple `yield`s.
- `yield` can be used anywhere an expression is allowed.
- Generators automatically have an implicit `return undefined` at the end.
- `yield` in a generator has lower precedence than most operators (use parentheses when needed).

```javascript
function* threeValues() {
  yield "first";
  yield "second";
  yield "third";
}

const values = threeValues();
console.log(values.next().value); // 'first'
console.log(values.next().value); // 'second'
console.log(values.next().value); // 'third'

// yield with expressions
function* calculationGenerator() {
  const a = 5;
  yield a; // Yields 5
  yield a * 2; // Yields 10
  yield Math.pow(a, 2); // Yields 25
}

const calc = calculationGenerator();
console.log(calc.next().value); // 5
console.log(calc.next().value); // 10
console.log(calc.next().value); // 25

// yield receiving values (two-way communication)
function* twoWayGenerator() {
  const received = yield "What is your name?";
  yield `Hello, ${received}!`;
  return "Done";
}

const chat = twoWayGenerator();
console.log(chat.next().value); // 'What is your name?'
console.log(chat.next("Alice").value); // 'Hello, Alice!'
console.log(chat.next().value); // 'Done'
console.log(chat.next().done); // true

// yield in loops
function* timesTable(n) {
  for (let i = 1; i <= 10; i++) {
    yield `${n} × ${i} = ${n * i}`;
  }
}

const table = timesTable(7);
for (const line of table) {
  console.log(line);
}
// 7 × 1 = 7
// 7 × 2 = 14
// ... up to 7 × 10 = 70
```
