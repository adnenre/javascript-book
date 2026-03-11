---
title: Contexte de fonction
sidebar:
  order: 3
  label: 6.3 Contexte de fonction
---

À l'intérieur d'une fonction classique (non fléchée), la valeur de this dépend de la façon dont la fonction est appelée. En mode non strict, si la fonction est appelée sans contexte explicite, this par défaut est l'objet global. En mode strict, il vaut undefined.

```javascript
function afficherThis() {
  console.log(this);
}
afficherThis();
```
