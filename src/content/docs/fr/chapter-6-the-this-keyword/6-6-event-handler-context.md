---
title: Contexte de gestionnaire d'événement
sidebar:
  order: 6
  label: 6.6 Contexte de gestionnaire d'événement
---

Dans les gestionnaires d'événements DOM, this fait référence à l'élément qui a reçu l'événement (sauf si on utilise des fonctions fléchées ou une liaison explicite).

```javascript
button.addEventListener("click", function () {
  console.log(this); // l'élément button
});
```
