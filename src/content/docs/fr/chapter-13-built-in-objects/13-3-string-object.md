---
title: L’objet String
sidebar:
  order: 3
  label: 13.3 L’objet String
---

L’objet `String` est un wrapper pour les chaînes primitives. Il fournit des méthodes pour manipuler et inspecter le texte. Les chaînes sont immuables ; les méthodes retournent de nouvelles chaînes.

### Points clés

- Propriétés : `length`.
- Méthodes : `charAt()`, `indexOf()`, `slice()`, `substring()`, `split()`, `replace()`, `toUpperCase()`, `trim()`, etc.
- Les littéraux de gabarit (backticks) permettent l’interpolation et les chaînes multi‑lignes.

### Exemple de code

```javascript
const str = "Bonjour le monde !";
console.log(str.length); // 18
console.log(str.charAt(0)); // "B"
console.log(str.indexOf("monde")); // 8
console.log(str.slice(8, 13)); // "monde"
console.log(str.toUpperCase()); // "BONJOUR LE MONDE !"
console.log(str.replace("monde", "JavaScript")); // "Bonjour JavaScript !"

const name = "Alice";
const greeting = `Bonjour, ${name} !`; // littéral de gabarit
console.log(greeting); // "Bonjour, Alice !"
```
