---
title: Array Properties (length)
sidebar:
  order: 2
  label: 14.2 Array Properties (length)
---

La propriété `length` d’un tableau retourne le nombre d’éléments. C’est une propriété dynamique ; vous pouvez la définir pour tronquer ou étendre le tableau. Lorsque vous définissez une nouvelle longueur, le tableau est tronqué ou rempli de slots vides.

### Points clés

- `length` est un entier non signé 32 bits.
- Définir `length` à une valeur plus petite supprime les éléments au‑delà de la nouvelle longueur.
- Définir `length` à une valeur plus grande ajoute des slots vides (tableau creux).
- L’indice maximal + 1 détermine la longueur.

### Exemple de code

```javascript
const arr = [10, 20, 30, 40];
console.log(arr.length); // 4

// Troncature
arr.length = 2;
console.log(arr); // [10, 20]

// Extension (crée des slots vides)
arr.length = 5;
console.log(arr); // [10, 20, empty × 3]

// Accès au‑delà de la longueur retourne undefined
console.log(arr[4]); // undefined
```
