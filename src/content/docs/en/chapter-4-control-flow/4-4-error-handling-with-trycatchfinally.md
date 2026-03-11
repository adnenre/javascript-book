---
title: Error Handling with try/catch/finally
sidebar:
  order: 4
  label: 4.4 Error Handling with try/catch/finally
---

The try...catch...finally statement handles runtime errors gracefully:

- try block – Contains code that may throw an exception. If an error occurs, control passes to the catch block.

- catch block – Executes if an exception is thrown in the try block. It receives an error object containing information about the error.

- finally block – Executes regardless of whether an error occurred or was caught. It is often used for cleanup operations (closing files, releasing resources).

```javascript
try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log(result);

  // Simulate an error
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Caught an error: " + error.message);
} finally {
  console.log("This always runs");
}
// Output: Infinity
//         Caught an error: Something went wrong
//         This always runs
```
