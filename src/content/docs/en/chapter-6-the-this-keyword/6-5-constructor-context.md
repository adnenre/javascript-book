---
title: Constructor Context
sidebar:
  order: 5
  label: 6.5 Constructor Context
---

When a function is used as a constructor with the new keyword, this refers to the newly created instance.

```javascript
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
console.log(alice.name); // Alice
```
