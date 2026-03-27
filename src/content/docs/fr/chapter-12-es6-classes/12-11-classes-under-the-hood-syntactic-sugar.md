---
title: Classes sous le capot (sucre syntaxique)
sidebar:
  order: 11
  label: 12.11 Classes sous le capot (sucre syntaxique)
---

Les classes JavaScript sont essentiellement du **sucre syntaxique** par rapport au modèle d’héritage basé sur les prototypes existant. Elles fournissent une syntaxe plus propre mais n’introduisent pas un nouveau modèle orienté objet. En coulisses, les classes restent des fonctions et les méthodes sont définies sur le prototype.

### Points clés

- Une déclaration de classe crée une fonction constructeur.
- Les méthodes sont définies sur le prototype de la classe.
- Les méthodes statiques sont attachées à la fonction constructeur.
- Le mot‑clé `extends` établit la chaîne de prototypes entre les constructeurs.

### Exemple de code

```javascript
// Syntaxe de classe
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Bonjour, je suis ${this.name}`);
  }
  static describe() {
    console.log("Une classe Personne");
  }
}

// Code équivalent basé sur les prototypes
function Person_Old(name) {
  this.name = name;
}
Person_Old.prototype.greet = function () {
  console.log(`Bonjour, je suis ${this.name}`);
};
Person_Old.describe = function () {
  console.log("Une classe Personne");
};

const john = new Person("John");
const johnOld = new Person_Old("John");
console.log(john.greet === johnOld.greet); // true
console.log(Person.describe === Person_Old.describe); // true
```
