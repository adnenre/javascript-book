---
title: Boucle for...in
sidebar:
  order: 4
  label: 4.2.4 Boucle for...in
---

La boucle for...in parcourt les noms de propriétés énumérables (clés) d'un objet. Elle est couramment utilisée pour parcourir les propriétés d'un objet, mais peut aussi itérer sur les indices d'un tableau.

```javascript
const personne = {
  nom: "Jean",
  age: 30,
  ville: "Paris",
};

for (let cle in personne) {
  console.log(cle + " : " + personne[cle]);
}
// Affiche : nom : Jean, age : 30, ville : Paris

// Avec les tableaux (itération sur les indices)
const couleurs = ["rouge", "vert", "bleu"];
for (let index in couleurs) {
  console.log(index + " : " + couleurs[index]);
}
// Affiche : 0 : rouge, 1 : vert, 2 : bleu
```
