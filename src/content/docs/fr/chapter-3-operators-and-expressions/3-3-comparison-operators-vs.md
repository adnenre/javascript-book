---
title: Opérateurs de comparaison
sidebar:
  order: 3
  label: 3.3 Opérateurs de comparaison
---

Les opérateurs de comparaison comparent deux valeurs et retournent un booléen. L'égalité large (==) compare les valeurs après conversion de type, tandis que l'égalité stricte (===) compare la valeur et le type sans conversion. Les autres opérateurs incluent !=, !==, >,

```javascript
console.log(5 == "5"); // true (égalité de valeur seulement)
console.log(5 === "5"); // false (égalité de valeur ET de type)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
```
