---
title: Object.freeze(), seal(), preventExtensions()
sidebar:
  order: 4
  label: 10.7.4 Object.freeze(), seal(), preventExtensions()
---

- `Object.freeze()` rend un objet immuable : impossible d’ajouter, supprimer ou modifier des propriétés.

- `Object.seal()` empêche d’ajouter ou supprimer des propriétés, mais les propriétés existantes peuvent être modifiées.

- `Object.preventExtensions()` empêche d’ajouter de nouvelles propriétés, mais les propriétés existantes peuvent être modifiées ou supprimées.

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // ignoré ou erreur
console.log(obj.a); // 1
```
