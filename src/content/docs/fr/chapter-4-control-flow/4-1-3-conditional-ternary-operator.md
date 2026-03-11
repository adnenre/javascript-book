---
title: Opérateur conditionnel (ternaire)
sidebar:
  order: 3
  label: 4.1.3 Opérateur conditionnel (ternaire)
---

L'opérateur ternaire (condition ? exprSiVrai : exprSiFaux) offre une manière concise d'écrire des expressions conditionnelles simples. Il retourne l'une des deux valeurs selon la condition.

```javascript
let agePersonne = 20;
let statut = agePersonne >= 18 ? "majeur" : "mineur";
console.log(statut); // "majeur"

// Ternaire imbriqué (à utiliser avec prudence)
let note = 85;
let mention = note >= 90 ? "A" : note >= 80 ? "B" : "C";
console.log(mention); // "B"
```
