---
title: Object.assign()
sidebar:
  order: 2
  label: 10.7.2 Object.assign()
---

Object.assign() copie les propriétés énumérables propres des objets source vers un objet cible.

```javascript
const cible = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(cible, source);
console.log(cible); // { a: 1, b: 2, c: 3 }
```
