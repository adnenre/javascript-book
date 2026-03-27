---
title: Opérations sur les tableaux immuables
sidebar:
  order: 7
  label: 15.7 Opérations sur les tableaux immuables
---

Les opérations immuables ne modifient pas le tableau original mais retournent un nouveau tableau avec les modifications. Ce modèle est important en programmation fonctionnelle et dans la gestion d’état (par ex., Redux). JavaScript fournit de nombreuses méthodes qui retournent naturellement de nouveaux tableaux.

### Concepts clés

- Les **méthodes mutatrices** (ex. `push`, `pop`, `sort`) modifient le tableau original.
- Les **alternatives immuables** créent d’abord une copie ou utilisent des méthodes non mutatrices.

### Opérations immuables courantes

```javascript
const original = [1, 2, 3, 4];

// Ajout d’éléments (immuable)
const withAdded = [...original, 5]; // [1,2,3,4,5]
const withAddedFront = [0, ...original]; // [0,1,2,3,4]

// Suppression d’éléments
const withoutLast = original.slice(0, -1); // [1,2,3]
const withoutFirst = original.slice(1); // [2,3,4]
const withoutIndex = [...original.slice(0, 2), ...original.slice(3)]; // [1,2,4]

// Mise à jour d’un élément
const updated = original.map((val, i) => (i === 2 ? 99 : val)); // [1,2,99,4]

// Tri immuable
const sorted = [...original].sort((a, b) => b - a); // [4,3,2,1]

// Inversion immuable
const reversed = [...original].reverse(); // [4,3,2,1]

// Utilisation de `toSorted`, `toReversed`, `toSpliced` (ES2023)
const toSorted = original.toSorted((a, b) => a - b); // [1,2,3,4]
const toReversed = original.toReversed(); // [4,3,2,1]
const toSpliced = original.toSpliced(1, 2, 99); // [1,99,4]
```

### Méthodes immuables ES2023

- `toSorted()` – retourne un nouveau tableau trié
- `toReversed()` – retourne un nouveau tableau inversé
- `toSpliced()` – retourne un nouveau tableau avec l’opération splice
- `with()` – retourne un nouveau tableau avec un élément remplacé à un indice donné

```javascript
const arr = [1, 2, 3, 4];
const newArr = arr.with(2, 99); // [1,2,99,4]
console.log(arr); // inchangé [1,2,3,4]
```
