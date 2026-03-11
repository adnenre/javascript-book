---
title: La pile d’appels dans la récursion
sidebar:
  order: 3
  label: 9.3 La pile d’appels dans la récursion
---

Chaque appel récursif ajoute une nouvelle trame à la pile d’appels, stockant les variables locales de la fonction et l’adresse de retour. Lorsque le cas de base est atteint, la pile se dépile, renvoyant les valeurs le long de la chaîne. Trop d’appels récursifs peuvent provoquer un débordement de pile.

```javascript
function trace(n) {
  console.log(`Entrée : n = ${n}`);
  if (n <= 0) {
    console.log("Cas de base atteint");
    return;
  }
  trace(n - 1);
  console.log(`Sortie : n = ${n}`);
}
trace(2);
// Affiche : Entrée : 2, Entrée : 1, Entrée : 0, Cas de base, Sortie : 1, Sortie : 2
```
