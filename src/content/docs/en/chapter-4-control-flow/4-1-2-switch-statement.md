---
title: switch statement
sidebar:
  order: 2
  label: 4.1.2 switch statement
---

The switch statement evaluates an expression and matches its value to a case label, executing the associated block. A break prevents fall‑through to the next case. The default case runs if no match is found.

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // "Wednesday"
```
