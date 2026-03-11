---
title: Gestion des erreurs
sidebar:
  order: 4
  label: 4.4 Gestion des erreurs
---

L'instruction try...catch...finally gère les erreurs d'exécution de manière élégante :

- Bloc try – Contient le code susceptible de lever une exception. Si une erreur se produit, le contrôle passe au bloc catch.

- Bloc catch – S'exécute si une exception est levée dans le bloc try. Il reçoit un objet erreur contenant des informations sur l'erreur.

- Bloc finally – S'exécute qu'une erreur soit survenue ou non, qu'elle ait été attrapée ou pas. Il est souvent utilisé pour des opérations de nettoyage (fermeture de fichiers, libération de ressources).

```javascript
try {
  // Code qui pourrait générer une erreur
  let resultat = 10 / 0;
  console.log(resultat);

  // Simuler une erreur
  throw new Error("Quelque chose s'est mal passé");
} catch (erreur) {
  console.log("Erreur attrapée : " + erreur.message);
} finally {
  console.log("Ceci s'exécute toujours");
}
// Affiche : Infinity
//          Erreur attrapée : Quelque chose s'est mal passé
//          Ceci s'exécute toujours
```
