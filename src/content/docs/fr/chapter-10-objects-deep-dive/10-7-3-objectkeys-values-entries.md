---
title: Object.keys(), values(), entries()
sidebar:
  order: 3
  label: 10.7.3 Object.keys(), values(), entries()
---

Ces méthodes retournent respectivement des tableaux des clés, des valeurs et des paires clé‑valeur des propriétés énumérables propres d’un objet.

```javascript
const utilisateur = { nom: "Alice", age: 30 };
console.log(Object.keys(utilisateur)); // ['nom', 'age']
console.log(Object.values(utilisateur)); // ['Alice', 30]
console.log(Object.entries(utilisateur)); // [['nom', 'Alice'], ['age', 30]]
```
