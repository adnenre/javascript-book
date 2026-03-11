---
title: if, else if, else
sidebar:
  order: 1
  label: 4.1.1 if, else if, else
---

The if statement executes a block of code if a specified condition is true. Optional else if blocks test additional conditions, and an else block executes if none of the preceding conditions are true.

```javascript
let age = 20;

if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 65) {
  console.log("Adult");
} else {
  console.log("Senior");
}
```
