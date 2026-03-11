---
title: Arrow Functions and 'this'
sidebar:
  order: 7
  label: 6.7 Arrow Functions and 'this'
---

Arrow functions do not have their own this. Instead, they inherit this from the enclosing lexical scope (the context where they are defined). This makes them particularly useful for preserving context in callbacks.

```javascript
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(this.name); // Alice (inherits from greet's this)
    }, 100);
  },
};
person.greet();
```
