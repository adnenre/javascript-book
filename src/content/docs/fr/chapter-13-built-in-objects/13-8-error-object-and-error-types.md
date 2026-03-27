---
title: L’objet Error
sidebar:
  order: 8
  label: 13.8 L’objet Error
---

L’objet `Error` est la base de toutes les erreurs d’exécution. Il peut être lancé et capturé avec `try...catch`. Il existe plusieurs types d’erreurs intégrés qui étendent `Error`, fournissant des informations d’erreur plus spécifiques.

### Points clés

- `Error` : erreur générique.
- Types d’erreurs intégrés : `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`.
- Des erreurs personnalisées peuvent être créées en étendant `Error`.

### Exemple de code

```javascript
try {
  throw new Error("Quelque chose s’est mal passé");
} catch (err) {
  console.log(err.name); // "Error"
  console.log(err.message); // "Quelque chose s’est mal passé"
  console.log(err.stack); // trace de la pile
}

// Types d'erreurs spécifiques
try {
  undefinedVariable; // ReferenceError
} catch (err) {
  console.log(err instanceof ReferenceError); // true
}

// Erreur personnalisée
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Entrée invalide");
} catch (err) {
  console.log(err.name); // "ValidationError"
  console.log(err.message); // "Entrée invalide"
}
```
