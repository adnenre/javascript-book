---
title: Objets de type tableau
sidebar:
  order: 5
  label: 14.5 Objets de type tableau
---

Les objets semblables à des tableaux sont des objets qui ont une propriété `length` et des éléments indexés, mais qui ne possèdent pas les méthodes de tableau. Les exemples courants sont l’objet `arguments`, les collections HTML (comme `NodeList`) et les chaînes de caractères. Ils peuvent être convertis en vrais tableaux avec `Array.from()` ou `Array.prototype.slice.call()`.

### Points clés

- Ils ont des indices numériques et une propriété `length`.
- Ils n’héritent pas de `Array.prototype`, donc ils ne disposent pas de méthodes comme `map`, `filter`.
- Vous pouvez accéder aux éléments avec la notation entre crochets.

### Exemple de code

```javascript
// Un objet semblable à un tableau
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

console.log(arrayLike[0]); // "a"
console.log(arrayLike.length); // 3

// Mais on ne peut pas utiliser les méthodes de tableau
// arrayLike.forEach est undefined

// Conversion en tableau
const realArray = Array.from(arrayLike);
console.log(realArray); // ["a", "b", "c"]

// Alternative : slice
const anotherArray = Array.prototype.slice.call(arrayLike);
console.log(anotherArray); // ["a", "b", "c"]
```
