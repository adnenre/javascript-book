---
title: Champs privés (#)
sidebar:
  order: 5
  label: 12.5 Champs privés (#)
---

Les champs privés sont une fonctionnalité introduite en ES2022 pour créer des propriétés et méthodes véritablement privées à l’intérieur d’une classe. Ils sont préfixés par un dièse (`#`) et ne peuvent pas être accédés depuis l’extérieur de la classe. Cela assure l’encapsulation.

### Points clés

- Déclarés avec `#nomDuChamp`.
- Peuvent être utilisés comme champs d’instance ou champs statiques.
- Les méthodes privées peuvent également être définies avec `#nomMethode()`.
- Ils sont véritablement privés (pas seulement une convention de nommage comme `_`).

### Exemple de code

```javascript
class BankAccount {
  #balance = 0; // champ privé

  constructor(owner) {
    this.owner = owner;
  }

  #logTransaction(amount) {
    // méthode privée
    console.log(`Transaction : ${amount}`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction(amount);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice");
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance);   // SyntaxError
```
