---
title: JavaScript dans différents environnements
sidebar:
  order: 4
  label: 1.4 JavaScript dans différents environnements
---

JavaScript est né dans le navigateur, mais aujourd'hui il fonctionne dans de nombreux environnements.

**Navigateur** :

- Manipule le DOM (éléments HTML).
- Gère les événements utilisateur (clics, soumissions de formulaires).
- Communique avec les serveurs via `fetch` ou `XMLHttpRequest`.
- Utilise des API navigateur comme `localStorage`, géolocalisation, etc.

Exemple – modification du contenu de la page :

```html
<button id="btn">Cliquez‑moi</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.body.innerHTML += "<p>Bouton cliqué !</p>";
  });
</script>
```

Node.js :

Fonctionne sur des serveurs, ordinateurs de bureau ou systèmes embarqués.

Fournit un accès au système de fichiers, au réseau et aux fonctionnalités du système d'exploitation.

Utilise la syntaxe require (ou import) pour les modules.

**Exemple** – lecture d'un fichier :

```javascript
const fs = require("fs");
fs.readFile("fichier.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Autres environnements :

- Deno : un environnement sécurisé pour TypeScript et JavaScript.

- Bun : un environnement tout‑en‑un rapide.

- Applications mobiles : React Native, NativeScript.

- Applications de bureau : Electron, NW.js.

> _Chaque environnement fournit ses propres API, mais le langage de base reste le même._
