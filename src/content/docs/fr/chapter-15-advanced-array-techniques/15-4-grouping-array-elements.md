---
title: Regroupement des éléments du tableau
sidebar:
  order: 4
  label: 15.4 Regroupement des éléments du tableau
---

Le regroupement des éléments d’un tableau selon un critère est une opération courante. JavaScript fournit `Object.groupBy()` et `Map.groupBy()` (ES2024) comme méthodes intégrées pour simplifier le regroupement. Avant cela, on utilisait souvent `reduce()`.

### Utilisation de `Object.groupBy()`

Regroupe les éléments par une clé dérivée du callback. Retourne un objet dont les clés sont les clés de regroupement et les valeurs sont des tableaux d’éléments.

```javascript
const fruits = [
  { name: "pomme", category: "fruit" },
  { name: "carotte", category: "légume" },
  { name: "banane", category: "fruit" },
];

const grouped = Object.groupBy(fruits, (item) => item.category);
console.log(grouped);
// {
//   fruit: [{ name: "pomme", ... }, { name: "banane", ... }],
//   légume: [{ name: "carotte", ... }]
// }
```

### Utilisation de `Map.groupBy()`

Similaire à `Object.groupBy()`, mais retourne une Map, ce qui permet de conserver des clés non‑chaînes.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const byParity = Map.groupBy(numbers, (n) => (n % 2 === 0 ? "pair" : "impair"));
console.log(byParity); // Map { "impair" => [1,3,5], "pair" => [2,4,6] }
```

### Utilisation de `reduce()` pour le regroupement (fallback)

```javascript
const groupedReduce = fruits.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});
console.log(groupedReduce);
```
