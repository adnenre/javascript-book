---
title: Comprendre la récursion
sidebar:
  order: 1
  label: 9.1 Comprendre la récursion
---

La récursion est une technique de programmation où une fonction s’appelle elle‑même pour résoudre un problème en le décomposant en sous‑problèmes plus petits et similaires. Elle est particulièrement utile pour les tâches qui peuvent être définies en termes d’elles‑mêmes, comme le parcours de structur

```javascript
function compteARebours(n) {
  if (n <= 0) {
    console.log("Terminé !");
    return;
  }
  console.log(n);
  compteARebours(n - 1);
}
compteARebours(3);
// Affiche : 3, 2, 1, Terminé !
```
