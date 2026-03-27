---
title: Méthodes de modification (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)
sidebar:
  order: 1
  label: 14.3.1 Méthodes de modification (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)
---

Les méthodes mutatrices modifient le tableau original. Elles servent à ajouter, supprimer, réorganiser ou remplir des éléments sur place.

### Méthodes mutatrices courantes

| Méthode        | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| `push()`       | Ajoute un ou plusieurs éléments à la fin. Retourne la nouvelle longueur.      |
| `pop()`        | Supprime le dernier élément. Retourne l’élément supprimé.                     |
| `shift()`      | Supprime le premier élément. Retourne l’élément supprimé.                     |
| `unshift()`    | Ajoute un ou plusieurs éléments au début. Retourne la nouvelle longueur.      |
| `splice()`     | Ajoute, supprime ou remplace des éléments à un indice donné.                  |
| `sort()`       | Trie le tableau sur place (optionnellement avec une fonction de comparaison). |
| `reverse()`    | Inverse l’ordre des éléments sur place.                                       |
| `fill()`       | Remplit une plage d’éléments avec une valeur fixe.                            |
| `copyWithin()` | Copie une séquence d’éléments à une autre position dans le tableau.           |

### Exemple de code

```javascript
let arr = [1, 2, 3, 4];

arr.push(5); // arr = [1, 2, 3, 4, 5]
arr.pop(); // arr = [1, 2, 3, 4]
arr.unshift(0); // arr = [0, 1, 2, 3, 4]
arr.shift(); // arr = [1, 2, 3, 4]

arr.splice(1, 2, "a", "b"); // arr = [1, 'a', 'b', 4]
arr.sort(); // arr = [1, 4, 'a', 'b'] (lexicographique)
arr.reverse(); // arr = ['b', 'a', 4, 1]

arr.fill(0, 1, 3); // arr = ['b', 0, 0, 1]
arr.copyWithin(0, 2, 4); // arr = [0, 1, 0, 1]
```
