---
title: Méthodes d'accès (concat, slice, join, indexOf, lastIndexOf, includes)
sidebar:
  order: 2
  label: 14.3.2 Méthodes d'accès (concat, slice, join, indexOf, lastIndexOf, includes)
---

Les méthodes d’accès ne modifient pas le tableau original ; elles retournent un nouveau tableau ou une valeur dérivée du tableau.

### Méthodes d’accès courantes

| Méthode         | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `concat()`      | Fusionne deux ou plusieurs tableaux et retourne un nouveau tableau. |
| `slice()`       | Extrait une partie du tableau et retourne un nouveau tableau.       |
| `join()`        | Concatène tous les éléments en une chaîne.                          |
| `indexOf()`     | Retourne le premier indice où une valeur est trouvée ; -1 sinon.    |
| `lastIndexOf()` | Retourne le dernier indice où une valeur est trouvée.               |
| `includes()`    | Vérifie si une valeur existe dans le tableau.                       |

### Exemple de code

```javascript
const arr = [1, 2, 3, 4, 2];

const newArr = arr.concat([5, 6]); // [1,2,3,4,2,5,6]
const sliced = arr.slice(1, 4); // [2,3,4]
const str = arr.join("-"); // "1-2-3-4-2"

console.log(arr.indexOf(2)); // 1
console.log(arr.lastIndexOf(2)); // 4
console.log(arr.includes(3)); // true
console.log(arr.includes(5)); // false

// Tableau original inchangé
console.log(arr); // [1, 2, 3, 4, 2]
```
