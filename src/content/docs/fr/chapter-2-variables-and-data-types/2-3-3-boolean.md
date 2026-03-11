---
title: Boolean
sidebar:
  order: 3
  label: 2.3.3 Boolean
---

Le type `boolean` n'a que deux valeurs : `true` et `false`. Elles sont souvent utilisées dans les conditions et les opérations logiques.

```javascript
let connecte = true;
let pret = false;
```

Les booléens résultent de comparaisons :

```javascript
console.log(5 > 3); // true
console.log(5 === 3); // false
```

On peut aussi les créer avec la fonction Boolean ou le double NON (!!) :

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("bonjour")); // true
console.log(!!"bonjour"); // true
```

Valeurs fausses (évaluées à false) : false, 0, '' (chaîne vide), null, undefined, NaN. Tout le reste est vrai.
