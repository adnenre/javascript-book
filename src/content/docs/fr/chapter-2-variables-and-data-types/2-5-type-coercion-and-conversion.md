---
title: Type Coercion and Conversion
sidebar:
  order: 5
  label: 2.5 Type Coercion and Conversion
---

La **coercition de type** est la conversion automatique ou implicite de valeurs d'un type de données à un autre (par exemple, chaîne en nombre). La **conversion de type** (ou cast) est la conversion explicite à l'aide de fonctions comme `String()`, `Number()`, `Boolean()`.

**Coercition implicite** se produit souvent avec les opérateurs :

```javascript
console.log("5" - 2); // 3 (la chaîne devient nombre)
console.log("5" + 2); // '52' (le nombre devient chaîne, concaténation)
console.log(true + 1); // 2 (true devient 1)
```

Conversion explicite :

```javascript
let str = "123";
let num = Number(str); // 123
let bool = Boolean(str); // true
let flottant = parseFloat("3.14"); // 3.14
let entier = parseInt("10px"); // 10
```

**Valeurs vraies et fausses :**

Les valeurs qui deviennent false dans des contextes booléens : false, 0, '', null, undefined, NaN. Tout le reste est vrai.

**Bizarreries des comparaisons :**

L'égalité large (`==`) effectue une coercition de type.

L'égalité stricte (`===`) n'en fait pas.

```javascript
console.log(0 == false); // true
console.log(0 === false); // false
```

> Bonnes pratiques : utilisez l'égalité stricte (===) et des conversions explicites pour éviter les surprises.
