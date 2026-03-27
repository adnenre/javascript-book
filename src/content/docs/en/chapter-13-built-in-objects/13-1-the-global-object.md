---
title: The Global Object
sidebar:
  order: 1
  label: 13.1 The Global Object
---

The **global object** is an object that is always accessible and contains global variables, functions, and built‑in objects. In browsers, it is `window`; in Node.js, it is `global`; in modern JavaScript environments, `globalThis` provides a unified way to access the global object.

### Key Points

- Global variables declared with `var` become properties of the global object.
- Global functions like `setTimeout`, `console`, etc., are properties of the global object.
- `globalThis` works across environments (browser, Node.js, Web Workers).

### Code Example

```javascript
// In browser, this logs the window object
console.log(globalThis === window); // true (in browser)

// Global variable with var
var myGlobal = "Hello";
console.log(globalThis.myGlobal); // "Hello"

// Global function
function sayHi() {
  console.log("Hi");
}
globalThis.sayHi(); // "Hi"
```
