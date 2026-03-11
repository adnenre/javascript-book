---
title: Variables var, let, and const
sidebar:
  order: 1
  label: 2.1 Variables  var, let et const
---

En JavaScript, les variables servent à stocker des données. Il existe trois façons de déclarer une variable : `var`, `let` et `const`.

**`var`** – Ancienne manière (avant ES6). Portée de fonction, peut être redéclarée, et est hissée (hoisted).

```javascript
var nom = "Alice";
var nom = "Bob"; // redéclaration autorisée
console.log(nom); // Bob
```

**`let`**– Introduit avec ES6. Portée de bloc, ne peut pas être redéclarée dans la même portée, mais peut être mise à jour.

```javascript
let age = 25;
age = 26; // autorisé
// let age = 30; // Erreur : Identifiant 'age' déjà déclaré
```

**`const`** – Également ES6. Portée de bloc, ne peut être ni mise à jour ni redéclarée. Doit être initialisée lors de la déclaration.

```javascript
const PI = 3.14159;
// PI = 3.14; // Erreur : affectation à une constante
// const GRAVITE; // Erreur : initialisation manquante
```

Pour les objets et tableaux déclarés avec **`const`**, la référence ne peut pas changer, mais les propriétés/éléments peuvent être modifiés.

```javascript
const personne = { nom: "Alice" };
personne.nom = "Bob"; // autorisé
// personne = { nom: 'Charlie' }; // Erreur
```

> Bonnes pratiques : utilisez const par défaut, let si vous devez réaffecter, et évitez var dans le code moderne.
