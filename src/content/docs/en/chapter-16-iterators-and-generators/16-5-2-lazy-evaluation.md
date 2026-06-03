---
title: Lazy Evaluation
sidebar:
  order: 2
  label: 16.5.2 Lazy Evaluation
---

Lazy evaluation means computing values only when they are actually needed. This contrasts with eager evaluation where all values are computed upfront. Generators are inherently lazy because they pause execution until `next()` is called.

### Eager vs Lazy Evaluation

| Aspect            | Eager Evaluation                 | Lazy Evaluation                      |
| ----------------- | -------------------------------- | ------------------------------------ |
| **When computed** | Immediately, all at once         | On demand, as needed                 |
| **Memory usage**  | High (stores everything)         | Low (stores only current)            |
| **Startup time**  | Slow (computes everything first) | Fast (computes nothing until needed) |
| **Best for**      | Small, finite datasets           | Large or infinite datasets           |

### How Generators Enable Lazy Evaluation

- Generator functions pause at each `yield`
- No computation happens until `next()` is called
- Values can be discarded after use
- Pipelines process only what you request

### Key Points

- Lazy evaluation saves memory for large datasets.
- It enables working with infinite sequences.
- Processing stops early if you only need first N items.
- Lazy pipelines are composable and efficient.

### Example Code

```javascript
// 1. Lazy vs eager comparison

// Eager (computes all at once)
function eagerRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    console.log(`Computing ${i}`);
    result.push(i);
  }
  return result;
}

console.log("Eager:");
const eagerNumbers = eagerRange(1, 10); // Computes ALL numbers
console.log("Only need first 3:");
console.log(eagerNumbers[0], eagerNumbers[1], eagerNumbers[2]);

// Lazy (computes on demand)
function* lazyRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`Computing ${i}`);
    yield i;
  }
}

console.log("\nLazy:");
const lazyNumbers = lazyRange(1, 10);
console.log("Only need first 3:");
console.log(lazyNumbers.next().value); // Computes 1
console.log(lazyNumbers.next().value); // Computes 2
console.log(lazyNumbers.next().value); // Computes 3
// Numbers 4-10 are NEVER computed

// 2. Lazy transformation pipeline
function* map(iterable, transform) {
  for (const value of iterable) {
    yield transform(value);
  }
}

function* filter(iterable, predicate) {
  for (const value of iterable) {
    if (predicate(value)) {
      yield value;
    }
  }
}

function* take(iterable, count) {
  let taken = 0;
  for (const value of iterable) {
    if (taken >= count) break;
    yield value;
    taken++;
  }
}

// Pipeline: Get first 5 even numbers squared from 1 to 1000
const numbers = lazyRange(1, 1000);
const evenNumbers = filter(numbers, (n) => n % 2 === 0);
const squared = map(evenNumbers, (n) => n * n);
const firstFive = take(squared, 5);

console.log([...firstFive]);
// Only processes: 2,4,6,8,10 (stops after 5th even number)
// [4, 16, 36, 64, 100]

// 3. Lazy evaluation with expensive computation
function* expensiveComputation() {
  let i = 1;
  while (true) {
    console.log(`Computing expensive operation ${i}...`);
    // Simulate expensive operation
    let result = 0;
    for (let j = 0; j < 1000000; j++) {
      result += j;
    }
    yield result + i;
    i++;
  }
}

const expensive = expensiveComputation();
console.log("First result:", expensive.next().value);
// Computes only one value
console.log("Second result:", expensive.next().value);
// Computes only the second value

// 4. Lazy file processing (simulated)
function* readLines(totalLines) {
  let lineNumber = 1;
  while (lineNumber <= totalLines) {
    // Simulate reading a line from disk
    console.log(`Reading line ${lineNumber} from disk`);
    yield `Line ${lineNumber}: Lorem ipsum dolor sit amet...`;
    lineNumber++;
  }
}

// Process only first 3 lines of a 1,000,000 line file
const fileLines = readLines(1000000);
const first3Lines = take(fileLines, 3);
console.log([...first3Lines]);
// Only 3 lines are actually read from disk, not the entire file

// 5. Lazy number transformations
function* naturals() {
  let n = 1;
  while (true) yield n++;
}

const lazyPipeline = take(
  map(
    filter(naturals(), (n) => n % 2 === 0),
    (n) => n * 10,
  ),
  5,
);

console.log([...lazyPipeline]);
// [20, 40, 60, 80, 100]
// Only computes: 2,4,6,8,10 from the infinite sequence

// 6. Lazy evaluation with database (simulated)
function* databaseQuery(table, condition) {
  let id = 1;
  while (id <= 1000) {
    // Simulate database row
    const row = { id, name: `User${id}`, active: id % 2 === 0 };
    if (condition(row)) {
      console.log(`Fetching row ${id} from database`);
      yield row;
    }
    id++;
  }
}

const activeUsers = databaseQuery("users", (row) => row.active);
const first5Active = take(activeUsers, 5);
console.log([...first5Active]);
// Only fetches until 5 active users are found
// Stops at row 10 (since even numbers are active)

// 7. Lazy sum with early termination
function* numbersUntilNegative() {
  yield 10;
  yield 20;
  yield 30;
  yield -1; // Stop signal
  yield 40; // Never reached
}

let sum = 0;
for (const num of numbersUntilNegative()) {
  if (num < 0) break;
  sum += num;
}
console.log(sum); // 60 (30 is last added, -1 stops, 40 never processed)

// 8. Custom lazy range with step
function* lazyRangeStep(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    console.log(`Generating ${i}`);
    yield i;
  }
}

const lazyOdds = lazyRangeStep(1, 1000, 2);
console.log("First 5 odd numbers:", take(lazyOdds, 5));
// Only generates: 1,3,5,7,9
```
