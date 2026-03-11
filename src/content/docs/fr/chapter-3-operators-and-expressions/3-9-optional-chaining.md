---
title: Chaînage optionnel
sidebar:
  order: 9
  label: 3.9 Chaînage optionnel
---

L'opérateur de chaînage optionnel (?.) permet de lire une propriété profondément imbriquée dans une chaîne d'objets sans avoir à vérifier explicitement chaque référence. Si une référence est null ou undefined, l'expression court‑circuite et retourne undefined.

```javascript
let utilisateur = {
  nom: "Jean",
  adresse: {
    ville: "Paris",
  },
};

console.log(utilisateur?.nom); // "Jean"
console.log(utilisateur?.adresse?.ville); // "Paris"
console.log(utilisateur?.contact?.tel); // undefined (pas d'erreur)

// Avec appels de fonction
let objet = {
  saluer: function () {
    return "Bonjour";
  },
};
console.log(objet.saluer?.()); // "Bonjour"
console.log(objet.auRevoir?.()); // undefined
```
