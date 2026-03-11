---
title: Composition de fonctions
sidebar:
  order: 4
  label: 8.4 Composition de fonctions
---

La composition de fonctions est le processus qui consiste à combiner deux ou plusieurs fonctions pour en produire une nouvelle. Le résultat d’une fonction est passé comme entrée à la suivante. Cela permet de construire des opérations complexes à partir de blocs simples.

```javascript
const ajouter1 = (x) => x + 1;
const doubler = (x) => x * 2;
const composee = (x) => doubler(ajouter1(x));
console.log(composee(3)); // 8

// Compose générique
const composer = (f, g) => (x) => f(g(x));
const ajouter1PuisDoubler = composer(doubler, ajouter1);
console.log(ajouter1PuisDoubler(3)); // 8
```
