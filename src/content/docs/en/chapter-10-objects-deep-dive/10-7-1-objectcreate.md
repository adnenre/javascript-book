---
title: Object.create()
sidebar:
  order: 1
  label: 10.7.1 Object.create()
---

Object.create() creates a new object with the specified prototype and optional properties.

```javascript
const proto = {
  greet() {
    return "Hello";
  },
};
const obj = Object.create(proto);
console.log(obj.greet()); // Hello
```
