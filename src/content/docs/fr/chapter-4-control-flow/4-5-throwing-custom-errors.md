---
title: Lancer des erreurs personnalisées
sidebar:
  order: 5
  label: 4.5 Lancer des erreurs personnalisées
---

JavaScript permet de lever des erreurs personnalisées à l'aide de l'instruction throw :

N'importe quelle expression peut être levée, mais il est courant de lever des objets Error ou des instances de classes d'erreur personnalisées.

Les classes d'erreur personnalisées peuvent étendre la classe Error intégrée pour fournir des types d'erreur spécifiques avec des noms et messages significatifs.

Cela permet une gestion des erreurs plus précise, où différents types d'erreurs peuvent être traités différemment dans les blocs catch.

```javascript
class ErreurValidation extends Error {
  constructor(message) {
    super(message);
    this.name = "ErreurValidation";
  }
}

function validerAge(age) {
  if (age < 0) {
    throw new ErreurValidation("L'âge ne peut pas être négatif");
  }
  if (age > 150) {
    throw new ErreurValidation("L'âge est trop élevé");
  }
  return true;
}

try {
  validerAge(-5);
} catch (erreur) {
  if (erreur instanceof ErreurValidation) {
    console.log("Erreur de validation : " + erreur.message);
  } else {
    console.log("Erreur inconnue : " + erreur);
  }
}
// Affiche : Erreur de validation : L'âge ne peut pas être négatif
```
