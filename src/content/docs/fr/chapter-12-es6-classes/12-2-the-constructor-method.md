---
title: Les propriétés d’instance
sidebar:
  order: 2
  label: 12.2 Les propriétés d’instance
---

Les propriétés d’instance sont des propriétés qui appartiennent à chaque objet individuel créé à partir d’une classe. Elles sont généralement définies dans la méthode `constructor`, mais peuvent aussi être définies directement dans le corps de la classe (champs publics d’instance) à partir d’ES2022.

### Points clés

- Les propriétés d’instance contiennent des données spécifiques à chaque instance.
- Peuvent être initialisées dans le constructeur ou directement dans le corps de la classe.
- Les champs publics sont une syntaxe plus récente pour définir les propriétés d’instance en dehors du constructeur.

### Exemple de code

```javascript
class Product {
  // Champ public d'instance (ES2022)
  category = "general";

  constructor(name, price) {
    this.name = name; // propriété d'instance
    this.price = price; // propriété d'instance
  }

  display() {
    console.log(`${this.name} (${this.category}) : ${this.price}`);
  }
}

const phone = new Product("Phone", 699);
phone.display(); // "Phone (general) : 699"
```
