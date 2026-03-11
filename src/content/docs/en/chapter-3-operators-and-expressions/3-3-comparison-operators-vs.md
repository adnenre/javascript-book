---
title: Comparison Operators (== vs ===)
sidebar:
  order: 3
  label: 3.3 Comparison Operators (== vs ===)
---

Comparison operators compare two values and return a boolean. Loose equality (==) compares values after type coercion, while strict equality (===) compares both value and type without coercion. Other operators include !=, !==, >, <, >=, <=.
<, >=, <=.

```javascript
console.log(5 == "5"); // true (value equality only)
console.log(5 === "5"); // false (value AND type equality)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
```
