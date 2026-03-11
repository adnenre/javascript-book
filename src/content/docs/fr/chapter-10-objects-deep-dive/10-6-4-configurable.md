---
title: configurable
sidebar:
  order: 4
  label: 10.6.4 configurable
---

Si configurable est true, le descripteur peut être modifié et la propriété peut être supprimée ; sinon elle ne peut pas être reconfigurée ni retirée.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 1, configurable: false });
delete obj.x; // false ou erreur en mode strict
console.log(obj.x); // 1
```
