---
title: Creation des tableaux
sidebar:
  order: 1
  label: 14.1 Creation des tableaux
---

Les tableaux en JavaScript sont utilisés pour stocker des collections ordonnées de valeurs. Ils peuvent être créés avec des littéraux de tableau, le constructeur `Array`, ou des méthodes statiques comme `Array.from()` et `Array.of()`.

### Points clés

- Littéral de tableau : `[]` avec des valeurs séparées par des virgules.
- Constructeur `Array` : `new Array(longueur)` ou `new Array(éléments)`.
- `Array.of()` : crée un tableau à partir des arguments, évitant le cas particulier d’un seul nombre.
- `Array.from()` : crée un tableau à partir d’un objet semblable à un tableau ou itérable.

### Exemple de code

```javascript
// Littéral de tableau
const fruits = ["pomme", "banane", "cerise"];

// Constructeur Array
const numbers = new Array(5); // tableau vide de longueur 5
const colors = new Array("rouge", "bleu"); // ["rouge", "bleu"]

// Array.of() – évite le piège du nombre unique
const arr1 = Array.of(7); // [7]
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]

// Array.from() – à partir d’une chaîne ou d’un objet array-like
const chars = Array.from("bonjour"); // ["b", "o", "n", "j", "o", "u", "r"]
const fromSet = Array.from(new Set([1, 2, 3])); // [1, 2, 3]
```
