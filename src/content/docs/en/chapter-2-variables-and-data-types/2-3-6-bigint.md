---
title: BigInt
sidebar:
  order: 6
  label: 2.3.6 BigInt
---

`BigInt` is a numeric primitive that can represent integers with arbitrary precision. It was added in ES2020 to handle numbers larger than `2^53 - 1` (the maximum safe integer for `Number`).

Create a `BigInt` by appending `n` to an integer or using the `BigInt()` function.

```javascript
let big = 123456789012345678901234567890n;
let alsoBig = BigInt("9007199254740993");
```

Operations:

Arithmetic with BigInt works similarly, but you cannot mix BigInt and regular Number in operations.

```javascript
let sum = 100n + 200n; // 300n
// let mix = 100n + 50; // TypeError
```

Comparisons (like >, <) work across types.

```javascript
console.log(100n > 50); // true
```

Division truncates toward zero.

```javascript
console.log(5n / 2n); // 2n
```

> BigInt is useful for high‑precision applications (cryptography, large IDs) but not for everyday math due to performance and interoperability concerns.
