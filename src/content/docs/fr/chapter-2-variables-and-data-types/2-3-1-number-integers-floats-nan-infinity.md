---
title: Number (integers, floats, NaN, Infinity)
sidebar:
  order: 1
  label: 2.3.1 Number (integers, floats, NaN, Infinity)
---

Le type `number` représente à la fois les nombres entiers et à virgule flottante.

```javascript
let entier = 42;
let flottant = 3.14;
let negatif = -10;
let scientifique = 2.5e3; // 2500
```

Valeurs numériques spéciales :

NaN (Not‑a‑Number) : résultat d'une opération mathématique invalide ou indéfinie.

```javascript
let resultat = "bonjour" * 5; // NaN
console.log(isNaN(resultat)); // true
```

Infinity et -Infinity : représentent l'infini mathématique.

```javascript
let tropGrand = 1 / 0; // Infinity
let tropPetit = -1 / 0; // -Infinity
```

Méthodes Number :

Number.isInteger(), Number.isNaN(), Number.parseFloat(), Number.parseInt().

```javascript
console.log(Number.isInteger(42)); // true
console.log(Number.parseInt("123px")); // 123
```

Problèmes de précision :
L'arithmétique en virgule flottante n'est pas toujours exacte.

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```

> Utilisez toFixed() ou des bibliothèques pour les calculs décimaux exacts.
