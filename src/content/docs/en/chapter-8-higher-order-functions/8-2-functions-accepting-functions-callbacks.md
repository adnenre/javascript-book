---
title: Functions Accepting Functions (Callbacks)
sidebar:
  order: 2
  label: 8.2 Functions Accepting Functions (Callbacks)
---

A callback is a function passed as an argument to another function, to be executed later (often after an asynchronous operation or at a specific point). This is a fundamental concept in JavaScript for handling events and asynchronous tasks.

```javascript
function processUserInput(name, callback) {
  console.log("Processing...");
  callback(name);
}
processUserInput("Alice", (name) => {
  console.log(`Hello, ${name}`);
});
// Processing...
// Hello, Alice
```
