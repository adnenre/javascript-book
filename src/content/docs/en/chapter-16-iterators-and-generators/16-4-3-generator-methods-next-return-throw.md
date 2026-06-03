---
title: Generator Methods (next, return, throw)
sidebar:
  order: 3
  label: 16.4.3 Generator Methods (next, return, throw)
---

Generator objects (returned by generator functions) have three methods that control their execution: `next()`, `return()`, and `throw()`. Each method influences the generator's state and return value.

### The `next()` Method

The `next()` method resumes generator execution and returns the next value.

```javascript
generator.next(value);
```

- `value`: Optional value to pass into the generator (becomes the result of the current `yield`)
- Returns: `{ value, done }` object

### The `return()` Method

The `return()` method finishes the generator prematurely.

```javascript
generator.return(value);
```

- Forces the generator to complete immediately
- The provided value is returned as the `value` property
- `done` is set to `true`
- Any `finally` blocks inside the generator will execute

### The `throw()` Method

The `throw()` method injects an error into the generator's execution point.

```javascript
generator.throw(error);
```

- Resumes the generator by throwing an error at the current `yield` position
- If caught inside the generator, execution continues
- If not caught, the generator terminates with `done: true`

### Key Points

- These methods give you fine-grained control over generator execution.
- `return()` is useful for cleanup (like closing resources).
- `throw()` enables advanced error handling patterns.
- All methods can be called even after the generator is done (safe no-ops).

### Example Code

```javascript
function* taskGenerator() {
  try {
    yield "Task 1";
    yield "Task 2";
    yield "Task 3";
  } catch (error) {
    console.log("Caught:", error.message);
    yield "Recovery task";
  }
  yield "Cleanup";
}

const tasks = taskGenerator();

// Normal execution with next()
console.log(tasks.next().value); // 'Task 1'
console.log(tasks.next().value); // 'Task 2'

// Using throw() - injects error
console.log(tasks.throw(new Error("Something went wrong")).value);
// 'Caught: Something went wrong'
// 'Recovery task'

console.log(tasks.next().value); // 'Cleanup'
console.log(tasks.next().done); // true

// Using return() to terminate early
function* countdown(n) {
  for (let i = n; i > 0; i--) {
    yield i;
  }
  yield "Liftoff!";
}

const counter = countdown(5);
console.log(counter.next().value); // 5
console.log(counter.next().value); // 4
console.log(counter.return("Aborted").value); // 'Aborted'
console.log(counter.next().done); // true

// Using return() with cleanup (finally blocks)
function* withCleanup() {
  try {
    yield "Working";
    yield "Still working";
  } finally {
    console.log("Cleanup executed");
  }
}

const resource = withCleanup();
console.log(resource.next().value); // 'Working'
resource.return(); // 'Cleanup executed' (finally runs)
```
