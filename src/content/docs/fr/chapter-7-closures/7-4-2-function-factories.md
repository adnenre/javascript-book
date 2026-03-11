---
title: Function Factories
sidebar:
  order: 2
  label: 7.4.2 Function Factories
---

Les fermetures (closures) permettent de créer des Facories – des fonctions qui génèrent des fonctions spécialisées avec un comportement prédéfini.

```javascript
function multiplicateur(facteur) {
  return function (x) {
    return x * facteur;
  };
}
const double = multiplicateur(2);
const triple = multiplicateur(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```
