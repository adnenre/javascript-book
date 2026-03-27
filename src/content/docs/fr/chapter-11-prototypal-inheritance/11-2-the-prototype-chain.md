---
title: la chaîne de prototypes
sidebar:
  order: 2
  label: 11.2 la chaîne de prototypes
---

La **chaîne de prototypes** est une série de liens entre objets. Lorsque vous accédez à une propriété, JavaScript parcourt la chaîne depuis l’objet lui-même jusqu’en haut (`Object.prototype`), puis `null`. Si une propriété n’est trouvée nulle part dans la chaîne, `undefined` est retourné. Cette chaîne est le fondement de l’héritage en JavaScript.

### Exemple de code

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Bonjour, je suis ${this.name}`);
};

const john = new Person("John");
john.greet(); // "Bonjour, je suis John"
console.log(john.toString()); // hérité de Object.prototype
```
