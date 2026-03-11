---
title: Les fonctions comme citoyens de première classe
sidebar:
  order: 1
  label: 8.1 Les fonctions comme citoyens de première classe
---

En JavaScript, les fonctions sont traitées comme des citoyens de première classe, ce qui signifie qu'elles peuvent être assignées à des variables, passées en argument à d’autres fonctions, retournées par des fonctions et stockées dans des structures de données. Cela permet des modèles de programmation fonctionnelle puissants.

```javascript
const saluer = function (nom) {
  return `Bonjour, ${nom}`;
};
console.log(saluer("Alice")); // Bonjour, Alice
```
