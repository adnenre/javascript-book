---
title: Date Object
sidebar:
  order: 5
  label: 13.5 Date Object
---

L’objet `Date` est utilisé pour travailler avec les dates et les heures. Il stocke un horodatage (millisecondes depuis l’époque Unix). Les méthodes permettent d’obtenir, de définir et de formater les composants de la date.

Cependant, l’objet `Date` traditionnel présente de nombreuses limitations : mutabilité, indexation des mois confuse (0‑11), mauvaise gestion des fuseaux horaires, et absence d’un type de date seule. **Temporal** est une nouvelle API intégrée (actuellement une proposition TC39) qui corrige ces problèmes. Elle devrait devenir le standard pour gérer les dates et les heures en JavaScript.

### Utilisation de `Date`

```javascript
const now = new Date();
console.log(now.getFullYear()); // année courante
console.log(now.getMonth()); // 0‑11 (janvier = 0)
console.log(now.getDate()); // jour du mois

const specific = new Date(2025, 0, 15); // 15 janvier 2025
console.log(specific.toLocaleDateString("fr-FR")); // "15/01/2025"
console.log(specific.toISOString()); // "2025-01-15T00:00:00.000Z"

// Horodatage
const timestamp = Date.now();
console.log(timestamp); // millisecondes depuis l'époque
```

### Utilisation de Temporal (alternative moderne)

Temporal fournit des objets immuables, des API intuitives et une gestion correcte des fuseaux horaires. Il n’est pas encore standardisé mais peut être utilisé via un polyfill. Principaux types :

- `Temporal.PlainDate` – date sans heure (année, mois, jour)
- `Temporal.PlainTime` – heure sans date
- `Temporal.PlainDateTime` – date et heure sans fuseau horaire
- `Temporal.ZonedDateTime` – date et heure avec fuseau horaire spécifique

```javascript
// Exemple avec Temporal (avec polyfill)
// Remarque : cela n’est pas encore intégré nativement partout ; nécessite un polyfill.
const { Temporal } = require("@js-temporal/polyfill"); // import hypothétique

const date = Temporal.PlainDate.from("2025-03-27");
console.log(date.year); // 2025
console.log(date.month); // 3
console.log(date.day); // 27

const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString()); // ex. "2025-03-27T14:30:00+01:00[Europe/Paris]"
```

Pour une utilisation en production aujourd’hui, restez sur `Date` ou une bibliothèque comme `moment.js` ou `date-fns`, mais surveillez Temporal qui deviendra bientôt disponible.
