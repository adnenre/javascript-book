---
title: Comprendre la spécification ECMAScript
sidebar:
  order: 5
  label: 1.5 Comprendre la spécification ECMAScript
---

ECMAScript (souvent abrégé ES) est la **norme** sur laquelle JavaScript est basé. La spécification est maintenue par [ECMA International](https://www.ecma-international.org/) (comité technique TC39).

**Pourquoi une spécification ?**

- Garantit que les différentes implémentations (navigateurs, Node.js) se comportent de la même manière.
- Définit la syntaxe, les types, les objets et les algorithmes.
- Permet aux développeurs d'écrire du code qui fonctionne dans tous les environnements.

**Les versions ECMAScript** sont identifiées par leur numéro d'édition (ES5, ES6/ES2015, ES2016, …). Depuis 2015, de nouvelles fonctionnalités sont publiées chaque année.

**Comment vérifier ce qui est supporté ?**  
Des sites comme [caniuse.com](https://caniuse.com/) et [Node.green](https://node.green/) présentent des tableaux de compatibilité.

**Exemple** : le mot‑clé `let` a été introduit avec ES6. Vous pouvez l'utiliser aujourd'hui dans tous les environnements modernes.

```javascript
let message = "Bonjour, ES6 !";
console.log(message);
```

> Comprendre la spécification vous aide à savoir quelles fonctionnalités sont disponibles et quand vous pouvez les utiliser sans transpileur comme Babel.
