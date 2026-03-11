---
title: String (methods, template literals ...)
sidebar:
  order: 2
  label: 2.3.2 String (methods, template literals ...)
---

Les chaînes de caractères représentent des données textuelles. On peut les créer avec des guillemets simples, doubles ou des accents graves (littéraux de gabarit).

```javascript
let simple = "Bonjour";
let double = "Monde";
let gabarit = `Bonjour, ${double} !`; // interpolation
```

Méthodes courantes :

length – propriété, pas une méthode.

toUpperCase(), toLowerCase() – changer la casse.

indexOf(), includes(), startsWith(), endsWith() – recherche.

slice(), substring() – extraire des parties.

replace(), replaceAll() – remplacer du texte.

split() – convertir en tableau.

trim() – supprimer les espaces aux extrémités.

```javascript
let str = "  JavaScript est génial !  ";
console.log(str.trim()); // "JavaScript est génial !"
console.log(str.includes("génial")); // true
console.log(str.slice(2, 12)); // "JavaScript"
console.log("a,b,c".split(",")); // ['a', 'b', 'c']
```

Les littéraux de gabarit permettent aussi les chaînes multilignes.

```javascript
let multi = `Ceci est
une chaîne
multiligne.`;
```

> Les chaînes sont immuables – les méthodes retournent de nouvelles chaînes, elles ne modifient pas l'originale.
