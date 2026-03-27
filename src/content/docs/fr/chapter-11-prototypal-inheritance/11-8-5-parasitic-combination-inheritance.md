---
title: Parasitic Combination Inheritance
sidebar:
  order: 5
  label: 11.8.5 Parasitic Combination Inheritance
---

L’**héritage combiné parasitaire** est considéré comme le modèle d’héritage le plus efficace. Il utilise le vol de constructeur pour les propriétés d’instance et une fonction parasitaire pour mettre en place la chaîne de prototypes sans appeler le constructeur parent deux fois (contrairement à l’héritage combiné).

### Exemple de code

```javascript
function inheritPrototype(child, parent) {
  const prototype = Object.create(parent.prototype); // création de l’objet prototype
  prototype.constructor = child; // correction du constructeur
  child.prototype = prototype; // assignation
}

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Bonjour ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // vol du constructeur
  this.age = age;
}
inheritPrototype(Child, Parent); // mise en place de la chaîne

const child1 = new Child("John", 10);
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]
child1.greet(); // "Bonjour John"
```
