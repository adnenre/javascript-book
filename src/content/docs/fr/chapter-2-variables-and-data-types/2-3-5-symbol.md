---
title: Symbol
sidebar:
  order: 5
  label: 2.3.5 Symbol
---

`Symbol`est un type primitif introduit avec ES6. Chaque symbole est garanti unique. Ils sont souvent utilisés comme clés de propriétés d'objets pour éviter les collisions de noms.

```javascript
let sym1 = Symbol();
let sym2 = Symbol("id"); // description optionnelle
let sym3 = Symbol("id");

console.log(sym2 === sym3); // false – chaque Symbol est unique
```

**Utilisation comme clés de propriétés :**

```javascript
const obj = {};
const id = Symbol("id");
obj[id] = "valeur secrète";
console.log(obj[id]); // 'valeur secrète'
console.log(Object.keys(obj)); // [] – les symboles ne sont pas énumérés
```

Symboles bien connus comme Symbol.iterator sont utilisés pour définir des comportements natifs.

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator](); // retourne un itérateur
```

> Les symboles ne sont pas totalement privés mais offrent un moyen de créer des clés de propriété non‑chaînes qui n'entreront pas en conflit avec d'autres clés.
