---
title: arguments
sidebar:
  order: 1
  label: 14.5.1 arguments
---

Inside a non‑arrow function, the `arguments` object is an array‑like object containing the arguments passed to the function. It provides access to all arguments regardless of the function’s parameter list. However, it is not a true array; you must convert it if you need array methods.

### Key Points

- Available only in traditional functions (not arrow functions).
- Has `length` property and indexed elements.
- Can be used to create variadic functions (accepting any number of arguments).
- In modern JavaScript, rest parameters (`...args`) are preferred over `arguments`.

### Code Example

```javascript
function sum() {
  console.log(arguments.length); // number of arguments
  console.log(arguments[0]); // first argument

  // Convert to array to use reduce
  const argsArray = Array.from(arguments);
  const total = argsArray.reduce((acc, val) => acc + val, 0);
  return total;
}

console.log(sum(1, 2, 3)); // 6

// Rest parameters (modern alternative)
function sumModern(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumModern(1, 2, 3)); // 6
```
