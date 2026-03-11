---
title: Boolean
sidebar:
  order: 3
  label: 2.3.3 Boolean
---

The `boolean` type has only two values: `true` and `false`. They are often used in conditions and logical operations.

```javascript
let isLogged = true;
let isReady = false;
```

Booleans result from comparisons:

```javascript
console.log(5 > 3); // true
console.log(5 === 3); // false
```

They can also be created with the Boolean function or double NOT (!!):

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(!!"hello"); // true
```

Falsy values (evaluate to false): false, 0, '' (empty string), null, undefined, NaN. Everything else is truthy.
