---
title: Function
sidebar:
  order: 3
  label: 2.4.3 Function
---

Les fonctions sont des blocs de code réutilisables. En JavaScript, les fonctions sont des objets de première classe – elles peuvent être assignées à des variables, passées en arguments et retournées par d'autres fonctions.

**Déclaration de fonction** :

```javascript
function ajouter(a, b) {
  return a + b;
}
```

**Expression de fonction :**

```javascript
const multiplier = function (a, b) {
  return a * b;
};
```

**Fonction fléchée (ES6) :**

```javascript
const soustraire = (a, b) => a - b;
```

**Appel de fonctions :**

```javascript
let result = add(2, 3);
console.log(result); // 5
```

Les fonctions ont accès à l'objet arguments (dans les fonctions non fléchées) et peuvent être invoquées avec new comme constructeurs.
**arguments**

```javascript
function afficherArgs() {
  console.log(arguments[0]); // premier argument
  console.log(arguments.length); // nombre d'arguments passés
}
afficherArgs("bonjour", 42); // affiche : 'bonjour', 2
```

**Appel comme constructeur avec `new`**

```javascript
function Personne(nom) {
  this.nom = nom;
}
const jean = new Personne("Jean");
console.log(jean.nom); // 'Jean'
```

**Propriétés `name` et `length`**

```javascript
function saluer(message) {}
console.log(saluer.name); // "saluer"
console.log(saluer.length); // 1 (un paramètre)
```

**`call()`, `apply()`, `bind()` contrôler `this`.**

- `call()`et `apply()` sont utilisés pour une invocation immédiate avec un this spécifique.

- `bind()` est utilisé pour créer une nouvelle fonction (avec this fixé et des arguments optionnellement prédéfinis) que vous pouvez stocker et invoquer plus tard.

```javascript
const personne = { nom: "Alice", age: 30 };

// Fonction avec paramètres
function presenter(ville, hobby) {
  console.log(`${this.nom} a ${this.age} ans, habite à ${ville} et aime ${hobby}.`);
}

// `call` : arguments passés individuellement
presenter.call(personne, "Paris", "la lecture");
// Affiche : "Alice a 30 ans, habite à Paris et aime la lecture."

// `apply` : arguments passés dans un tableau
presenter.apply(personne, ["Lyon", "le vélo"]);
// Affiche : "Alice a 30 ans, habite à Lyon et aime le vélo."

// `bind` : crée une nouvelle fonction avec `this` fixé et éventuellement des arguments pré-définis
const presenterPourAlice = presenter.bind(personne);
presenterPourAlice("la natation", "Marseille");
// Affiche : "Alice a 30 ans, habite à Marseille et aime la natation."
```

**Les fonctions sont des références**
Les fonctions sont des types références, donc elles sont comparées par référence.

```javascript
const fn1 = function () {};
const fn2 = function () {};
console.log(fn1 === fn2); // false (références différentes)

const fn3 = fn1;
console.log(fn1 === fn3); // true (même référence)
```
