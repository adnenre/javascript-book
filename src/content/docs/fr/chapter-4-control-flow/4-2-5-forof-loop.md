---
title: Boucle for...of
sidebar:
  order: 5
  label: 4.2.5 Boucle for...of
---

La boucle for...of parcourt les objets itérables (tels que les tableaux, chaînes, maps, sets) et retourne les valeurs de chaque élément, et non leurs indices ou clés.

```javascript
const fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Affiche : pomme, banane, orange

// Fonctionne avec les chaînes
const salutation = "Bonjour";
for (let caractere of salutation) {
  console.log(caractere);
}
// Affiche : B, o, n, j, o, u, r
```
