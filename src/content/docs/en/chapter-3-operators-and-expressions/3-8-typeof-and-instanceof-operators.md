---
title: typeof and instanceof Operators
sidebar:
  order: 8
  label: 3.8 typeof and instanceof Operators
---

**typeof**
typeof returns a string indicating the type of an unevaluated operand (e.g., "number", "string", "object").

```javascript
console.log(typeof 42); // "number"
console.log(typeof "bonjour"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug historique)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

**instanceof**
instanceof tests whether an object has a specified prototype in its prototype chain.

```javascript
let tableau = [];
let dateObj = new Date();
console.log(tableau instanceof Array); // true
console.log(tableau instanceof Object); // true
console.log(dateObj instanceof Date); // true
console.log(dateObj instanceof Object); // true
```
