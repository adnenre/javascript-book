---
title: Understanding the ECMAScript Specification
sidebar:
  order: 5
  label: 1.5 Understanding the ECMAScript Specification
---

ECMAScript (often abbreviated ES) is the **standard** on which JavaScript is based. The specification is maintained by [ECMA International](https://www.ecma-international.org/) (technical committee TC39).

**Why a specification?**

- Ensures different implementations (browsers, Node.js) behave the same way.
- Defines syntax, types, objects, and algorithms.
- Allows developers to write code that works across environments.

**ECMAScript versions** are identified by their edition number (ES5, ES6/ES2015, ES2016, …). Since 2015, new features are released yearly.

**How to check what’s supported?**  
Websites like [caniuse.com](https://caniuse.com/) and [Node.green](https://node.green/) show compatibility tables.

**Example**: The `let` keyword was introduced in ES6. You can use it today in all modern environments.

```javascript
let message = "Hello, ES6!";
console.log(message);
```

> Understanding the specification helps you know what features are available and when you can safely use them without transpilers like Babel.
