---
title: Instruction switch
sidebar:
  order: 2
  label: 4.1.2 Instruction switch
---

L'instruction switch évalue une expression et compare sa valeur à une étiquette case, exécutant le bloc correspondant. Un break empêche l'enchaînement vers le cas suivant. Le cas default s'exécute si aucune correspondance n'est trouvée.

```javascript
let jour = 3;
let nomJour;

switch (jour) {
  case 1:
    nomJour = "Lundi";
    break;
  case 2:
    nomJour = "Mardi";
    break;
  case 3:
    nomJour = "Mercredi";
    break;
  case 4:
    nomJour = "Jeudi";
    break;
  case 5:
    nomJour = "Vendredi";
    break;
  default:
    nomJour = "Week-end";
}

console.log(nomJour); // "Mercredi"
```
