---
title: Clonage profond d’objet
sidebar:
  order: 4
  label: 9.5.4 Clonage profond d’objet
---

```javascript
function clonerProfond(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(clonerProfond);
  const clone = {};
  for (let cle in obj) {
    clone[cle] = clonerProfond(obj[cle]);
  }
  return clone;
}
const original = { a: 1, b: { c: 2 } };
const copie = clonerProfond(original);
copie.b.c = 42;
console.log(original.b.c); // 2 (inchangé)
```
