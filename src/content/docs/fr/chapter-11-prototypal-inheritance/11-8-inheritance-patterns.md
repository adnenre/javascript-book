---
title: Inheritance Patterns
sidebar:
  order: 8
  label: 11.8 Inheritance Patterns
---

En JavaScript, l’héritage est réalisé à travers les prototypes, mais plusieurs modèles ont évolué pour gérer efficacement l’héritage des propriétés et des méthodes. Chaque modèle résout des problèmes spécifiques, et les comprendre aide à écrire un code propre, maintenable et performant.

Ce document offre un aperçu conceptuel des cinq modèles d’héritage classiques. Pour des exemples de code complets et des explications détaillées.

- [11.8.1 Héritage par chaîne de prototypes](/en/chapter-11-prototypal-inheritance/11-8-1-prototype-chain-inheritance/)
- [11.8.2 Vol de constructeur](/fr/chapter-11-prototypal-inheritance/11-8-2-constructor-stealing/)
- [11.8.3 Héritage combiné](/fr/chapter-11-prototypal-inheritance/11-8-3-combination-inheritance/)
- [11.8.4 Héritage parasitaire](/fr/chapter-11-prototypal-inheritance/11-8-4-parasitic-inheritance/)
- [11.8.5 Héritage combiné parasitaire](/fr/chapter-11-prototypal-inheritance/11-8-5-parasitic-combination-inheritance/)

**Quand l’utiliser :**

- Lorsque les performances et l’efficacité mémoire sont importantes.
- Quand vous voulez le modèle d’héritage le plus propre qui imite les langages classiques.
- Modèle recommandé pour le code de bibliothèque ou de framework.

---

## Tableau récapitulatif

| Modèle               | Propriétés d’instance | Méthodes partagées | Appels du constructeur parent | Efficacité |
| -------------------- | --------------------- | ------------------ | ----------------------------- | ---------- |
| Chaîne de prototypes | Partagées             | Oui                | 1                             | Moyenne    |
| Vol de constructeur  | Copie propre          | Non                | 1                             | Faible     |
| Combiné              | Copie propre          | Oui                | 2                             | Moyenne    |
| Parasitaire          | Copie propre (clone)  | Non (recréées)     | 0 (pas de constructeur)       | Faible     |
| Combiné parasitaire  | Copie propre          | Oui                | 1                             | Élevée     |
