---
title: Combination Inheritance
sidebar:
  order: 3
  label: 11.8.3 Combination Inheritance
---

L’**héritage combiné** (aussi appelé **héritage pseudo‑classique**) combine l’héritage par chaîne de prototypes et le vol de constructeur. Il permet d’hériter à la fois des propriétés d’instance (avec leurs propres copies) et des méthodes partagées via le prototype.

### Exemple de code

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Bonjour ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // hérite des propriétés d’instance
  this.age = age;
}
Child.prototype = new Parent(); // hérite des méthodes
Child.prototype.constructor = Child; // correction de la référence constructeur

const child1 = new Child("John", 10);
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]
child1.greet(); // "Bonjour John"

const child2 = new Child("Jane", 12);
console.log(child2.colors); // ["red", "blue"]
```
