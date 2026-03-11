---
title: Understanding Lexical Scope
sidebar:
  order: 1
  label: 7.1 Understanding Lexical Scope
---

Lexical scope refers to the visibility of variables based on their location in the source code. In JavaScript, the scope of a variable is determined by its position within the code nesting: inner functions have access to variables defined in outer scopes, but not vice‑versa. This is also called static scope.

```javascript
// English
function outer() {
  let message = "Hello from outer";
  function inner() {
    console.log(message); // accessible
  }
  inner();
}
outer(); // "Hello from outer"
```
