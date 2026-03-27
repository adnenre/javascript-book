---
title: Méthodes d'itération (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)
sidebar:
  order: 3
  label: 14.3.3 Méthodes d'itération (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)
---

Les méthodes d’itération parcourent le tableau et exécutent une fonction pour chaque élément. Elles peuvent produire un nouveau tableau, une valeur unique, ou un booléen.

### Méthodes d’itération courantes

| Méthode           | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `forEach()`       | Exécute une fonction pour chaque élément.                                                |
| `map()`           | Crée un nouveau tableau avec les résultats de l’appel d’une fonction sur chaque élément. |
| `filter()`        | Crée un nouveau tableau avec les éléments qui satisfont un test.                         |
| `reduce()`        | Réduit le tableau à une seule valeur en accumulant de gauche à droite.                   |
| `reduceRight()`   | Identique à reduce mais de droite à gauche.                                              |
| `some()`          | Retourne true si au moins un élément satisfait le test.                                  |
| `every()`         | Retourne true si tous les éléments satisfont le test.                                    |
| `find()`          | Retourne le premier élément qui satisfait le test.                                       |
| `findIndex()`     | Retourne l’indice du premier élément qui satisfait le test.                              |
| `findLast()`      | Retourne le dernier élément qui satisfait le test (ES2023).                              |
| `findLastIndex()` | Retourne l’indice du dernier élément qui satisfait le test (ES2023).                     |

### Exemple de code

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((n) => console.log(n * 2)); // 2,4,6,8,10

// map
const doubled = numbers.map((n) => n * 2); // [2,4,6,8,10]

// filter
const evens = numbers.filter((n) => n % 2 === 0); // [2,4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// some/every
console.log(numbers.some((n) => n > 4)); // true
console.log(numbers.every((n) => n > 0)); // true

// find/findIndex
const firstLarge = numbers.find((n) => n > 3); // 4
const indexLarge = numbers.findIndex((n) => n > 3); // 3

// findLast/findLastIndex (ES2023)
const lastLarge = numbers.findLast((n) => n > 3); // 5
const lastIndex = numbers.findLastIndex((n) => n > 3); // 4
```
