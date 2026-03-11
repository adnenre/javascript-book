---
title: Opérateur ternaire
sidebar:
  order: 6
  label: 3.6 Opérateur ternaire
---

L'opérateur ternaire (condition ? exprSiVrai : exprSiFaux) est un opérateur conditionnel concis qui retourne l'une de deux expressions selon une condition. C'est le seul opérateur JavaScript qui prend trois opérandes.

```javascript
let age = 20;
let statut = age >= 18 ? "majeur" : "mineur";
console.log(statut); // "majeur"
```
