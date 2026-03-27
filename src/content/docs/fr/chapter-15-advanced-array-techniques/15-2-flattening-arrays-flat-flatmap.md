---
title: Aplatissement des tableaux (flat, flatMap)
sidebar:
  order: 2
  label: 15.2 Aplatissement des tableaux (flat, flatMap)
---

ES2019 a introduit `Array.prototype.flat()` et `Array.prototype.flatMap()` pour simplifier le travail avec les tableaux imbriqués.

### `flat()`

Aplatit les tableaux imbriqués jusqu’à une profondeur spécifiée. La profondeur par défaut est 1. Retourne un nouveau tableau avec les éléments des sous‑tableaux concaténés.

```javascript
const nested = [1, [2, [3, [4]]]];
console.log(nested.flat()); // [1, 2, [3, [4]]]
console.log(nested.flat(2)); // [1, 2, 3, [4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
```

### `flatMap()`

D’abord applique une fonction de transformation à chaque élément, puis aplatit le résultat d’un niveau. Équivalent à `map().flat(1)`, mais plus efficace.

```javascript
const words = ["bonjour", "monde"];
const letters = words.flatMap((word) => word.split(""));
console.log(letters); // ["b","o","n","j","o","u","r","m","o","n","d","e"]

// Transformation et filtrage en une passe
const numbers = [1, 2, 3, 4];
const doubledEven = numbers.flatMap((n) => (n % 2 === 0 ? [n * 2] : []));
console.log(doubledEven); // [4, 8]
```

### Points clés

- `flat()` supprime les slots vides dans les tableaux (les rend denses).
- `flatMap()` est idéal pour transformer en plusieurs valeurs ou pour filtrer tout en transformant.

```

```
