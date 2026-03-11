---
title: Throwing Custom Errors
sidebar:
  order: 5
  label: 4.5 Throwing Custom Errors
---

JavaScript allows throwing custom errors using the throw statement:

Any expression can be thrown, but it's common to throw Error objects or instances of custom error classes.

Custom error classes can extend the built-in Error class to provide specific error types with meaningful names and messages.

This enables more precise error handling, allowing different error types to be treated differently in catch blocks.

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative");
  }
  if (age > 150) {
    throw new ValidationError("Age is too high");
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation error: " + error.message);
  } else {
    console.log("Unknown error: " + error);
  }
}
// Output: Validation error: Age cannot be negative
```
