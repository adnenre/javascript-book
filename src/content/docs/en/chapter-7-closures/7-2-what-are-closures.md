---
title: What are Closures?
sidebar:
  order: 2
  label: 7.2 What are Closures?
---

A closure is the combination of a function bundled together with its lexical environment. It allows a function to retain access to variables from its outer scope even after the outer function has finished executing. Closures are created every time a function is defined inside another function.

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
