---
title: Understanding Recursion
sidebar:
  order: 1
  label: 9.1 Understanding Recursion
---

Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. It is especially useful for tasks that can be defined in terms of themselves, such as traversing tree structures or computing mathematical sequences.

```javascript
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
countdown(3);
// Output: 3, 2, 1, Done!
```
