---
title: Tableaux clairsemés
sidebar:
  order: 6
  label: 14.6 Tableaux clairsemés
---

Les tableaux creux sont des tableaux comportant des slots vides (trous) où aucun élément n’existe. Ils surviennent lorsque vous créez un tableau avec une longueur supérieure au nombre d’éléments, ou lorsque vous supprimez un élément avec `delete`. Les tableaux creux ne sont pas courants en JavaScript moderne ; il est préférable de les éviter car ils se comportent de manière inconsistante avec les méthodes d’itération.

### Points clés

- Les slots vides sont différents des valeurs `undefined`.
- La plupart des méthodes d’itération (comme `forEach`, `map`, `filter`) ignorent les slots vides.
- Des méthodes comme `find` et `includes` traitent parfois les slots vides comme `undefined`.
- Utilisez `Array.from()` pour convertir un tableau creux en dense (remplit les trous avec `undefined`).

### Exemple de code

```javascript
// Création de tableaux creux
const sparse = [1, , 3]; // trou à l’indice 1
console.log(sparse.length); // 3
console.log(sparse[1]); // undefined (mais c’est un trou)

const sparse2 = new Array(5); // tableau vide de longueur 5 (tous des trous)

// La suppression d’un élément crée un trou
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, empty, 3]

// L’itération ignore les trous
arr.forEach((x) => console.log(x)); // 1, 3

// Conversion en dense
const dense = Array.from(arr);
console.log(dense); // [1, undefined, 3]
```
