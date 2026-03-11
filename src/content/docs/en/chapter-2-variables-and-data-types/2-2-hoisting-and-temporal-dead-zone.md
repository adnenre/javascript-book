---
title: Hoisting and Temporal Dead Zone
sidebar:
  order: 2
  label: 2.2 Hoisting and Temporal Dead Zone
---

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope before code execution.

- `var` declarations are hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but **not initialized** – they stay in a "temporal dead zone" (TDZ) until the declaration is evaluated.

Example with `var`:

```javascript
console.log(x); // undefined (not an error)
var x = 5;
```

Example with let (TDZ):

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

The TDZ exists from the start of the block until the declaration is encountered. Accessing the variable in that zone throws an error.

Function declarations are fully hoisted (both declaration and body). You can call them before they appear.

```javascript
sayHi(); // "Hello!"
function sayHi() {
  console.log("Hello!");
}
```

> Best practice: Declare variables at the top of their scope to avoid TDZ confusion.
