---
title: Opérateurs logiques
sidebar:
  order: 4
  label: 3.4 Opérateurs logiques
---

Les opérateurs logiques travaillent avec des valeurs booléennes ou des valeurs équivalentes. && (ET) retourne le premier opérande faux ou le dernier opérande vrai. || (OU) retourne le premier opérande vrai ou le dernier opérande faux. ?? (coalescence nulle) retourne l'opérande de droite uniquement si l'opérande de gauche est null ou undefined.

```javascript
let a = true;
let b = false;
console.log(a && b); // false (ET)
console.log(a || b); // true  (OU)
console.log(!a); // false (NON)

// Évaluation court-circuit
console.log(0 && "bonjour"); // 0
console.log(5 || "bonjour"); // 5
```
