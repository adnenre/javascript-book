---
title: Opérateur virgule
sidebar:
  order: 7
  label: 3.7 Opérateur virgule
---

L'opérateur virgule (,) évalue chacun de ses opérandes (de gauche à droite) et retourne la valeur du dernier opérande. Il est souvent utilisé dans les boucles for pour combiner plusieurs expressions.

```javascript
let resultat = (5 + 3, 10 - 2, 20 / 5);
console.log(resultat); // 4 (dernière expression)

// Utilisé dans les boucles
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(i, j);
}
```
