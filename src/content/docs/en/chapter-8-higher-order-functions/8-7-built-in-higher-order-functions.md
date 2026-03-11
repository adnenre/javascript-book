---
title: Built-in Higher-Order Functions
sidebar:
  order: 7
  label: 8.7 Built-in Higher-Order Functions
---

You may already be using higher‑order functions without realizing it. The most common examples are array methods that accept a function as an argument to transform, filter, or accumulate data. These methods are essential tools for functional programming in JavaScript.

| HOF         | Rôle                                                                              | Exemple                                                  |
| ----------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `map()`     | Transforme chaque élément d’un tableau et retourne un nouveau tableau.            | `const double = nombres.map(n => n * 2);`                |
| `filter()`  | Crée un nouveau tableau avec uniquement les éléments qui satisfont une condition. | `const pairs = nombres.filter(n => n % 2 === 0);`        |
| `reduce()`  | Accumule les valeurs d’un tableau en une seule valeur (somme, moyenne, etc.).     | `const somme = nombres.reduce((acc, n) => acc + n, 0);`  |
| `forEach()` | Exécute une fonction une fois par élément, généralement pour ses effets de bord.  | `nombres.forEach(n => console.log(n));`                  |
| `sort()`    | Trie les éléments d’un tableau sur place, selon une fonction de comparaison.      | `const tries = noms.sort((a, b) => a.localeCompare(b));` |

### Exemples / Examples

```javascript
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// forEach
numbers.forEach((n) => console.log(n)); // 1,2,3,4,5

// sort
const fruits = ["banana", "apple", "cherry"];
const sorted = fruits.sort((a, b) => a.localeCompare(b));
console.log(sorted); // ['apple', 'banana', 'cherry']
```
