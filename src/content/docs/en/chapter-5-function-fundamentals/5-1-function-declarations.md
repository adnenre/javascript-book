---
title: Function Declarations
sidebar:
  order: 1
  label: 5.1 Function Declarations
---

A function declaration defines a named function that is hoisted to the top of its scope, meaning it can be called before its definition. It consists of the `function` keyword, a name, parameters, and a function body.

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```
