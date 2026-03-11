---
title: Boucle do...while
sidebar:
  order: 3
  label: 4.2.3 Boucle do...while
---

La boucle do...while est similaire à while, mais elle garantit au moins une exécution car la condition est vérifiée après l'exécution du bloc.

```javascript
let i = 0;
do {
  console.log("i = " + i);
  i++;
} while (i < 3);
// Affiche : i = 0, i = 1, i = 2

// S'exécute au moins une fois
let j = 5;
do {
  console.log("j = " + j);
  j++;
} while (j < 3);
// Affiche : j = 5
```
