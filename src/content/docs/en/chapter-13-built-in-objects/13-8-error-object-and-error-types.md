---
title: Error Object and Error Types
sidebar:
  order: 8
  label: 13.8 Error Object and Error Types
---

The `Error` object is the base for all runtime errors. It can be thrown and caught with `try...catch`. There are several built‑in error types that extend `Error`, providing more specific error information.

### Key Points

- `Error`: generic error.
- Built‑in error types: `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`.
- Custom errors can be created by extending `Error`.

### Code Example

```javascript
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.name); // "Error"
  console.log(err.message); // "Something went wrong"
  console.log(err.stack); // stack trace
}

// Specific error types
try {
  undefinedVariable; // ReferenceError
} catch (err) {
  console.log(err instanceof ReferenceError); // true
}

// Custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (err) {
  console.log(err.name); // "ValidationError"
  console.log(err.message); // "Invalid input"
}
```
