---
title: writable
sidebar:
  order: 2
  label: 10.6.2 writable
---

Si writable est true, la valeur de la propriété peut être modifiée ; sinon elle est en lecture seule.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
obj.x = 20; // ignoré ou erreur en mode strict
console.log(obj.x); // 10
```
