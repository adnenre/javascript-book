---
title: Default Parameters
sidebar:
  order: 1
  label: 5.7.1 Default Parameters
---

Default parameters allow initializing parameters with default values if no argument or undefined is passed.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```
