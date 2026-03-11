---
title: do...while loop
sidebar:
  order: 3
  label: 4.2.3 do...while loop
---

The do...while loop is similar to while, but it guarantees at least one execution because the condition is checked after the block is executed.

```javascript
let i = 0;
do {
  console.log("i = " + i);
  i++;
} while (i < 3);
// Output: i = 0, i = 1, i = 2

// Always executes at least once
let j = 5;
do {
  console.log("j = " + j);
  j++;
} while (j < 3);
// Output: j = 5
```
