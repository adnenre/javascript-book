---
title: Paramètres par défaut
sidebar:
  order: 1
  label: 5.7.1 Paramètres par défaut
---

Les paramètres par défaut permettent d'initialiser les paramètres avec des valeurs par défaut si aucun argument ou undefined est passé.

```javascript
function saluer(nom = "Invité") {
  console.log(`Bonjour, ${nom}`);
}
saluer(); // Bonjour, Invité
```
