---
title: Undefined and Null
sidebar:
  order: 4
  label: 2.3.4 Undefined and Null
---

Both `undefined` and `null` represent "no value", but they are used in slightly different contexts.

- **`undefined`** means a variable has been declared but not assigned a value. Also the default return value of functions that don't return anything.

  ```javascript
  let x;
  console.log(x); // undefined

  function foo() {}
  console.log(foo()); // undefined
  null is an assignment value that represents "no object" or "empty". It must be explicitly set.
  ```

```javascript
let y = null;
console.log(y); // null
```

**Comparison:**

```javascript
console.log(undefined == null); // true (loose equality)
console.log(undefined === null); // false (strict equality)
```

In practice, use null when you want to explicitly indicate that a variable has no value, and let undefined represent unintentional absence.
