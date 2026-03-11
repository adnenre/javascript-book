---
title: Reference Data Types
sidebar:
  order: 4
  label: 2.4 Reference Data Types
---

Les types référence (aussi appelés objets) stockent des **références** vers des valeurs en mémoire. Lorsque vous assignez un objet à une variable, la variable contient une référence (pointeur) vers les données réelles, pas les données elles‑mêmes.

Les types primitifs sont comparés par valeur ; les types référence sont comparés par référence.

```javascript
let a = { nom: "Alice" };
let b = { nom: "Alice" };
console.log(a === b); // false – références différentes
```

Les principaux types référence sont Object, Array et Function. Nous les abordons ci‑dessous.
