---
title: Bitwise Operators
sidebar:
  order: 5
  label: 3.5 Bitwise Operators
---

Bitwise operators treat operands as 32‑bit signed integers and perform operations at the binary level. They include & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift), and >>> (unsigned right shift).

```javascript
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary

console.log(m & n); // 0001 -> 1 (AND)
console.log(m | n); // 0111 -> 7 (OR)
console.log(m ^ n); // 0110 -> 6 (XOR)
console.log(~m); // 1010 -> -6 (NOT)
console.log(m << 1); // 1010 -> 10 (left shift)
console.log(m >> 1); // 0010 -> 2 (right shift)
```
