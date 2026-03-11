---
title: Property Accessors (dot vs bracket)
sidebar:
  order: 2
  label: 10.2 Property Accessors (dot vs bracket)
---

Properties can be accessed using dot notation (obj.key) or bracket notation (obj['key']). Bracket notation allows dynamic keys and keys that are not valid identifiers.

```javascript
const user = { name: "Bob", "favorite color": "blue" };
console.log(user.name); // Bob
console.log(user["favorite color"]); // blue
```
