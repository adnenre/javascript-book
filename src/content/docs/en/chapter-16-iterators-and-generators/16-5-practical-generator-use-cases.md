---
title: Practical Generator Use Cases
sidebar:
  order: 5
  label: 16.5 Practical Generator Use Cases
---

Generators have numerous real-world applications beyond simple iteration. This section explores practical scenarios where generators shine.

### When to Use Generators

| Use Case               | Why Generators                    |
| ---------------------- | --------------------------------- |
| **Lazy evaluation**    | Compute values only when needed   |
| **Infinite sequences** | Represent endless streams of data |
| **State machines**     | Maintain state between steps      |
| **Custom iteration**   | Complex traversal logic           |
| **Async flow control** | Pause/resume async operations     |

### Key Points

- Generators provide memory efficiency for large datasets.
- They enable clean representation of algorithms with internal state.
- Generators are ideal for data pipelines and transformations.
- They can simplify async code when combined with promises.

### Example Code

```javascript
// 1. Lazy evaluation with large datasets
function* lazyRange(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

// Processing only first 5 odd numbers without generating all numbers
const oddNumbers = lazyRange(1, Infinity, 2);
let count = 0;
for (const num of oddNumbers) {
  console.log(num); // 1, 3, 5, 7, 9
  count++;
  if (count >= 5) break;
}

// 2. Infinite sequence: Fibonacci
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value
```
