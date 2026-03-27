---
title: héritage classique
sidebar:
  order: 2
  label: 11.8.2 héritage classique
---

Le **vol de constructeur** (ou **héritage classique**) consiste à appeler le constructeur parent à l’intérieur du constructeur enfant avec `call()` ou `apply()`. Cela permet à l’enfant d’hériter des propriétés d’instance du parent, mais les méthodes ne sont pas partagées via le prototype.

### Exemple de code

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Parent.prototype.greet = function () {
  console.log(`Bonjour ${this.name}`);
};

function Child(name) {
  Parent.call(this, name); // vol du constructeur
}

const child1 = new Child("John");
child1.colors.push("green");
console.log(child1.colors); // ["red", "blue", "green"]

const child2 = new Child("Jane");
console.log(child2.colors); // ["red", "blue"] (non affecté)
// child1.greet(); // erreur : greet n’est pas partagé
```
