---
title: Loop Control (break, continue, labeled statements)
sidebar:
  order: 3
  label: 4.3 Loop Control (break, continue, labeled statements)
---

Loop control statements modify the normal execution of loops:

break – Terminates the current loop or switch statement and transfers control to the statement following the terminated loop.

continue – Skips the rest of the current iteration and jumps to the next iteration of the loop.

Labels – Provide a way to identify a loop, allowing break or continue to target a specific outer loop when loops are nested.

```javascript
// break: exit the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0,1,2,3,4

// continue: skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0,1,3,4

// labeled break (exiting nested loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: i=0,j=0; i=0,j=1; i=0,j=2; i=1,j=0
```
