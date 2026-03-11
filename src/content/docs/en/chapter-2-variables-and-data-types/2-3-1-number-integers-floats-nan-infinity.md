---
title: Number (integers, floats, NaN, Infinity)
sidebar:
  order: 1
  label: 2.3.1 Number (integers, floats, NaN, Infinity)
---

The `number` type represents both integers and floating‑point numbers.

```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 2.5e3; // 2500
```

Special numeric values:

NaN (Not‑a‑Number): result of an invalid or undefined mathematical operation.

```javascript
let result = "hello" * 5; // NaN
console.log(isNaN(result)); // true
```

Infinity and -Infinity: represent mathematical infinity.

```javascript
let tooBig = 1 / 0; // Infinity
let tooSmall = -1 / 0; // -Infinity
```

Number methods:

Number.isInteger(), Number.isNaN(), Number.parseFloat(), Number.parseInt().

```javascript
console.log(Number.isInteger(42)); // true
console.log(Number.parseInt("123px")); // 123
```

Precision issues:
Floating point arithmetic is not always exact.

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```

> Use toFixed() or libraries for exact decimal calculations.
