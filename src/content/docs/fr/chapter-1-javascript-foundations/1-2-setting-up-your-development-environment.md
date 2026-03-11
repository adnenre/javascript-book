---
title: Configuration de votre environnement de développement
sidebar:
  order: 2
  label: 1.2 Configuration de votre environnement de développement
---

Pour écrire et exécuter du JavaScript, vous avez besoin d'un éditeur de code et d'un environnement d'exécution.

**Éditeur de code** : les choix populaires sont [Visual Studio Code](https://code.visualstudio.com/), Sublime Text ou Atom. VS Code est vivement recommandé grâce à ses extensions et son terminal intégré.

**Console du navigateur** : chaque navigateur moderne propose des outils de développement avec une console. Appuyez sur `F12` (Windows/Linux) ou `Cmd+Opt+I` (Mac) pour l'ouvrir. Vous pouvez taper du JavaScript directement et voir les résultats immédiatement.

**Node.js** : pour exécuter JavaScript hors du navigateur, installez [Node.js](https://nodejs.org/). Après installation, ouvrez un terminal et tapez `node -v` pour vérifier. Exécutez un script avec `node fichier.js`.

**Optionnel – formateur de code** : installez Prettier dans votre éditeur pour garder un code cohérent.

Exemple d'exécution d'un script simple avec Node.js :

```javascript
// hello.js
console.log("Bonjour tout le monde !");
```

Puis lancer :

```shell
node hello.js
```
