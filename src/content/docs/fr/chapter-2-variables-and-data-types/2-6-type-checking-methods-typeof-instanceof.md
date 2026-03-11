---
title: Méthodes de vérification de type (typeof, instanceof...)
sidebar:
  order: 6
  label: 2.6 Méthodes de vérification de type (typeof, instanceof...)
---

JavaScript offre plusieurs façons de vérifier le type d'une valeur.

**`typeof`** – Retourne une chaîne indiquant le type d'une valeur. Fonctionne bien pour les primitifs, mais a des particularités.

```javascript
console.log(typeof 42); // 'number'
console.log(typeof "bonjour"); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof 123n); // 'bigint'
console.log(typeof null); // 'object' (bug historique)
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () {}); // 'function'
```

instanceof – Vérifie si un objet est une instance d'un constructeur spécifique (fonctionne pour les types référence).

```javascript
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log("bonjour" instanceof String); // false (littéral chaîne est primitif)
```

Array.isArray() – Vérifie spécifiquement les tableaux.

```javascript
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```

Object.prototype.toString.call() – Une manière plus robuste d'obtenir la [[Class]] interne de n'importe quelle valeur.

```javascript
console.log(Object.prototype.toString.call([])); // '[object Array]'
console.log(Object.prototype.toString.call(null)); // '[object Null]'
```

Number.isNaN() vs la fonction globale isNaN() :

isNaN() convertit d'abord l'argument en nombre.

Number.isNaN() ne convertit pas ; vérifie si la valeur est exactement NaN.

```javascript
console.log(isNaN("bonjour")); // true (converti en NaN)
console.log(Number.isNaN("bonjour")); // false
```

> Choisissez la méthode appropriée en fonction de ce que vous devez détecter.

```

```
