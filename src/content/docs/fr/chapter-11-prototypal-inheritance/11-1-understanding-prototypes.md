---
title: Comprendre les prototypes
sidebar:
  order: 1
  label: 11.1 Comprendre les prototypes
---

En JavaScript, les **prototypes** sont le mécanisme par lequel les objets héritent de fonctionnalités les uns des autres. Chaque objet possède une propriété interne `[[Prototype]]` (accessible via `__proto__` ou `Object.getPrototypeOf()`) qui pointe vers un autre objet. Lorsque vous essayez d’accéder à une propriété sur un objet et qu’elle n’existe pas, JavaScript remonte la chaîne de prototypes jusqu’à trouver la propriété ou atteindre `null`.

Les prototypes permettent de partager des méthodes et des propriétés entre instances, économisant de la mémoire et permettant l’héritage.

### Exemple de code

```javascript
// Un objet simple avec un prototype
const animal = {
  eats: true,
  walk() {
    console.log("L'animal marche");
  },
};

const rabbit = Object.create(animal); // le prototype de rabbit est animal
rabbit.jumps = true;

console.log(rabbit.eats); // true (hérité de animal)
rabbit.walk(); // "L'animal marche"
```
