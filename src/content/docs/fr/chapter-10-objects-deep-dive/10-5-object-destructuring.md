---
title: Destructuration d’objet
sidebar:
  order: 5
  label: 10.5 Destructuration d’objet
---

La destructuration d’objet extrait des propriétés d’un objet dans des variables, offrant une manière concise de déballer des valeurs.

```javascript
const utilisateur = { nom: "Charlie", age: 25 };
const { nom, age } = utilisateur;
console.log(nom); // Charlie
console.log(age); // 25

// Avec renommage
const { nom: nomUtilisateur } = utilisateur;
console.log(nomUtilisateur); // Charlie
```
