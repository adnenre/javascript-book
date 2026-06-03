---
title: Les mixins
sidebar:
  order: 10
  label: 12.10 Les mixins
---

Les mixins sont une façon de composer des classes en combinant des comportements provenant de multiples sources. Comme les classes JavaScript n’acceptent qu’un seul héritage, les mixins permettent d’« injecter » des propriétés et méthodes supplémentaires provenant d’autres classes ou objets.

### Points clés

- Implémentés sous forme de fonctions qui copient ou héritent des propriétés vers une classe cible.
- Peuvent utiliser `Object.assign` pour ajouter des méthodes à un prototype.
- Plusieurs mixins peuvent être appliqués pour créer une classe aux capacités combinées.

### Exemple de code

```javascript
// Fonctions mixin
const CanFly = (superclass) =>
  class extends superclass {
    fly() {
      console.log("Vole !");
    }
  };

const CanSwim = (superclass) =>
  class extends superclass {
    swim() {
      console.log("Nage !");
    }
  };

// Classe de base
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Création d’une classe avec plusieurs mixins
class Duck extends CanSwim(CanFly(Animal)) {
  constructor(name) {
    super(name);
  }
  quack() {
    console.log(`${this.name} cancane.`);
  }
}

const duck = new Duck("Donald");
duck.fly(); // "Vole !"
duck.swim(); // "Nage !"
duck.quack(); // "Donald cancane."
```
