---
title: bind()
sidebar:
  order: 3
  label: 6.8.3 bind()
---

bind() crée une nouvelle fonction avec this défini de manière permanente à la valeur fournie. La nouvelle fonction peut être appelée plus tard, éventuellement avec des arguments prédéfinis.

```javascript
const saluerLiee = saluer.bind(personne, "Marseille");
saluerLiee("France"); // Alice habite à Marseille, France
```
