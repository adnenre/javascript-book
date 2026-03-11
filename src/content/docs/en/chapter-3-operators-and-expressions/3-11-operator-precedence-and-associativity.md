---
title: Operator Precedence and Associativity
sidebar:
  order: 11
  label: 3.11 Operator Precedence and Associativity
---

Operator precedence determines the order in which operators are evaluated in expressions. Higher precedence operators are evaluated first. Associativity defines the evaluation order when operators have the same precedence (left‑to‑right or right‑to‑left). Parentheses can override precedence.

```javascript
// Multiplication has higher precedence than addition
let result1 = 2 + 3 * 4; // 14 (not 20)
let result2 = (2 + 3) * 4; // 20 (parentheses override precedence)

// Associativity: left-to-right for addition/subtraction
let result3 = 10 - 5 + 2; // 7 (left to right: (10-5)+2)

// Right-to-left associativity for assignment
let a, b, c;
a = b = c = 5; // c = 5, then b = c, then a = b (all become 5)
```
