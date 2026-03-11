---
title: How Closures Work
sidebar:
  order: 3
  label: 7.3 How Closures Work
---

When a function is defined, it captures the scope chain at that moment. The closure retains references to the outer variables, not copies. This means that changes to those variables are reflected in the closure. JavaScript engines manage memory by keeping those variables alive as long as any closure referencing them exists.

```javascript
function outer() {
  let value = 10;
  function inner() {
    console.log(value);
  }
  value = 20; // changing after inner definition
  return inner;
}
const fn = outer();
fn(); // 20 (not 10)
```
