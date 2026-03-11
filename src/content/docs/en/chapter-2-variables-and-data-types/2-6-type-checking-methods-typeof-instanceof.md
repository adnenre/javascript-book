---
title: Type Checking Methods (typeof, instanceof,..)
sidebar:
  order: 6
  label: 2.6 Type Checking Methods (typeof, instanceof,..)
---

JavaScript provides several ways to check the type of a value.

**`typeof`** – Returns a string indicating the type of a value. Works well for primitives, but has caveats.

```javascript
console.log(typeof 42); // 'number'
console.log(typeof "hello"); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof 123n); // 'bigint'
console.log(typeof null); // 'object' (historical bug)
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () {}); // 'function'
```

instanceof – Checks whether an object is an instance of a specific constructor (works for reference types).

```javascript
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log("hello" instanceof String); // false (string literal is primitive)
```

Array.isArray() – Specifically checks for arrays.

```javascript
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```

Object.prototype.toString.call() – A more robust way to get the internal [[Class]] of any value.

```javascript
console.log(Object.prototype.toString.call([])); // '[object Array]'
console.log(Object.prototype.toString.call(null)); // '[object Null]'
```

Number.isNaN() vs global isNaN():

isNaN() coerces the argument to a number first.

Number.isNaN() does not coerce; checks if value is exactly NaN.

```javascript
console.log(isNaN("hello")); // true (coerced to NaN)
console.log(Number.isNaN("hello")); // false
```

> Choose the appropriate method based on what you need to detect.

```

```
