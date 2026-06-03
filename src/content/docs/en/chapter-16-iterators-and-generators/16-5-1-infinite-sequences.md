---
title: Infinite Sequences
sidebar:
  order: 1
  label: 16.5.1 Infinite Sequences
---

---

title: Infinite Sequences
sidebar:
order: 1
label: 16.5.1 Infinite Sequences

---

Infinite sequences are sequences that theoretically have no end. With regular arrays, you cannot represent an infinite sequence because arrays require finite memory. Generators solve this by producing values on demand.

### What Are Infinite Sequences?

An infinite sequence is a stream of values that continues indefinitely. Examples include:

- Natural numbers (1, 2, 3, 4, ...)
- Fibonacci numbers (0, 1, 1, 2, 3, 5, 8, ...)
- Prime numbers (2, 3, 5, 7, 11, ...)
- Random numbers
- Real-time data streams (stock prices, sensor readings)

### How Generators Enable Infinite Sequences

Regular functions cannot return infinite sequences because they would run forever. Generators use lazy evaluation:

- Values are computed one at a time
- The generator pauses after each value
- Memory usage remains constant regardless of sequence length
- You can stop consuming at any time

### Key Points

- Infinite sequences never set `done` to `true` (unless you manually stop).
- You must have a stopping condition when consuming infinite sequences.
- Memory complexity is O(1) – only the current state is stored.
- Perfect for mathematical sequences, ID generation, and streams.

### Helper Function: Take

To safely consume infinite sequences, use a `take()` function:

```javascript
function take(iterator, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(iterator.next().value);
  }
  return result;
}
```

### Example Code

```javascript
// 1. Infinite sequence: Natural numbers
function* naturalNumbers(start = 1) {
  while (true) {
    yield start++;
  }
}

const naturals = naturalNumbers();
console.log(naturals.next().value); // 1
console.log(naturals.next().value); // 2
console.log(naturals.next().value); // 3

// Get first 20 natural numbers
function take(iterator, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(iterator.next().value);
  }
  return result;
}

console.log(take(naturalNumbers(), 20));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// 2. Infinite sequence: Fibonacci numbers
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(take(fib, 15));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// 3. Infinite sequence: Prime numbers
function* primes() {
  yield 2;
  let num = 3;
  while (true) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) yield num;
    num += 2; // Only check odd numbers
  }
}

const primeGen = primes();
console.log(take(primeGen, 15));
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// 4. Infinite sequence: Powers of 2
function* powersOfTwo() {
  let power = 1;
  while (true) {
    yield power;
    power *= 2;
  }
}

const powers = powersOfTwo();
console.log(take(powers, 10));
// [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]

// 5. Infinite sequence: Collatz conjecture
function* collatz(n) {
  while (true) {
    yield n;
    if (n === 1) break;
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
  }
}

const collatzSeq = collatz(13);
console.log([...collatzSeq]);
// [13, 40, 20, 10, 5, 16, 8, 4, 2, 1]

// 6. Infinite sequence: Random numbers (deterministic)
function* randomNumbers(seed = 1) {
  let state = seed;
  while (true) {
    // Linear congruential generator
    state = (state * 1664525 + 1013904223) % 2 ** 32;
    yield state / 2 ** 32;
  }
}

const rand = randomNumbers(42);
console.log(take(rand, 5));
// [0.374..., 0.145..., 0.637..., 0.982..., 0.123...]

// 7. Infinite sequence: Alternating pattern
function* alternating() {
  let value = true;
  while (true) {
    yield value;
    value = !value;
  }
}

const alternator = alternating();
console.log(take(alternator, 10));
// [true, false, true, false, true, false, true, false, true, false]

// 8. Practical: Infinite ID generator
function* idGenerator(prefix = "id") {
  let counter = 1;
  while (true) {
    yield `${prefix}_${counter++}`;
  }
}

const userIds = idGenerator("user");
console.log(userIds.next().value); // 'user_1'
console.log(userIds.next().value); // 'user_2'
console.log(userIds.next().value); // 'user_3'

// 9. Infinite sequence: Circular buffer
function* circular(items) {
  let index = 0;
  while (true) {
    yield items[index % items.length];
    index++;
  }
}

const colors = circular(["red", "green", "blue"]);
console.log(take(colors, 7));
// ['red', 'green', 'blue', 'red', 'green', 'blue', 'red']

// 10. Stopping condition when consuming
function findFirst(predicate, iterable) {
  for (const value of iterable) {
    if (predicate(value)) {
      return value;
    }
  }
  return undefined;
}

const firstPrimeOver100 = findFirst((n) => n > 100, primes());
console.log(firstPrimeOver100); // 101
```
