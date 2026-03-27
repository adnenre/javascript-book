---
title: héritage parasitaire
sidebar:
  order: 4
  label: 11.8.4 héritage parasitaire
---

L’**héritage parasitaire** est un modèle où une fonction crée un objet qui hérite d’un autre objet, puis l’enrichit avec des propriétés ou méthodes supplémentaires. Il est similaire au modèle de prototype mais utilise une fonction fabrique.

### Exemple de code

```javascript
function createAnother(original) {
  const clone = Object.create(original); // héritage
  clone.sayHi = function () {
    // enrichissement
    console.log("Salut !");
  };
  return clone;
}

const person = { name: "John", friends: ["Alice", "Bob"] };
const anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "Salut !"
console.log(anotherPerson.name); // "John"
```
