---
title: Précédence et associativité des opérateurs
sidebar:
  order: 11
  label: 3.11  Précédence et associativité des opérateurs
---

La précédence des opérateurs détermine l'ordre dans lequel les opérateurs sont évalués dans les expressions. Les opérateurs de précédence plus élevée sont évalués en premier. L'associativité définit l'ordre d'évaluation lorsque les opérateurs ont la même précédence (de gauche à droite ou de droite à gauche). Les parenthèses peuvent surcharger la précédence.

```javascript
// La multiplication a une précédence plus élevée que l'addition
let resultat1 = 2 + 3 * 4; // 14 (pas 20)
let resultat2 = (2 + 3) * 4; // 20 (les parenthèses surchargent la précédence)

// Associativité : gauche à droite pour addition/soustraction
let resultat3 = 10 - 5 + 2; // 7 (gauche à droite : (10-5)+2)

// Associativité droite à gauche pour l'affectation
let x, y, z;
x = y = z = 5; // z = 5, puis y = z, puis x = y (tous deviennent 5)
```
