---
title: Common Closure Pitfalls
sidebar:
  order: 6
  label: 7.6 Common Closure Pitfalls
---

English:

Loop with var – Closures inside loops capture the same variable, often leading to unexpected results. Using let or an IIFE solves this.

Accidental closure creation – Inadvertently creating closures can cause memory leaks.

Misunderstanding this – Arrow functions inside closures capture the lexical this, which may not be what you expect.

Overusing closures – They can make code harder to read and debug.

```javascript
// Classic loop with var problem
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100); // logs 3,3,3
}

// Solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100); // logs 0,1,2
}
```
