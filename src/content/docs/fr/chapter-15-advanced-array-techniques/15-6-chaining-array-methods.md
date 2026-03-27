---
title: Méthodes de chaînage de tableaux
sidebar:
  order: 6
  label: 15.6 Méthodes de chaînage de tableaux
---

L’enchaînement des méthodes de tableau permet d’écrire des transformations de données déclaratives et lisibles. Comme la plupart des méthodes de tableau retournent un nouveau tableau (ou une valeur), vous pouvez les enchaîner séquentiellement. C’est un modèle central de la programmation fonctionnelle avec les tableaux.

### Avantages

- Lisibilité améliorée
- Déclaratif plutôt qu’impératif
- Facilité de composition des opérations

### Schémas d’enchaînement courants

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter((n) => n % 2 === 0) // [2,4,6,8,10]
  .map((n) => n * 2) // [4,8,12,16,20]
  .reduce((sum, n) => sum + n, 0); // 60

console.log(result); // 60
```

### Enchaînement avec `flatMap`

```javascript
const sentences = ["Bonjour le monde", "Comment ça va"];
const words = sentences.flatMap((s) => s.split(" ")).map((word) => word.toLowerCase());
console.log(words); // ["bonjour", "le", "monde", "comment", "ça", "va"]
```

### Considérations de performance

- Chaque méthode crée un nouveau tableau, ce qui peut être gourmand en mémoire pour les grands ensembles.
- Pour le code critique en performance, envisagez de combiner les opérations dans une seule boucle.
- Les moteurs modernes optimisent assez bien les enchaînements.

### Exemple : transformation complexe

```javascript
const products = [
  { name: "Ordinateur", price: 1000, inStock: true },
  { name: "Souris", price: 25, inStock: false },
  { name: "Clavier", price: 75, inStock: true },
  { name: "Écran", price: 300, inStock: true },
];

const affordableInStock = products
  .filter((p) => p.inStock)
  .filter((p) => p.price < 500)
  .map((p) => p.name)
  .sort();
console.log(affordableInStock); // ["Clavier", "Écran"]
```
