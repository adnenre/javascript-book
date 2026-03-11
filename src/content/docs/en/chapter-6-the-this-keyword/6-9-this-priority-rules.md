---
title: Priority Rules 'this'
sidebar:
  order: 9
  label: 6.9 'this' Priority Rules
---

When multiple rules could apply, this is determined by the following priority (from highest to lowest):

- Explicit binding (call, apply, bind)

- Constructor invocation (new)

- Method invocation (object context)

- Function invocation (default: global object, or undefined in strict mode)

- Arrow functions – they do not set this themselves but inherit from the outer scope (their priority is not a binding rule, they just follow lexical scope).

```javascript
// Example illustrating priority
const obj = {
  name: "obj",
  show: function () {
    console.log(this.name);
  },
};

const boundShow = obj.show.bind({ name: "bound" });
boundShow(); // 'bound' (explicit binding wins)

new obj.show(); // undefined (new creates a new object, so this refers to that new object, not obj)
```
