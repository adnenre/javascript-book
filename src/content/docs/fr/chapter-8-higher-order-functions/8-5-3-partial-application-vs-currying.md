---
title: Application partielle vs Currying
sidebar:
  order: 3
  label: 8.5.3 Application partielle vs Currying
---

L’application partielle fixe un certain nombre d’arguments à une fonction, produisant une fonction avec une arité réduite. Le currying transforme une fonction multi‑arguments en une chaîne de fonctions unaires. Bien que liés, ils sont différents : le currying produit toujours des fonctions unaires ; l’application partielle peut fixer un nombre quelconque d’arguments.

```javascript
// Application partielle (non automatique)
function additionner(a, b, c) {
  return a + b + c;
}
const additionner5 = additionner.bind(null, 5); // fixe le premier argument à 5
console.log(additionner5(2, 3)); // 10

// Currying donne toujours des fonctions unaires
const additionnerCurry = (a) => (b) => (c) => a + b + c;
const additionner5Curry = additionnerCurry(5); // retourne b => c => 5 + b + c
console.log(additionner5Curry(2)(3)); // 10
```
