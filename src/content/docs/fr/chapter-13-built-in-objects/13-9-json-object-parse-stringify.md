---
title: L'objet JSON (parse, stringify)
sidebar:
  order: 9
  label: 13.9 L'objet JSON (parse, stringify)
---

L’objet `JSON` fournit des méthodes pour analyser des chaînes JSON et convertir des valeurs JavaScript en JSON. `JSON.parse()` convertit une chaîne JSON en objet JavaScript, et `JSON.stringify()` convertit une valeur JavaScript en chaîne JSON.

### Points clés

- `JSON.stringify(valeur, remplaçant, espace)` – fonction ou tableau remplaçant optionnel, et espace pour l’indentation.
- `JSON.parse(texte, reviver)` – fonction reviver optionnelle pour transformer le résultat.
- JSON prend en charge les objets, tableaux, chaînes, nombres, booléens et null.
- Les fonctions, undefined et les symboles sont omis ou remplacés par `null`.

### Exemple de code

```javascript
const obj = {
  name: "Alice",
  age: 30,
  skills: ["JavaScript", "Python"],
  isActive: true,
};

// Conversion en chaîne JSON
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
/*
{
  "name": "Alice",
  "age": 30,
  "skills": ["JavaScript", "Python"],
  "isActive": true
}
*/

// Reconversion en objet
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Alice"

// Utilisation d’un remplaçant pour filtrer
const filtered = JSON.stringify(obj, ["name", "skills"]);
console.log(filtered); // {"name":"Alice","skills":["JavaScript","Python"]}

// Utilisation d’un reviver
const parsedWithReviver = JSON.parse('{"a":1,"b":2}', (key, value) => {
  if (key === "a") return value * 2;
  return value;
});
console.log(parsedWithReviver); // { a: 2, b: 2 }
```
