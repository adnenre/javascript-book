---
title: Opérateur de coalescence nulle
sidebar:
  order: 10
  label: 3.10  Opérateur de coalescence nulle
---

L'opérateur de coalescence nulle (??) retourne l'opérande de droite lorsque l'opérande de gauche est null ou undefined ; sinon, il retourne l'opérande de gauche. Contrairement à ||, il ne traite pas les autres valeurs fausses (0, "", false) comme nulles.

```javascript
let valeur1 = null;
let valeur2 = undefined;
let valeur3 = 0;
let valeur4 = "";

console.log(valeur1 ?? "défaut"); // "défaut"
console.log(valeur2 ?? "défaut"); // "défaut"
console.log(valeur3 ?? "défaut"); // 0 (pas null/undefined)
console.log(valeur4 ?? "défaut"); // "" (pas null/undefined)

// Différence avec ||
console.log(0 || "défaut"); // "défaut"
console.log(0 ?? "défaut"); // 0
console.log("" || "défaut"); // "défaut"
console.log("" ?? "défaut"); // ""
```
