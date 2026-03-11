---
title: Type Coercion and Conversion
sidebar:
  order: 5
  label: 2.5 Type Coercion and Conversion
---

**Type coercion** is the automatic or implicit conversion of values from one data type to another (e.g., string to number). **Type conversion** (or casting) is the explicit conversion using functions like `String()`, `Number()`, `Boolean()`.

**Implicit coercion** often happens with operators:

```javascript
console.log("5" - 2); // 3 (string becomes number)
console.log("5" + 2); // '52' (number becomes string, concatenation)
console.log(true + 1); // 2 (true becomes 1)
```

Explicit conversion:

```javascript
let str = "123";
let num = Number(str); // 123
let bool = Boolean(str); // true
let float = parseFloat("3.14"); // 3.14
let int = parseInt("10px"); // 10
```

Truthy and falsy:
Values that coerce to false in boolean contexts: false, 0, '', null, undefined, NaN. Everything else is truthy.

Comparison quirks:

Loose equality (==) performs type coercion.

Strict equality (===) does not.

```javascript
console.log(0 == false); // true
console.log(0 === false); // false
```

> Best practice: Use strict equality (===) and explicit conversions to avoid surprises.
