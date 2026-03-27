---
title: l'objet Number
sidebar:
  order: 2
  label: 13.2 l'objet Number
---

L’objet `Number` est un wrapper pour les valeurs numériques primitives. Il fournit des constantes et des méthodes pour travailler avec les nombres. Les littéraux numériques sont automatiquement convertis en objets `Number` lorsque des méthodes sont appelées.

### Points clés

- Constantes : `Number.MAX_VALUE`, `Number.MIN_VALUE`, `Number.POSITIVE_INFINITY`, `Number.NaN`, etc.
- Méthodes : `isFinite()`, `isNaN()`, `parseInt()`, `parseFloat()`.
- Méthodes d’instance : `toFixed()`, `toPrecision()`, `toString()`.

### Exemple de code

```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(100)); // true

const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString(16)); // "7b.74bc6a7ef9db" (hexadécimal)
```
