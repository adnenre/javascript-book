---
title: propriété constructor
sidebar:
  order: 6
  label: 11.6 propriété constructor
---

Chaque prototype d’objet possède une propriété `constructor` qui référence la fonction utilisée pour créer cet objet. Elle est utile pour vérifier l’origine d’une instance ou créer de nouvelles instances du même type.

### Exemple de code

```javascript
function User(name) {
  this.name = name;
}
const user = new User("Alice");
console.log(user.constructor === User); // true
console.log(user.constructor.name); // "User"

// Créer un autre utilisateur via le constructeur
const another = new user.constructor("Bob");
console.log(another.name); // "Bob"
```
