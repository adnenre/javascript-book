---
title: L’objet Boolean
sidebar:
  order: 4
  label: 13.4 L’objet Boolean
---

L’objet `Boolean` est un wrapper pour les valeurs booléennes primitives. Il permet de créer des objets booléens, bien qu’ils soient rarement utilisés car les booléens primitifs sont plus efficaces. Tout objet, y compris un objet Boolean, est truthy même s’il encapsule `false`.

### Points clés

- Booléens primitifs : `true`, `false`.
- Constructeur `Boolean` : `new Boolean(value)` retourne un objet.
- Évitez d’utiliser les objets Boolean dans les conditions car ils sont toujours truthy.

### Exemple de code

```javascript
const boolPrimitive = true;
const boolObject = new Boolean(false);

console.log(typeof boolPrimitive); // "boolean"
console.log(typeof boolObject); // "object"
console.log(boolPrimitive === boolObject); // false

// Dangereux : boolObject est truthy !
if (boolObject) {
  console.log("Ceci s’exécutera !"); // s’exécute
}
```
