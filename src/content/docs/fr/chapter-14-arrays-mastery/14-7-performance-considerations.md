---
title: Considérations relatives aux performances
sidebar:
  order: 7
  label: 14.7 Considérations relatives aux performances
---

Lorsque vous travaillez avec des tableaux, les performances peuvent varier selon les opérations effectuées. Comprendre comment les moteurs JavaScript optimisent les opérations sur les tableaux peut vous aider à écrire du code efficace.

### Points clés

- **Préallouer la longueur** lorsque vous connaissez la taille pour éviter les coûts de redimensionnement dynamique.
- Les **méthodes mutatrices** modifient sur place et sont généralement plus rapides que la création de nouveaux tableaux.
- **Évitez les tableaux creux** – ils sont plus lents et ont un comportement incohérent.
- Utilisez des **boucles `for`** plutôt que `forEach` lorsque les performances sont critiques (bien que les moteurs modernes optimisent bien les deux).
- **Évitez `delete`** – cela crée des trous ; utilisez `splice` ou définissez à `undefined`.
- Les **tableaux typés** (Uint8Array, etc.) offrent de meilleures performances pour les données numériques.
- **`slice` et `concat`** créent des copies superficielles ; soyez attentif à l’utilisation de la mémoire.

### Exemple de code

```javascript
// Préallocation
const size = 1000000;
const arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = i;
}

// Mutateur vs accesseur
const numbers = [1, 2, 3, 4, 5];
// Rapide : inversion sur place
numbers.reverse();

// Plus lent : crée un nouveau tableau
const reversed = numbers.slice().reverse();

// Éviter les tableaux creux
const dense = Array.from({ length: 10000 }, (_, i) => i);
// au lieu de sparse = new Array(10000); puis assignation d’indices individuels

// Utiliser les tableaux typés pour un travail numérique intensif
const typed = new Float64Array(10000);
for (let i = 0; i < typed.length; i++) {
  typed[i] = Math.random();
}
```
