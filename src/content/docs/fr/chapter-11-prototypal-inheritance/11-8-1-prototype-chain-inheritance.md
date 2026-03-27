---
title: héritage par chaîne de prototypes
sidebar:
  order: 1
  label: 11.8.1 héritage par chaîne de prototypes
---

L’**héritage par chaîne de prototypes** est le modèle d’héritage le plus simple. Il utilise la chaîne de prototypes pour faire hériter un objet enfant d’un objet parent. Le prototype de l’enfant est défini comme une instance du parent, ce qui rend toutes les propriétés et méthodes du parent accessibles.

### Exemple de code

```javascript
function Parent() {
  this.name = "Parent";
}
Parent.prototype.greet = function () {
  console.log(`Bonjour de ${this.name}`);
};

function Child() {}
Child.prototype = new Parent(); // héritage

const child = new Child();
child.greet(); // "Bonjour de Parent"
```
