---
title: Que sont les fermetures (closures)?
sidebar:
  order: 2
  label: 7.2 Que sont les fermetures (closures)?
---

Une fermeture (closure) est la combinaison d’une fonction et de son environnement lexical. Elle permet à une fonction de conserver l’accès aux variables de sa portée externe même après que la fonction externe a terminé son exécution. Les fermetures sont créées chaque fois qu’une fonction est définie à l’intérieur d’une autre fonction.

```javascript
function fabriqueCompteur() {
  let compteur = 0;
  return function () {
    compteur++;
    return compteur;
  };
}
const compteur = fabriqueCompteur();
console.log(compteur()); // 1
console.log(compteur()); // 2
```
