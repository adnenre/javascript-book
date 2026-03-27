---
title: Implémentation de méthodes de tableau personnalisées
sidebar:
  order: 8
  label: 15.8 Implémentation de méthodes de tableau personnalisées
---

Vous pouvez étendre le prototype de `Array` ou créer des fonctions utilitaires qui imitent les méthodes de tableau. Cela permet de comprendre le fonctionnement interne des méthodes natives et d’ajouter des fonctionnalités manquantes.

### Extension de `Array.prototype` (déconseillé dans les bibliothèques)

```javascript
// Méthode `sum` personnalisée
if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0);
  };
}
const nums = [1, 2, 3];
console.log(nums.sum()); // 6
```

### Création d’une fonction autonome

```javascript
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      // ignorer les trous
      result.push(callback(arr[i], i, arr));
    }
  }
  return result;
}
const doubled = customMap([1, 2, 3], (x) => x * 2);
console.log(doubled); // [2, 4, 6]
```

### Implémentation de `filter`

```javascript
function customFilter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const evens = customFilter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(evens); // [2, 4]
```

### Implémentation de `reduce`

```javascript
function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length === 2) {
    // Pas de valeur initiale fournie
    while (startIndex < arr.length && !(startIndex in arr)) {
      startIndex++;
    }
    if (startIndex >= arr.length) throw new TypeError("Reduce of empty array with no initial value");
    accumulator = arr[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = reducer(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}
const sum = customReduce([1, 2, 3], (acc, val) => acc + val, 0);
console.log(sum); // 6
```

### Remarques importantes

- Lors de l’extension des prototypes, utilisez `Object.defineProperty` pour rendre les propriétés non énumérables.
- Vérifiez toujours l’existence des méthodes pour éviter les collisions.
- Privilégiez les fonctions autonomes pour une meilleure compatibilité.
