---
title: Global Context
sidebar:
  order: 2
  label: 6.2 Global Context
---

In the global execution context (outside any function), `this` refers to the global object. In browsers, that's `window`; in Node.js, it's `global`. In strict mode, it remains the global object.

```javascript
console.log(this === window); // true (in browser)
```
