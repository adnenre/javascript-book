---
title: The Call Stack in Recursion
sidebar:
  order: 3
  label: 9.3 The Call Stack in Recursion
---

Each recursive call adds a new frame to the call stack, storing the function’s local variables and the return address. When the base case is reached, the stack unwinds, returning values back up the chain. Too many recursive calls can cause a stack overflow.

```javascript
function trace(n) {
  console.log(`Entering: n = ${n}`);
  if (n <= 0) {
    console.log("Base case reached");
    return;
  }
  trace(n - 1);
  console.log(`Exiting: n = ${n}`);
}
trace(2);
// Output: Entering: 2, Entering: 1, Entering: 0, Base case, Exiting: 1, Exiting: 2

// Français
```
