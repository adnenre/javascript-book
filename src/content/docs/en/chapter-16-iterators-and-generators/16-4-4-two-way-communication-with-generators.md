---
title: Two-Way Communication with Generators
sidebar:
  order: 4
  label: 16.4.4 Two-Way Communication with Generators
---

One of the most powerful features of generators is the ability to send values back into the generator. This creates a two-way communication channel between the generator and its caller.

### How Two-Way Communication Works

The `next(value)` method passes a value into the generator. This value becomes the result of the currently suspended `yield` expression.

### Communication Flow

Caller ──value──▶ Generator (through next())
Caller ◀──yield── Generator (through return value)

text

Each interaction is bidirectional:

1. Caller calls `next()` → generator runs to next `yield`
2. Generator yields a value back to caller
3. Caller can send a new value via the next `next(value)`
4. That value is received at the `yield` expression

### Key Points

- The first call to `next()` can only **start** the generator (passed value is ignored).
- Subsequent `next(value)` calls provide the value for the **current** `yield`.
- This enables state machines, coroutines, and interactive iterators.
- The pattern is similar to "what goes up must come down" for each interaction.

### Example Code

```javascript
// Basic two-way communication
function* conversation() {
  const name = yield "What is your name?";
  const age = yield `Hello ${name}! How old are you?`;
  yield `You are ${age} years old. Nice to meet you!`;
}

const chat = conversation();
console.log(chat.next().value); // 'What is your name?'
console.log(chat.next("Alice").value); // 'Hello Alice! How old are you?'
console.log(chat.next(30).value); // 'You are 30 years old. Nice to meet you!'

// Interactive state machine
function* coffeeMachine() {
  let coins = 0;
  yield "Insert coins";

  while (true) {
    const inserted = yield `Current: ${coins} coins. Need 5 for coffee.`;
    coins += inserted;

    if (coins >= 5) {
      coins = 0;
      yield "☕ Here is your coffee!";
      yield "Insert coins for another coffee";
    }
  }
}

const machine = coffeeMachine();
console.log(machine.next().value); // 'Insert coins'
console.log(machine.next(2).value); // 'Current: 2 coins. Need 5 for coffee.'
console.log(machine.next(2).value); // 'Current: 4 coins. Need 5 for coffee.'
console.log(machine.next(1).value); // 'Current: 5 coins. Need 5 for coffee.'
console.log(machine.next(0).value); // '☕ Here is your coffee!'
console.log(machine.next(3).value); // 'Insert coins for another coffee'

// Building a simple REPL (Read-Eval-Print Loop)
function* repl() {
  console.log('REPL started. Type "exit" to quit.');
  let expression;

  while (expression !== "exit") {
    expression = yield "> ";

    if (expression !== "exit") {
      try {
        // Note: eval is used for demonstration only
        const result = eval(expression);
        yield `${expression} = ${result}`;
      } catch (error) {
        yield `Error: ${error.message}`;
      }
    }
  }
  yield "Goodbye!";
}

const interpreter = repl();
console.log(interpreter.next().value); // '> '
console.log(interpreter.next("2 + 2").value); // '2 + 2 = 4'
console.log(interpreter.next().value); // '> '
console.log(interpreter.next("exit").value); // 'Goodbye!'

// Using two-way communication for validation
function* formValidator() {
  const email = yield "Enter email:";
  if (!email.includes("@")) {
    yield "Invalid email format. Please restart.";
    return;
  }

  const age = yield "Enter age:";
  if (age < 18 || age > 120) {
    yield "Age must be between 18 and 120. Please restart.";
    return;
  }

  yield `Validated: ${email}, ${age} years old. Complete!`;
}

const validator = formValidator();
console.log(validator.next().value); // 'Enter email:'
console.log(validator.next("invalid").value); // 'Invalid email format...'
```
