---
title: Accès aux propriétés
sidebar:
  order: 2
  label: 10.2 Accès aux propriétés
---

Les propriétés peuvent être accédées avec la notation point (obj.key) ou la notation crochets (obj['key']). La notation crochets permet d’utiliser des clés dynamiques et des clés qui ne sont pas des identifiants valides.

```javascript
const utilisateur = { nom: "Bob", "couleur préférée": "bleu" };
console.log(utilisateur.nom); // Bob
console.log(utilisateur["couleur préférée"]); // bleu
```
