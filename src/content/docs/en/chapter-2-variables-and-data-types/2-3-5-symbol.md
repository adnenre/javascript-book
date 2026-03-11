---
title: Symbol
sidebar:
  order: 5
  label: 2.3.5 Symbol
---

`Symbol` is a primitive type introduced in ES6. Every symbol is guaranteed to be unique. They are often used as keys for object properties to avoid name collisions.

```javascript
let sym1 = Symbol();
let sym2 = Symbol("id"); // optional description
let sym3 = Symbol("id");

console.log(sym2 === sym3); // false – each Symbol is unique
```

**Using as property keys:**

```javascript
const obj = {};
const id = Symbol("id");
obj[id] = "secret value";
console.log(obj[id]); // 'secret value'
console.log(Object.keys(obj)); // [] – symbols are not enumerated
```

Well‑known symbols like Symbol.iterator are used to define built‑in behaviors.

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator](); // returns an iterator
```

> Symbols are not fully private but offer a way to create non‑string property keys that won't clash with other keys.
