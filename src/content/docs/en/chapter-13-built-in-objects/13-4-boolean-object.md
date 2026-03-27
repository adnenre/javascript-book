---
title: Boolean Object
sidebar:
  order: 4
  label: 13.4 Boolean Object
---

The `Boolean` object is a wrapper for boolean primitive values. It provides a way to create boolean objects, though they are rarely used because primitive booleans are more efficient. Any object, including a Boolean object, is truthy even if it wraps `false`.

### Key Points

- Primitive booleans: `true`, `false`.
- `Boolean` constructor: `new Boolean(value)` returns an object.
- Avoid using Boolean objects in conditionals because they are always truthy.

### Code Example

```javascript
const boolPrimitive = true;
const boolObject = new Boolean(false);

console.log(typeof boolPrimitive); // "boolean"
console.log(typeof boolObject); // "object"
console.log(boolPrimitive === boolObject); // false

// Dangerous: boolObject is truthy!
if (boolObject) {
  console.log("This will execute!"); // this runs
}
```
