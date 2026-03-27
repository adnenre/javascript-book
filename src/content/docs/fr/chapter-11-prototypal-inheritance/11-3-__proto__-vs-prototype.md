---
title: __proto__ vs prototype
sidebar:
  order: 3
  label: 11.3 __proto__ vs prototype
---

- **`__proto__`** : Une propriété interne (getter/setter) disponible sur chaque objet qui pointe vers son prototype. Elle est dépréciée au profit de `Object.getPrototypeOf()` / `Object.setPrototypeOf()` mais encore largement utilisée.
- **`prototype`** : Une propriété qui n’existe que sur les **fonctions constructrices**. Elle définit le prototype des objets créés par ce constructeur avec `new`.

### Exemple de code

```javascript
function Animal() {}
Animal.prototype.sound = "grrr";

const dog = new Animal();
console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.prototype); // undefined (dog n’est pas un constructeur)
```
