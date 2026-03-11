---
title: Qu'est-ce que le currying ?
sidebar:
  order: 1
  label: 8.5.1 Qu'est-ce que le currying ?
---

Le currying transforme une fonction qui prend plusieurs arguments en une séquence de fonctions, chacune prenant un seul argument. Cela permet l’application partielle et crée des fonctions plus réutilisables et composables.

```javascript
// Fonction normale
function additionner(a, b, c) {
  return a + b + c;
}

// Version curryfiée
function additionnerCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(additionnerCurry(1)(2)(3)); // 6
```
