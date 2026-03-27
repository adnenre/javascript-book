---
title: Créer des objets avec un prototype spécifique
sidebar:
  order: 7
  label: 11.7 Créer des objets avec un prototype spécifique
---

Vous pouvez créer des objets avec un prototype spécifique en utilisant :

- `Object.create(proto)`
- Les fonctions constructrices avec `new`
- `Object.setPrototypeOf()`

Cela permet de définir explicitement un comportement partagé.

### Exemple de code

```javascript
const methods = {
  speak() {
    console.log(`Je dis : ${this.message}`);
  },
};

const obj = Object.create(methods);
obj.message = "Bonjour";
obj.speak(); // "Je dis : Bonjour"

// Avec un constructeur
function Speaker(message) {
  this.message = message;
}
Speaker.prototype = methods;
const speaker = new Speaker("Bonjour");
speaker.speak(); // "Je dis : Bonjour"
```
