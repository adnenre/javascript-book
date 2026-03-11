---
title: Modèle Module
sidebar:
  order: 3
  label: 7.4.3 Modèle Module
---

Le modèle module utilise une IIFE pour créer une fermeture qui encapsule des données privées et expose une API publique.

```javascript
const moduleCompteur = (function () {
  let compteur = 0;
  return {
    incrementer() {
      compteur++;
    },
    decrementer() {
      compteur--;
    },
    getCompteur() {
      return compteur;
    },
  };
})();
moduleCompteur.incrementer();
console.log(moduleCompteur.getCompteur()); // 1
```
