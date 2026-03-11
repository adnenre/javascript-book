---
title: Conditional (ternary) operator
sidebar:
  order: 3
  label: 4.1.3 Conditional (ternary) operator
---

The ternary operator (condition ? exprIfTrue : exprIfFalse) provides a concise way to write simple conditional expressions. It returns one of two values based on the condition.

```javascript
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Nested ternary (use with caution)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // "B"
```
