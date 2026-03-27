---
title: Tri des objets personnalisés
sidebar:
  order: 3
  label: 15.3 Tri des objets personnalisés
---

La méthode `sort()` trie les éléments du tableau sur place et retourne le tableau trié. Par défaut, elle trie les éléments comme des chaînes de caractères. Pour trier des nombres ou des objets, vous devez fournir une fonction de comparaison.

### Fonction de comparaison

La fonction de comparaison prend deux arguments `a` et `b` et retourne :

- `< 0` si `a` doit apparaître avant `b`
- `0` si `a` et `b` sont égaux
- `> 0` si `a` doit apparaître après `b`

### Exemple de code

```javascript
// Tri correct des nombres
const numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 25, 40]

// Tri d’objets par propriété
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Tri par âge croissant
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// Tri par nom alphabétique
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
// [{ name: "Alice", ... }, { name: "Bob", ... }, { name: "Charlie", ... }]

// Tri multi‑niveaux : par âge, puis par nom
const users2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
users2.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.name.localeCompare(b.name);
});
console.log(users2);
// Bob (25), Alice (30), Charlie (30)
```
