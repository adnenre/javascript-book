---
title: RegExp Object
sidebar:
  order: 7
  label: 13.7 RegExp Object
---

# 13.7-regexp-object.md

# 13.7 RegExp Object

## English

The `RegExp` object is used for pattern matching with regular expressions. It can be created with literal notation (`/pattern/flags`) or the constructor (`new RegExp('pattern', 'flags')`). Regular expressions are used with string methods like `match()`, `replace()`, `search()`, `split()`.

### Key Points

- Flags: `g` (global), `i` (case‑insensitive), `m` (multiline), `u` (unicode), `y` (sticky).
- Methods: `exec()`, `test()`.
- String methods using regex: `match()`, `replace()`, `search()`, `split()`.

### Code Example

```javascript
// Literal notation
const regex1 = /hello/i;
console.log(regex1.test("Hello World")); // true

// Constructor
const regex2 = new RegExp("world", "g");
const text = "Hello world, world!";
console.log(text.match(regex2)); // ["world", "world"]

// Replace with regex
console.log(text.replace(/world/g, "JavaScript")); // "Hello JavaScript, JavaScript!"

// exec example
const regex3 = /(\d{4})-(\d{2})-(\d{2})/;
const result = regex3.exec("2025-03-27");
console.log(result[1]); // "2025"
```

---

L’objet `RegExp` est utilisé pour la recherche de motifs avec des expressions régulières. Il peut être créé avec une notation littérale (`/motif/drapeaux`) ou avec le constructeur (`new RegExp('motif', 'drapeaux')`). Les expressions régulières sont utilisées avec les méthodes de chaînes comme `match()`, `replace()`, `search()`, `split()`.

### Points clés

- Drapeaux : `g` (global), `i` (insensible à la casse), `m` (multiligne), `u` (unicode), `y` (collant).
- Méthodes : `exec()`, `test()`.
- Méthodes de chaînes utilisant les regex : `match()`, `replace()`, `search()`, `split()`.

### Exemple de code

```javascript
// Notation littérale
const regex1 = /hello/i;
console.log(regex1.test("Hello World")); // true

// Constructeur
const regex2 = new RegExp("monde", "g");
const text = "Bonjour monde, monde !";
console.log(text.match(regex2)); // ["monde", "monde"]

// Remplacement avec regex
console.log(text.replace(/monde/g, "JavaScript")); // "Bonjour JavaScript, JavaScript !"

// Exemple avec exec
const regex3 = /(\d{4})-(\d{2})-(\d{2})/;
const result = regex3.exec("2025-03-27");
console.log(result[1]); // "2025"
```
