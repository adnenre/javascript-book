---
title: Fonctions retournant des fonctions
sidebar:
  order: 3
  label: 8.3 Fonctions retournant des fonctions
---

Les fonctions peuvent retourner d’autres fonctions, créant ainsi une fermeture qui conserve l’accès à la portée de la fonction externe. Cela est utilisé pour les usines à fonctions, l’application partielle et la création de fonctions spécialisées.

```javascript
function multiplicateur(facteur) {
  return function (x) {
    return x * facteur;
  };
}
const double = multiplicateur(2);
console.log(double(5)); // 10
```
