---
title: classes abstraites (Simulation)
sidebar:
  order: 9
  label: 12.9 classes abstraites (Simulation)
---

JavaScript ne possède pas de classes abstraites natives, mais on peut les simuler. Une classe abstraite est une classe qui ne peut pas être instanciée directement et qui est destinée à être étendue par des sous‑classes. Elle peut définir des méthodes qui doivent être implémentées par les sous‑classes.

### Points clés

- Utiliser une convention (comme `new.target` ou lever des erreurs) pour empêcher l’instanciation.
- Définir des méthodes abstraites qui lèvent une erreur si elles ne sont pas redéfinies.
- Fournir des fonctionnalités communes héritées par les sous‑classes.

### Exemple de code

```javascript
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Impossible d'instancier la classe abstraite Animal");
    }
    this.name = name;
  }

  // Méthode abstraite
  makeSound() {
    throw new Error("La méthode abstraite makeSound doit être implémentée");
  }

  // Méthode concrète
  move() {
    console.log(`${this.name} se déplace.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(`${this.name} aboie.`);
  }
}

// const animal = new Animal("Generic"); // Erreur
const dog = new Dog("Rex");
dog.makeSound(); // "Rex aboie."
dog.move(); // "Rex se déplace."
```
