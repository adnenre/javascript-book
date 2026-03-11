---
title: Propriétés calculées
sidebar:
  order: 3
  label: 10.3 Propriétés calculées
---

Les noms de propriétés calculés permettent d’utiliser une expression entre crochets comme clé d’une propriété lors de la création d’un objet

```javascript
const cle = "couleur";
const voiture = {
  marque: "Toyota",
  [cle]: "rouge",
};
console.log(voiture.couleur); // rouge
```
