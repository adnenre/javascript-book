---
title: Object.getPrototypeOf() and Object.setPrototypeOf()
sidebar:
  order: 4
  label: 11.4 Object.getPrototypeOf() and Object.setPrototypeOf()
---

- **`Object.getPrototypeOf(obj)`** : Retourne le prototype (c’est-à-dire la valeur de la propriété interne `[[Prototype]]`) de l’objet spécifié.
- **`Object.setPrototypeOf(obj, prototype)`** : Définit le prototype d’un objet spécifié. À utiliser avec prudence car cela peut nuire aux performances.

Ces méthodes sont la manière moderne et standard de lire et modifier les prototypes, préférée à `__proto__`.

### Exemple de code

```javascript
const parent = { name: "parent" };
const child = {};

Object.setPrototypeOf(child, parent);
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(child.name); // "parent"
```
