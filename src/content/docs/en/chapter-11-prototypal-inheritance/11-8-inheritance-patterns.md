---
title: Inheritance Patterns
sidebar:
  order: 8
  label: 11.8 Inheritance Patterns
---

In JavaScript, inheritance is achieved through prototypes, but several patterns have evolved to manage the inheritance of properties and methods efficiently. Each pattern solves specific problems, and understanding them helps in writing clean, maintainable, and performant code.

This document provides a conceptual overview of the five classical inheritance patterns. For complete code examples and step‑by‑step breakdowns.

- [11.8.1 Prototype Chain Inheritance](/en/chapter-11-prototypal-inheritance/11-8-1-prototype-chain-inheritance/)
- [11.8.2 Constructor Stealing](/en/chapter-11-prototypal-inheritance/11-8-2-constructor-stealing/)
- [11.8.3 Combination Inheritance](/en/chapter-11-prototypal-inheritance/11-8-3-combination-inheritance/)
- [11.8.4 Parasitic Inheritance](/en/chapter-11-prototypal-inheritance/11-8-4-parasitic-inheritance/)
- [11.8.5 Parasitic Combination Inheritance](/en/chapter-11-prototypal-inheritance/11-8-5-parasitic-combination-inheritance/)

## Summary Table

| Pattern               | Instance Properties  | Shared Methods | Parent Constructor Calls | Efficiency |
| --------------------- | -------------------- | -------------- | ------------------------ | ---------- |
| Prototype Chain       | Shared               | Yes            | 1                        | Medium     |
| Constructor Stealing  | Own copy             | No             | 1                        | Low        |
| Combination           | Own copy             | Yes            | 2                        | Medium     |
| Parasitic             | Own copy (via clone) | No (recreated) | 0 (no constructor)       | Low        |
| Parasitic Combination | Own copy             | Yes            | 1                        | High       |
