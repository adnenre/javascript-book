---
title: Method Context
sidebar:
  order: 4
  label: 6.4 Method Context
---

When a function is called as a method of an object (e.g., obj.method()), this refers to the object that owns the method.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // Alice
```
