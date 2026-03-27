---
title: Propriétés d'instance, méthodes et propriétés statiques
sidebar:
  order: 4
  label: 12.4 Propriétés d'instance, méthodes et propriétés statiques
---

Les méthodes et propriétés statiques sont définies sur la classe elle‑même, pas sur les instances. Elles sont appelées en utilisant le nom de la classe. Les membres statiques sont utiles pour les fonctions utilitaires, les constantes ou les comportements de type singleton.

### Points clés

- Déclarés avec le mot‑clé `static`.
- Ne peuvent pas être appelés sur les instances ; seulement sur la classe.
- Peuvent être hérités par les sous‑classes.
- Les champs statiques (ES2022) permettent de définir des propriétés statiques directement.

### Exemple de code

```javascript
class MathUtils {
  static PI = 3.14159; // champ statique
  static add(a, b) {
    // méthode statique
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8

const utils = new MathUtils();
// utils.add(2,3); // TypeError: utils.add n'est pas une fonction
```
