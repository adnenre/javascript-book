---
title: Tableaux multidimensionnels
sidebar:
  order: 4
  label: 14.4 Tableaux multidimensionnels
---

JavaScript ne possède pas de tableaux multidimensionnels natifs, mais vous pouvez créer des tableaux de tableaux. Ils sont souvent utilisés pour les matrices, les grilles ou les structures de données imbriquées. Accédez aux éléments avec plusieurs indices.

### Points clés

- Les tableaux ne sont pas vraiment multidimensionnels ; ils sont imbriqués.
- Peuvent être irréguliers (les sous‑tableaux peuvent avoir des longueurs différentes).
- Utilisez des boucles imbriquées pour itérer.

### Exemple de code

```javascript
// Tableau 2D (matrice 3x3)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 6

// Tableau irrégulier
const jagged = [[1, 2], [3, 4, 5], [6]];

// Itération
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// Avec forEach
matrix.forEach((row) => {
  row.forEach((cell) => console.log(cell));
});
```
