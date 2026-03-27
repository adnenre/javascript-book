---
title: Number Object
sidebar:
  order: 2
  label: 13.2 Number Object
---

he `Number` object is a wrapper for primitive numeric values. It provides constants and methods for working with numbers. Number literals are automatically converted to Number objects when methods are called.

### Key Points

- Constants: `Number.MAX_VALUE`, `Number.MIN_VALUE`, `Number.POSITIVE_INFINITY`, `Number.NaN`, etc.
- Methods: `isFinite()`, `isNaN()`, `parseInt()`, `parseFloat()`.
- Instance methods: `toFixed()`, `toPrecision()`, `toString()`.

### Code Example

```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(100)); // true

const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString(16)); // "7b.74bc6a7ef9db" (hexadecimal)
```
