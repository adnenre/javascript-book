---
title: Fonctions d'ordre supérieur intégrées
sidebar:
  order: 7
  label: 8.7 Fonctions d'ordre supérieur intégrées
---

Vous utilisez peut-être déjà des fonctions d’ordre supérieur sans le savoir. Les exemples les plus courants sont les méthodes de tableau qui acceptent une fonction comme argument pour transformer, filtrer ou accumuler des données. Ces méthodes sont des outils essentiels pour la programmation fonctionnelle en JavaScript.

| HOF         | Rôle                                                                              | Exemple                                                  |
| ----------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `map()`     | Transforme chaque élément d’un tableau et retourne un nouveau tableau.            | `const double = nombres.map(n => n * 2);`                |
| `filter()`  | Crée un nouveau tableau avec uniquement les éléments qui satisfont une condition. | `const pairs = nombres.filter(n => n % 2 === 0);`        |
| `reduce()`  | Accumule les valeurs d’un tableau en une seule valeur (somme, moyenne, etc.).     | `const somme = nombres.reduce((acc, n) => acc + n, 0);`  |
| `forEach()` | Exécute une fonction une fois par élément, généralement pour ses effets de bord.  | `nombres.forEach(n => console.log(n));`                  |
| `sort()`    | Trie les éléments d’un tableau sur place, selon une fonction de comparaison.      | `const tries = noms.sort((a, b) => a.localeCompare(b));` |

### Exemples / Examples

```javascript
const nombres = [1, 2, 3, 4, 5];

// map
const double = nombres.map((n) => n * 2);
console.log(double); // [2, 4, 6, 8, 10]

// filter
const pairs = nombres.filter((n) => n % 2 === 0);
console.log(pairs); // [2, 4]

// reduce
const somme = nombres.reduce((acc, n) => acc + n, 0);
console.log(somme); // 15

// forEach
nombres.forEach((n) => console.log(n)); // 1,2,3,4,5

// sort
const fruits = ["banane", "pomme", "cerise"];
const tries = fruits.sort((a, b) => a.localeCompare(b));
console.log(tries); // ['banane', 'cerise', 'pomme']
```
