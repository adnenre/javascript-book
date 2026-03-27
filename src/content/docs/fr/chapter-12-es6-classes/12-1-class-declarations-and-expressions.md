---
title: Déclarations de classes et expressions
sidebar:
  order: 1
  label: 12.1 Déclarations de classes et expressions
---

La méthode `constructor` est une méthode spéciale pour créer et initialiser un objet créé avec une classe. Une seule méthode `constructor` peut exister dans une classe. Si vous n’en fournissez pas, un constructeur vide par défaut est ajouté.

### Points clés

- Utilisée pour initialiser les propriétés d’instance.
- Peut appeler `super()` pour appeler le constructeur de la classe parente lors de l’extension.
- Peut retourner un objet pour remplacer l’instance par défaut.

### Exemple de code

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Créé ${this.name}`);
  }
  greet() {
    console.log(`Bonjour, je suis ${this.name}`);
  }
}

const john = new Person("John", 30);
john.greet(); // "Bonjour, je suis John"
```
