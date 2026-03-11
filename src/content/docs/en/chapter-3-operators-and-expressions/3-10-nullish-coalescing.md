---
title: Nullish Coalescing (??)
sidebar:
  order: 10
  label: 3.10 Nullish Coalescing (??)
---

The nullish coalescing operator (??) returns the right‑hand operand when the left‑hand operand is null or undefined; otherwise, it returns the left‑hand operand. Unlike ||, it does not treat other falsy values (0, "", false) as nullish.

```javascript
let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = "";

console.log(value1 ?? "default"); // "default"
console.log(value2 ?? "default"); // "default"
console.log(value3 ?? "default"); // 0 (not null/undefined)
console.log(value4 ?? "default"); // "" (not null/undefined)

// Difference from ||
console.log(0 || "default"); // "default"
console.log(0 ?? "default"); // 0
console.log("" || "default"); // "default"
console.log("" ?? "default"); // ""
```
