---
title: Object
sidebar:
  order: 1
  label: 2.4.1 Object
---

Les objets sont des collections de paires clé‑valeur. Les clés sont des chaînes (ou des symboles), les valeurs peuvent être de n'importe quel type.

**Création d'objets** :

```javascript
// Littéral objet
let personne = {
  nom: "Alice",
  age: 30,
  saluer() {
    console.log(`Salut, je suis ${this.nom}`);
  },
};

// Avec new Object()
let voiture = new Object();
voiture.marque = "Tesla";
```

Accès aux propriétés :

Notation pointée : personne.nom

Notation crochets : personne['nom'] (utile pour les clés dynamiques)

Ajout / modification de propriétés :

```javascript
personne.ville = "Paris";
personne["age"] = 31;
```

Suppression de propriétés :

```javascript
delete personne.age;
```

Les méthodes sont des fonctions stockées comme propriétés.

```javascript
personne.saluer(); // "Salut, je suis Alice"
```

Les objets sont mutables et passés par référence.
