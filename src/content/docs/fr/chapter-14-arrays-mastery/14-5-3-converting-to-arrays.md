---
title: Conversion en tableaux
sidebar:
  order: 3
  label: 14.5.3 Conversion en tableaux
---

Vous devez souvent convertir des objets semblables à des tableaux ou des itérables en vrais tableaux pour utiliser les méthodes de tableau. Les moyens les plus courants sont `Array.from()`, l’opérateur de décomposition (`...`) et `Array.prototype.slice.call()`.

### Points clés

- `Array.from(arrayLike, mapFn)` – convertit et éventuellement applique une fonction de transformation.
- Opérateur de décomposition `[...arrayLike]` – fonctionne sur les itérables.
- `Array.prototype.slice.call(arrayLike)` – conversion à l’ancienne.

### Exemple de code

```javascript
// Objet semblable à un tableau
const arrayLike = { 0: "a", 1: "b", length: 2 };

// Méthode 1 : Array.from
const arr1 = Array.from(arrayLike);
console.log(arr1); // ["a", "b"]

// Avec fonction de transformation
const arrMapped = Array.from(arrayLike, (x) => x.toUpperCase());
console.log(arrMapped); // ["A", "B"]

// Méthode 2 : Opérateur de décomposition (nécessite un itérable)
// Pour un objet array-like, il doit être itérable (ce n’est pas le cas par défaut)
// Mais fonctionne sur NodeList, arguments, etc.
const nodeList = document.querySelectorAll("div");
const arr2 = [...nodeList];

// Méthode 3 : slice
const arr3 = Array.prototype.slice.call(arrayLike);
console.log(arr3); // ["a", "b"]
```
