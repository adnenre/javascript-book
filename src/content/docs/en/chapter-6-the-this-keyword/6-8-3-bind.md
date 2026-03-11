---
title: bind()
sidebar:
  order: 3
  label: 6.8.3 bind()
---

bind() creates a new function with this permanently set to the provided value. The new function can be called later, optionally with preset arguments.

```javascript
const boundGreet = greet.bind(person, "Marseille");
boundGreet("France"); // Alice lives in Marseille, France
```
