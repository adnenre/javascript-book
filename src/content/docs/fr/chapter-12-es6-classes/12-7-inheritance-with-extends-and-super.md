---
title: Héritage avec extensions et super
sidebar:
  order: 7
  label: 12.7 Héritage avec extensions et super
---

Le mot‑clé `extends` est utilisé pour créer une classe enfant d’une autre classe. Le mot‑clé `super` est utilisé pour appeler le constructeur ou les méthodes de la classe parente. Cela permet l’héritage classique en JavaScript.

### Points clés

- `extends` établit la chaîne de prototypes.
- `super()` doit être appelé avant d’accéder à `this` dans le constructeur enfant.
- `super.methode()` peut appeler les méthodes de la classe parente.

### Exemple de code

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} fait un bruit.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // appel du constructeur parent
    this.breed = breed;
  }
  speak() {
    super.speak(); // appel de la méthode parent
    console.log(`${this.name} aboie.`);
  }
}

const dog = new Dog("Rex", "Berger allemand");
dog.speak();
// "Rex fait un bruit."
// "Rex aboie."
```
