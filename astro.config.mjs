// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";
// https://astro.build/config
export default defineConfig({
  site: "https://adnenre.github.io/javascript-book",
  base: ".",
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: { en: "JavaScript Book", fr: "Javascript Livre" },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/javascript-book/" }],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: "1 - JavaScript Foundations",
          collapsed: true,
          translations: {
            fr: "1 - Fondamentaux de JavaScript",
          },
          items: [
            {
              label: "1.1 History and Evolution of JavaScript",
              translations: {
                fr: "1.1 Histoire et évolution de JavaScript",
              },
              slug: "chapter-1-javascript-foundations/1-1-history-and-evolution-of-javascript",
            },
            {
              label: "1.2 Setting Up Your Development Environment",
              translations: {
                fr: "1.2 Configuration de votre environnement de développement",
              },
              slug: "chapter-1-javascript-foundations/1-2-setting-up-your-development-environment",
            },
            {
              label: "1.3 Your First JavaScript Program",
              translations: {
                fr: "1.3 Votre premier programme JavaScript",
              },
              slug: "chapter-1-javascript-foundations/1-3-your-first-javascript-program",
            },
            {
              label: "1.4 JavaScript in Different Environments",
              translations: {
                fr: "1.4 JavaScript dans différents environnements",
              },
              slug: "chapter-1-javascript-foundations/1-4-javascript-in-different-environments",
            },
            {
              label: "1.5 Understanding the ECMAScript Specification",
              translations: {
                fr: "1.5 Comprendre la spécification ECMAScript",
              },
              slug: "chapter-1-javascript-foundations/1-5-understanding-the-ecmascript-specification",
            },
          ],
        },
        {
          label: "2 - Variables and Data Types",
          collapsed: true,
          translations: {
            fr: "2 - Variables et types de données",
          },
          items: [
            {
              label: "2.1 Variables: var, let, and const",
              translations: {
                fr: "2.1 Variables : var, let et const",
              },
              slug: "chapter-2-variables-and-data-types/2-1-variables-var-let-and-const",
            },
            {
              label: "2.2 Hoisting and Temporal Dead Zone",
              translations: {
                fr: "2.2 Hoisting et zone morte temporaire",
              },
              slug: "chapter-2-variables-and-data-types/2-2-hoisting-and-temporal-dead-zone",
            },
            {
              label: "2.3 Primitive Data Types",
              translations: {
                fr: "2.3 Types de données primitifs",
              },
              slug: "chapter-2-variables-and-data-types/2-3-primitive-data-types",
            },
            {
              label: "2.3.1 Number (integers, floats, NaN, Infinity)",
              translations: {
                fr: "2.3.1 Number (entiers, flottants, NaN, Infinity)",
              },
              slug: "chapter-2-variables-and-data-types/2-3-1-number-integers-floats-nan-infinity",
            },
            {
              label: "2.3.2 String (methods, template literals ...)",
              translations: {
                fr: "2.3.2 String (méthodes, littéraux de gabarit...)",
              },
              slug: "chapter-2-variables-and-data-types/2-3-2-string-methods-template-literals",
            },
            {
              label: "2.3.3 Boolean",
              translations: {
                fr: "2.3.3 Boolean",
              },
              slug: "chapter-2-variables-and-data-types/2-3-3-boolean",
            },
            {
              label: "2.3.4 Undefined and Null",
              translations: {
                fr: "2.3.4 Undefined et Null",
              },
              slug: "chapter-2-variables-and-data-types/2-3-4-undefined-and-null",
            },
            {
              label: "2.3.5 Symbol",
              translations: {
                fr: "2.3.5 Symbol",
              },
              slug: "chapter-2-variables-and-data-types/2-3-5-symbol",
            },
            {
              label: "2.3.6 BigInt",
              translations: {
                fr: "2.3.6 BigInt",
              },
              slug: "chapter-2-variables-and-data-types/2-3-6-bigint",
            },
            {
              label: "2.4 Reference Data Types",
              translations: {
                fr: "2.4 Types de données référence",
              },
              slug: "chapter-2-variables-and-data-types/2-4-reference-data-types",
            },
            {
              label: "2.4.1 Object",
              translations: {
                fr: "2.4.1 Object",
              },
              slug: "chapter-2-variables-and-data-types/2-4-1-object",
            },
            {
              label: "2.4.2 Array",
              translations: {
                fr: "2.4.2 Array",
              },
              slug: "chapter-2-variables-and-data-types/2-4-2-array",
            },
            {
              label: "2.4.3 Function",
              translations: {
                fr: "2.4.3 Function",
              },
              slug: "chapter-2-variables-and-data-types/2-4-3-function",
            },
            {
              label: "2.5 Type Coercion and Conversion",
              translations: {
                fr: "2.5 Coercition et conversion de types",
              },
              slug: "chapter-2-variables-and-data-types/2-5-type-coercion-and-conversion",
            },
            {
              label: "2.6 Type Checking Methods (typeof, instanceof,..)",
              translations: {
                fr: "2.6 Méthodes de vérification de type (typeof, instanceof, ...)",
              },
              slug: "chapter-2-variables-and-data-types/2-6-type-checking-methods-typeof-instanceof",
            },
          ],
        },
        {
          label: "3 - Operators and Expressions",
          collapsed: true,
          translations: {
            fr: "3 - Opérateurs et expressions",
          },
          items: [
            {
              label: "3.1 Arithmetic Operators",
              translations: {
                fr: "3.1 Opérateurs arithmétiques",
              },
              slug: "chapter-3-operators-and-expressions/3-1-arithmetic-operators",
            },
            {
              label: "3.2 Assignment Operators",
              translations: {
                fr: "3.2 Opérateurs d'affectation",
              },
              slug: "chapter-3-operators-and-expressions/3-2-assignment-operators",
            },
            {
              label: "3.3 Comparison Operators (== vs ===)",
              translations: {
                fr: "3.3 Opérateurs de comparaison (== vs ===)",
              },
              slug: "chapter-3-operators-and-expressions/3-3-comparison-operators-vs",
            },
            {
              label: "3.4 Logical Operators (&&, ||, ??)",
              translations: {
                fr: "3.4 Opérateurs logiques (&&, ||, ??)",
              },
              slug: "chapter-3-operators-and-expressions/3-4-logical-operators",
            },
            {
              label: "3.5 Bitwise Operators",
              translations: {
                fr: "3.5 Opérateurs binaires",
              },
              slug: "chapter-3-operators-and-expressions/3-5-bitwise-operators",
            },
            {
              label: "3.6 Ternary Operator",
              translations: {
                fr: "3.6 Opérateur ternaire",
              },
              slug: "chapter-3-operators-and-expressions/3-6-ternary-operator",
            },
            {
              label: "3.7 Comma Operator",
              translations: {
                fr: "3.7 Opérateur virgule",
              },
              slug: "chapter-3-operators-and-expressions/3-7-comma-operator",
            },
            {
              label: "3.8 typeof and instanceof Operators",
              translations: {
                fr: "3.8 Opérateurs typeof et instanceof",
              },
              slug: "chapter-3-operators-and-expressions/3-8-typeof-and-instanceof-operators",
            },
            {
              label: "3.9 Optional Chaining (?.)",
              translations: {
                fr: "3.9 Chaînage optionnel (?.)",
              },
              slug: "chapter-3-operators-and-expressions/3-9-optional-chaining",
            },
            {
              label: "3.10 Nullish Coalescing (??)",
              translations: {
                fr: "3.10 Coalescence nulle (??)",
              },
              slug: "chapter-3-operators-and-expressions/3-10-nullish-coalescing",
            },
            {
              label: "3.11 Operator Precedence and Associativity",
              translations: {
                fr: "3.11 Précédence et associativité des opérateurs",
              },
              slug: "chapter-3-operators-and-expressions/3-11-operator-precedence-and-associativity",
            },
          ],
        },
        {
          label: "4 - Control Flow",
          collapsed: true,
          translations: {
            fr: "4 - Contrôle de flux",
          },
          items: [
            {
              label: "4.1 Conditional Statements",
              translations: {
                fr: "4.1 Instructions conditionnelles",
              },
              slug: "chapter-4-control-flow/4-1-conditional-statements",
            },
            {
              label: "4.1.1 if, else if, else",
              translations: {
                fr: "4.1.1 if, else if, else",
              },
              slug: "chapter-4-control-flow/4-1-1-if-else-if-else",
            },
            {
              label: "4.1.2 switch statement",
              translations: {
                fr: "4.1.2 Instruction switch",
              },
              slug: "chapter-4-control-flow/4-1-2-switch-statement",
            },
            {
              label: "4.1.3 Conditional (ternary) operator",
              translations: {
                fr: "4.1.3 Opérateur conditionnel (ternaire)",
              },
              slug: "chapter-4-control-flow/4-1-3-conditional-ternary-operator",
            },
            {
              label: "4.2 Loops",
              translations: {
                fr: "4.2 Boucles",
              },
              slug: "chapter-4-control-flow/4-2-loops",
            },
            {
              label: "4.2.1 for loop",
              translations: {
                fr: "4.2.1 Boucle for",
              },
              slug: "chapter-4-control-flow/4-2-1-for-loop",
            },
            {
              label: "4.2.2 while loop",
              translations: {
                fr: "4.2.2 Boucle while",
              },
              slug: "chapter-4-control-flow/4-2-2-while-loop",
            },
            {
              label: "4.2.3 do...while loop",
              translations: {
                fr: "4.2.3 Boucle do...while",
              },
              slug: "chapter-4-control-flow/4-2-3-dowhile-loop",
            },
            {
              label: "4.2.4 for...in loop",
              translations: {
                fr: "4.2.4 Boucle for...in",
              },
              slug: "chapter-4-control-flow/4-2-4-forin-loop",
            },
            {
              label: "4.2.5 for...of loop",
              translations: {
                fr: "4.2.5 Boucle for...of",
              },
              slug: "chapter-4-control-flow/4-2-5-forof-loop",
            },
            {
              label: "4.3 Loop Control (break, continue, labeled statements)",
              translations: {
                fr: "4.3 Contrôle de boucle (break, continue, instructions étiquetées)",
              },
              slug: "chapter-4-control-flow/4-3-loop-control-break-continue-labeled-statements",
            },
            {
              label: "4.4 Error Handling with try/catch/finally",
              translations: {
                fr: "4.4 Gestion d'erreurs avec try/catch/finally",
              },
              slug: "chapter-4-control-flow/4-4-error-handling-with-trycatchfinally",
            },
            {
              label: "4.5 Throwing Custom Errors",
              translations: {
                fr: "4.5 Lever des erreurs personnalisées",
              },
              slug: "chapter-4-control-flow/4-5-throwing-custom-errors",
            },
          ],
        },
        {
          label: "5 - Function Fundamentals",
          collapsed: true,
          translations: {
            fr: "5 - Fondamentaux des fonctions",
          },
          items: [
            {
              label: "5.1 Function Declarations",
              translations: {
                fr: "5.1 Déclarations de fonction",
              },
              slug: "chapter-5-function-fundamentals/5-1-function-declarations",
            },
            {
              label: "5.2 Function Expressions",
              translations: {
                fr: "5.2 Expressions de fonction",
              },
              slug: "chapter-5-function-fundamentals/5-2-function-expressions",
            },
            {
              label: "5.3 Arrow Functions",
              translations: {
                fr: "5.3 Fonctions fléchées",
              },
              slug: "chapter-5-function-fundamentals/5-3-arrow-functions",
            },
            {
              label: "5.4 Immediately Invoked Function Expressions (IIFE)",
              translations: {
                fr: "5.4 Expressions de fonction immédiatement invoquées (IIFE)",
              },
              slug: "chapter-5-function-fundamentals/5-4-immediately-invoked-function-expressions-iife",
            },
            {
              label: "5.5 Generator Functions",
              translations: {
                fr: "5.5 Fonctions génératrices",
              },
              slug: "chapter-5-function-fundamentals/5-5-generator-functions",
            },
            {
              label: "5.6 Async Functions",
              translations: {
                fr: "5.6 Fonctions asynchrones",
              },
              slug: "chapter-5-function-fundamentals/5-6-async-functions",
            },
            {
              label: "5.7 Function Parameters",
              translations: {
                fr: "5.7 Paramètres de fonction",
              },
              slug: "chapter-5-function-fundamentals/5-7-function-parameters",
            },
            {
              label: "5.7.1 Default Parameters",
              translations: {
                fr: "5.7.1 Paramètres par défaut",
              },
              slug: "chapter-5-function-fundamentals/5-7-1-default-parameters",
            },
            {
              label: "5.7.2 Rest Parameters",
              translations: {
                fr: "5.7.2 Paramètres du reste",
              },
              slug: "chapter-5-function-fundamentals/5-7-2-rest-parameters",
            },
            {
              label: "5.7.3 The arguments Object",
              translations: {
                fr: "5.7.3 L'objet arguments",
              },
              slug: "chapter-5-function-fundamentals/5-7-3-the-arguments-object",
            },
            {
              label: "5.7.4 Parameter Destructuring",
              translations: {
                fr: "5.7.4 Destructuration des paramètres",
              },
              slug: "chapter-5-function-fundamentals/5-7-4-parameter-destructuring",
            },
          ],
        },
        {
          label: "6 - The 'this' Keyword",
          collapsed: true,
          translations: {
            fr: "6 - Le mot-clé 'this'",
          },
          items: [
            {
              label: "6.1 What is 'this'?",
              translations: {
                fr: "6.1 Qu'est-ce que 'this' ?",
              },
              slug: "chapter-6-the-this-keyword/6-1-what-is-this",
            },
            {
              label: "6.2 Global Context",
              translations: {
                fr: "6.2 Contexte global",
              },
              slug: "chapter-6-the-this-keyword/6-2-global-context",
            },
            {
              label: "6.3 Function Context",
              translations: {
                fr: "6.3 Contexte de fonction",
              },
              slug: "chapter-6-the-this-keyword/6-3-function-context",
            },
            {
              label: "6.4 Method Context",
              translations: {
                fr: "6.4 Contexte de méthode",
              },
              slug: "chapter-6-the-this-keyword/6-4-method-context",
            },
            {
              label: "6.5 Constructor Context",
              translations: {
                fr: "6.5 Contexte de constructeur",
              },
              slug: "chapter-6-the-this-keyword/6-5-constructor-context",
            },
            {
              label: "6.6 Event Handler Context",
              translations: {
                fr: "6.6 Contexte de gestionnaire d'événement",
              },
              slug: "chapter-6-the-this-keyword/6-6-event-handler-context",
            },
            {
              label: "6.7 Arrow Functions and 'this'",
              translations: {
                fr: "6.7 Fonctions fléchées et 'this'",
              },
              slug: "chapter-6-the-this-keyword/6-7-arrow-functions-and-this",
            },
            {
              label: "6.8 Explicit Binding",
              translations: {
                fr: "6.8 Liaison explicite",
              },
              slug: "chapter-6-the-this-keyword/6-8-explicit-binding",
            },
            {
              label: "6.8.1 call()",
              translations: {
                fr: "6.8.1 call()",
              },
              slug: "chapter-6-the-this-keyword/6-8-1-call",
            },
            {
              label: "6.8.2 apply()",
              translations: {
                fr: "6.8.2 apply()",
              },
              slug: "chapter-6-the-this-keyword/6-8-2-apply",
            },
            {
              label: "6.8.3 bind()",
              translations: {
                fr: "6.8.3 bind()",
              },
              slug: "chapter-6-the-this-keyword/6-8-3-bind",
            },
            {
              label: "6.9 'this' Priority Rules",
              translations: {
                fr: "6.9 Règles de priorité de 'this'",
              },
              slug: "chapter-6-the-this-keyword/6-9-this-priority-rules",
            },
          ],
        },
        {
          label: "7 - Closures",
          collapsed: true,
          translations: {
            fr: "7 - Closures",
          },
          items: [
            {
              label: "7.1 Understanding Lexical Scope",
              translations: {
                fr: "7.1 Comprendre la portée lexicale",
              },
              slug: "chapter-7-closures/7-1-understanding-lexical-scope",
            },
            {
              label: "7.2 What are Closures?",
              translations: {
                fr: "7.2 Que sont les closures ?",
              },
              slug: "chapter-7-closures/7-2-what-are-closures",
            },
            {
              label: "7.3 How Closures Work",
              translations: {
                fr: "7.3 Comment fonctionnent les closures",
              },
              slug: "chapter-7-closures/7-3-how-closures-work",
            },
            {
              label: "7.4 Practical Closure Patterns",
              translations: {
                fr: "7.4 Modèles pratiques de closures",
              },
              slug: "chapter-7-closures/7-4-practical-closure-patterns",
            },
            {
              label: "7.4.1 Private Variables",
              translations: {
                fr: "7.4.1 Variables privées",
              },
              slug: "chapter-7-closures/7-4-1-private-variables",
            },
            {
              label: "7.4.2 Function Factories",
              translations: {
                fr: "7.4.2 Fabriques de fonctions",
              },
              slug: "chapter-7-closures/7-4-2-function-factories",
            },
            {
              label: "7.4.3 Module Pattern",
              translations: {
                fr: "7.4.3 Modèle module",
              },
              slug: "chapter-7-closures/7-4-3-module-pattern",
            },
            {
              label: "7.4.4 Memoization",
              translations: {
                fr: "7.4.4 Mémoïsation",
              },
              slug: "chapter-7-closures/7-4-4-memoization",
            },
            {
              label: "7.4.5 Event Listeners and Callbacks",
              translations: {
                fr: "7.4.5 Écouteurs d'événements et callbacks",
              },
              slug: "chapter-7-closures/7-4-5-event-listeners-and-callbacks",
            },
            {
              label: "7.5 Closure Performance Considerations",
              translations: {
                fr: "7.5 Considérations de performance des closures",
              },
              slug: "chapter-7-closures/7-5-closure-performance-considerations",
            },
            {
              label: "7.6 Common Closure Pitfalls",
              translations: {
                fr: "7.6 Pièges courants des closures",
              },
              slug: "chapter-7-closures/7-6-common-closure-pitfalls",
            },
          ],
        },
        {
          label: "8 - Higher-Order Functions",
          collapsed: true,
          translations: {
            fr: "8 - Fonctions d'ordre supérieur",
          },
          items: [
            {
              label: "8.1 Functions as First-Class Citizens",
              translations: {
                fr: "8.1 Les fonctions comme citoyens de première classe",
              },
              slug: "chapter-8-higher-order-functions/8-1-functions-as-first-class-citizens",
            },
            {
              label: "8.2 Functions Accepting Functions (Callbacks)",
              translations: {
                fr: "8.2 Fonctions acceptant des fonctions (callbacks)",
              },
              slug: "chapter-8-higher-order-functions/8-2-functions-accepting-functions-callbacks",
            },
            {
              label: "8.3 Functions Returning Functions",
              translations: {
                fr: "8.3 Fonctions retournant des fonctions",
              },
              slug: "chapter-8-higher-order-functions/8-3-functions-returning-functions",
            },
            {
              label: "8.4 Function Composition",
              translations: {
                fr: "8.4 Composition de fonctions",
              },
              slug: "chapter-8-higher-order-functions/8-4-function-composition",
            },
            {
              label: "8.5 Currying",
              translations: {
                fr: "8.5 Curryfication",
              },
              slug: "chapter-8-higher-order-functions/8-5-currying",
            },
            {
              label: "8.5.1 What is Currying?",
              translations: {
                fr: "8.5.1 Qu'est-ce que la curryfication ?",
              },
              slug: "chapter-8-higher-order-functions/8-5-1-what-is-currying",
            },
            {
              label: "8.5.2 Implementing Currying",
              translations: {
                fr: "8.5.2 Implémenter la curryfication",
              },
              slug: "chapter-8-higher-order-functions/8-5-2-implementing-currying",
            },
            {
              label: "8.5.3 Partial Application vs Currying",
              translations: {
                fr: "8.5.3 Application partielle vs curryfication",
              },
              slug: "chapter-8-higher-order-functions/8-5-3-partial-application-vs-currying",
            },
            {
              label: "8.6 Practical Higher-Order Functions",
              translations: {
                fr: "8.6 Fonctions d'ordre supérieur pratiques",
              },
              slug: "chapter-8-higher-order-functions/8-6-practical-higher-order-functions",
            },
            {
              label: "8.6.1 once()",
              translations: {
                fr: "8.6.1 once()",
              },
              slug: "chapter-8-higher-order-functions/8-6-1-once",
            },
            {
              label: "8.6.2 debounce()",
              translations: {
                fr: "8.6.2 debounce()",
              },
              slug: "chapter-8-higher-order-functions/8-6-2-debounce",
            },
            {
              label: "8.6.3 throttle()",
              translations: {
                fr: "8.6.3 throttle()",
              },
              slug: "chapter-8-higher-order-functions/8-6-3-throttle",
            },
            {
              label: "8.6.4 memoize()",
              translations: {
                fr: "8.6.4 memoize()",
              },
              slug: "chapter-8-higher-order-functions/8-6-4-memoize",
            },
            {
              label: "8.7 built-in-higher-order-functions",
              translations: { fr: "8.7 Fonctions d'ordre supérieur intégrées" },
              slug: "chapter-8-higher-order-functions/8-7-built-in-higher-order-functions",
            },
          ],
        },
        {
          label: "9 - Recursion",
          translations: {
            fr: "9 - Récursivité",
          },
          items: [
            {
              label: "9.1 Understanding Recursion",
              translations: {
                fr: "9.1 Comprendre la récursivité",
              },
              slug: "chapter-9-recursion/9-1-understanding-recursion",
            },
            {
              label: "9.2 Base Case and Recursive Case",
              translations: {
                fr: "9.2 Cas de base et cas récursif",
              },
              slug: "chapter-9-recursion/9-2-base-case-and-recursive-case",
            },
            {
              label: "9.3 The Call Stack in Recursion",
              translations: {
                fr: "9.3 La pile d'appels dans la récursivité",
              },
              slug: "chapter-9-recursion/9-3-the-call-stack-in-recursion",
            },
            {
              label: "9.4 Tail Call Optimization",
              translations: {
                fr: "9.4 Optimisation des appels terminaux",
              },
              slug: "chapter-9-recursion/9-4-tail-call-optimization",
            },
            {
              label: "9.5 Common Recursive Problems",
              translations: {
                fr: "9.5 Problèmes récursifs courants",
              },
              slug: "chapter-9-recursion/9-5-common-recursive-problems",
            },
            {
              label: "9.5.1 Factorial",
              translations: {
                fr: "9.5.1 Factorielle",
              },
              slug: "chapter-9-recursion/9-5-1-factorial",
            },
            {
              label: "9.5.2 Fibonacci",
              translations: {
                fr: "9.5.2 Fibonacci",
              },
              slug: "chapter-9-recursion/9-5-2-fibonacci",
            },
            {
              label: "9.5.3 Tree Traversal",
              translations: {
                fr: "9.5.3 Parcours d'arbre",
              },
              slug: "chapter-9-recursion/9-5-3-tree-traversal",
            },
            {
              label: "9.5.4 Deep Object Cloning",
              translations: {
                fr: "9.5.4 Clonage profond d'objet",
              },
              slug: "chapter-9-recursion/9-5-4-deep-object-cloning",
            },
            {
              label: "9.6 Recursion vs Iteration",
              translations: {
                fr: "9.6 Récursivité vs itération",
              },
              slug: "chapter-9-recursion/9-6-recursion-vs-iteration",
            },
          ],
        },
        {
          label: "10 - Objects Deep Dive",
          translations: {
            fr: "10 - Plongée dans les objets",
          },
          items: [
            {
              label: "10.1 Object Literals",
              translations: {
                fr: "10.1 Littéraux d'objet",
              },
              slug: "chapter-10-objects-deep-dive/10-1-object-literals",
            },
            {
              label: "10.2 Property Accessors (dot vs bracket)",
              translations: {
                fr: "10.2 Accesseurs de propriété (point vs crochets)",
              },
              slug: "chapter-10-objects-deep-dive/10-2-property-accessors-dot-vs-bracket",
            },
            {
              label: "10.3 Computed Properties",
              translations: {
                fr: "10.3 Propriétés calculées",
              },
              slug: "chapter-10-objects-deep-dive/10-3-computed-properties",
            },
            {
              label: "10.4 Method Definitions",
              translations: {
                fr: "10.4 Définitions de méthode",
              },
              slug: "chapter-10-objects-deep-dive/10-4-method-definitions",
            },
            {
              label: "10.5 Object Destructuring",
              translations: {
                fr: "10.5 Destructuration d'objet",
              },
              slug: "chapter-10-objects-deep-dive/10-5-object-destructuring",
            },
            {
              label: "10.6 Property Descriptors",
              translations: {
                fr: "10.6 Descripteurs de propriété",
              },
              slug: "chapter-10-objects-deep-dive/10-6-property-descriptors",
            },
            {
              label: "10.6.1 value",
              translations: {
                fr: "10.6.1 value",
              },
              slug: "chapter-10-objects-deep-dive/10-6-1-value",
            },
            {
              label: "10.6.2 writable",
              translations: {
                fr: "10.6.2 writable",
              },
              slug: "chapter-10-objects-deep-dive/10-6-2-writable",
            },
            {
              label: "10.6.3 enumerable",
              translations: {
                fr: "10.6.3 enumerable",
              },
              slug: "chapter-10-objects-deep-dive/10-6-3-enumerable",
            },
            {
              label: "10.6.4 configurable",
              translations: {
                fr: "10.6.4 configurable",
              },
              slug: "chapter-10-objects-deep-dive/10-6-4-configurable",
            },
            {
              label: "10.6.5 get and set",
              translations: {
                fr: "10.6.5 get et set",
              },
              slug: "chapter-10-objects-deep-dive/10-6-5-get-and-set",
            },
            {
              label: "10.7 Object Methods",
              translations: {
                fr: "10.7 Méthodes d'objet",
              },
              slug: "chapter-10-objects-deep-dive/10-7-object-methods",
            },
            {
              label: "10.7.1 Object.create()",
              translations: {
                fr: "10.7.1 Object.create()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-1-objectcreate",
            },
            {
              label: "10.7.2 Object.assign()",
              translations: {
                fr: "10.7.2 Object.assign()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-2-objectassign",
            },
            {
              label: "10.7.3 Object.keys(), values(), entries()",
              translations: {
                fr: "10.7.3 Object.keys(), values(), entries()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-3-objectkeys-values-entries",
            },
            {
              label: "10.7.4 Object.freeze(), seal(), preventExtensions()",
              translations: {
                fr: "10.7.4 Object.freeze(), seal(), preventExtensions()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-4-objectfreeze-seal-preventextensions",
            },
            {
              label: "10.7.5 Object.hasOwn()",
              translations: {
                fr: "10.7.5 Object.hasOwn()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-5-objecthasown",
            },
            {
              label: "10.7.6 Object.defineProperty()",
              translations: {
                fr: "10.7.6 Object.defineProperty()",
              },
              slug: "chapter-10-objects-deep-dive/10-7-6-objectdefineproperty",
            },
            {
              label: "10.8 Property Enumeration Order",
              translations: {
                fr: "10.8 Ordre d'énumération des propriétés",
              },
              slug: "chapter-10-objects-deep-dive/10-8-property-enumeration-order",
            },
          ],
        },
        {
          label: "11 - Prototypal Inheritance",
          translations: {
            fr: "11 - Héritage prototypal",
          },
          items: [
            {
              label: "11.1 Understanding Prototypes",
              translations: {
                fr: "11.1 Comprendre les prototypes",
              },
              slug: "chapter-11-prototypal-inheritance/11-1-understanding-prototypes",
            },
            {
              label: "11.2 The Prototype Chain",
              translations: {
                fr: "11.2 La chaîne de prototypes",
              },
              slug: "chapter-11-prototypal-inheritance/11-2-the-prototype-chain",
            },
            {
              label: "11.3 __proto__ vs prototype",
              translations: {
                fr: "11.3 __proto__ vs prototype",
              },
              slug: "chapter-11-prototypal-inheritance/11-3-__proto__-vs-prototype",
            },
            {
              label: "11.4 Object.getPrototypeOf() and Object.setPrototypeOf()",
              translations: {
                fr: "11.4 Object.getPrototypeOf() et Object.setPrototypeOf()",
              },
              slug: "chapter-11-prototypal-inheritance/11-4-objectgetprototypeof-and-objectsetprototypeof",
            },
            {
              label: "11.5 The instanceof Operator",
              translations: {
                fr: "11.5 L'opérateur instanceof",
              },
              slug: "chapter-11-prototypal-inheritance/11-5-the-instanceof-operator",
            },
            {
              label: "11.6 constructor Property",
              translations: {
                fr: "11.6 Propriété constructor",
              },
              slug: "chapter-11-prototypal-inheritance/11-6-constructor-property",
            },
            {
              label: "11.7 Creating Objects with Custom Prototypes",
              translations: {
                fr: "11.7 Créer des objets avec des prototypes personnalisés",
              },
              slug: "chapter-11-prototypal-inheritance/11-7-creating-objects-with-custom-prototypes",
            },
            {
              label: "11.8 Inheritance Patterns",
              translations: {
                fr: "11.8 Modèles d'héritage",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-inheritance-patterns",
            },
            {
              label: "11.8.1 Prototype Chain Inheritance",
              translations: {
                fr: "11.8.1 Héritage par chaîne de prototypes",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-1-prototype-chain-inheritance",
            },
            {
              label: "11.8.2 Constructor Stealing",
              translations: {
                fr: "11.8.2 Vol de constructeur",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-2-constructor-stealing",
            },
            {
              label: "11.8.3 Combination Inheritance",
              translations: {
                fr: "11.8.3 Héritage combiné",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-3-combination-inheritance",
            },
            {
              label: "11.8.4 Parasitic Inheritance",
              translations: {
                fr: "11.8.4 Héritage parasitaire",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-4-parasitic-inheritance",
            },
            {
              label: "11.8.5 Parasitic Combination Inheritance",
              translations: {
                fr: "11.8.5 Héritage combiné parasitaire",
              },
              slug: "chapter-11-prototypal-inheritance/11-8-5-parasitic-combination-inheritance",
            },
          ],
        },
        {
          label: "12 - ES6 Classes",
          translations: {
            fr: "12 - Classes ES6",
          },
          items: [
            {
              label: "12.1 Class Declarations and Expressions",
              translations: {
                fr: "12.1 Déclarations et expressions de classe",
              },
              slug: "chapter-12-es6-classes/12-1-class-declarations-and-expressions",
            },
            {
              label: "12.2 The constructor Method",
              translations: {
                fr: "12.2 La méthode constructor",
              },
              slug: "chapter-12-es6-classes/12-2-the-constructor-method",
            },
            {
              label: "12.3 Instance Properties",
              translations: {
                fr: "12.3 Propriétés d'instance",
              },
              slug: "chapter-12-es6-classes/12-3-instance-properties",
            },
            {
              label: "12.4 Static Methods and Properties",
              translations: {
                fr: "12.4 Méthodes et propriétés statiques",
              },
              slug: "chapter-12-es6-classes/12-4-static-methods-and-properties",
            },
            {
              label: "12.5 Private Fields (#)",
              translations: {
                fr: "12.5 Champs privés (#)",
              },
              slug: "chapter-12-es6-classes/12-5-private-fields",
            },
            {
              label: "12.6 Getters and Setters in Classes",
              translations: {
                fr: "12.6 Accesseurs et mutateurs dans les classes",
              },
              slug: "chapter-12-es6-classes/12-6-getters-and-setters-in-classes",
            },
            {
              label: "12.7 Inheritance with extends and super",
              translations: {
                fr: "12.7 Héritage avec extends et super",
              },
              slug: "chapter-12-es6-classes/12-7-inheritance-with-extends-and-super",
            },
            {
              label: "12.8 Method Overriding",
              translations: {
                fr: "12.8 Surcharge de méthode",
              },
              slug: "chapter-12-es6-classes/12-8-method-overriding",
            },
            {
              label: "12.9 Abstract Classes (Simulation)",
              translations: {
                fr: "12.9 Classes abstraites (simulation)",
              },
              slug: "chapter-12-es6-classes/12-9-abstract-classes-simulation",
            },
            {
              label: "12.10 Mixins",
              translations: {
                fr: "12.10 Mixins",
              },
              slug: "chapter-12-es6-classes/12-10-mixins",
            },
            {
              label: "12.11 Classes Under the Hood (Syntactic Sugar)",
              translations: {
                fr: "12.11 Les classes sous le capot (sucre syntaxique)",
              },
              slug: "chapter-12-es6-classes/12-11-classes-under-the-hood-syntactic-sugar",
            },
          ],
        },
        {
          label: "13 - Built-in Objects",
          translations: {
            fr: "13 - Objets natifs",
          },
          items: [
            {
              label: "13.1 The Global Object",
              translations: {
                fr: "13.1 L'objet global",
              },
              slug: "chapter-13-built-in-objects/13-1-the-global-object",
            },
            {
              label: "13.2 Number Object",
              translations: {
                fr: "13.2 Objet Number",
              },
              slug: "chapter-13-built-in-objects/13-2-number-object",
            },
            {
              label: "13.3 String Object",
              translations: {
                fr: "13.3 Objet String",
              },
              slug: "chapter-13-built-in-objects/13-3-string-object",
            },
            {
              label: "13.4 Boolean Object",
              translations: {
                fr: "13.4 Objet Boolean",
              },
              slug: "chapter-13-built-in-objects/13-4-boolean-object",
            },
            {
              label: "13.5 Date Object",
              translations: {
                fr: "13.5 Objet Date",
              },
              slug: "chapter-13-built-in-objects/13-5-date-object",
            },
            {
              label: "13.6 Math Object",
              translations: {
                fr: "13.6 Objet Math",
              },
              slug: "chapter-13-built-in-objects/13-6-math-object",
            },
            {
              label: "13.7 RegExp Object",
              translations: {
                fr: "13.7 Objet RegExp",
              },
              slug: "chapter-13-built-in-objects/13-7-regexp-object",
            },
            {
              label: "13.8 Error Object and Error Types",
              translations: {
                fr: "13.8 Objet Error et types d'erreur",
              },
              slug: "chapter-13-built-in-objects/13-8-error-object-and-error-types",
            },
            {
              label: "13.9 JSON Object (parse, stringify)",
              translations: {
                fr: "13.9 Objet JSON (parse, stringify)",
              },
              slug: "chapter-13-built-in-objects/13-9-json-object-parse-stringify",
            },
          ],
        },
        {
          label: "14 - Arrays Mastery",
          translations: {
            fr: "14 - Maîtrise des tableaux",
          },
          items: [
            {
              label: "14.1 Creating Arrays",
              translations: {
                fr: "14.1 Créer des tableaux",
              },
              slug: "chapter-14-arrays-mastery/14-1-creating-arrays",
            },
            {
              label: "14.2 Array Properties (length)",
              translations: {
                fr: "14.2 Propriétés des tableaux (length)",
              },
              slug: "chapter-14-arrays-mastery/14-2-array-properties-length",
            },
            {
              label: "14.3 Array Methods Categories",
              translations: {
                fr: "14.3 Catégories de méthodes de tableau",
              },
              slug: "chapter-14-arrays-mastery/14-3-array-methods-categories",
            },
            {
              label: "14.3.1 Mutator Methods (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)",
              translations: {
                fr: "14.3.1 Méthodes mutatrices (push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin)",
              },
              slug: "chapter-14-arrays-mastery/14-3-1-mutator-methods-push-pop-shift-unshift-splice-sort-reverse-fill-copywithin",
            },
            {
              label: "14.3.2 Accessor Methods (concat, slice, join, indexOf, lastIndexOf, includes)",
              translations: {
                fr: "14.3.2 Méthodes d'accès (concat, slice, join, indexOf, lastIndexOf, includes)",
              },
              slug: "chapter-14-arrays-mastery/14-3-2-accessor-methods-concat-slice-join-indexof-lastindexof-includes",
            },
            {
              label: "14.3.3 Iteration Methods (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)",
              translations: {
                fr: "14.3.3 Méthodes d'itération (forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, findLast, findLastIndex)",
              },
              slug: "chapter-14-arrays-mastery/14-3-3-iteration-methods-foreach-map-filter-reduce-reduceright-some-every-find-findindex-findlast-findlastindex",
            },
            {
              label: "14.4 Multidimensional Arrays",
              translations: {
                fr: "14.4 Tableaux multidimensionnels",
              },
              slug: "chapter-14-arrays-mastery/14-4-multidimensional-arrays",
            },
            {
              label: "14.5 Array-Like Objects",
              translations: {
                fr: "14.5 Objets semblables à des tableaux",
              },
              slug: "chapter-14-arrays-mastery/14-5-array-like-objects",
            },
            {
              label: "14.5.1 arguments",
              translations: {
                fr: "14.5.1 arguments",
              },
              slug: "chapter-14-arrays-mastery/14-5-1-arguments",
            },
            {
              label: "14.5.2 HTML Collections",
              translations: {
                fr: "14.5.2 Collections HTML",
              },
              slug: "chapter-14-arrays-mastery/14-5-2-html-collections",
            },
            {
              label: "14.5.3 Converting to Arrays",
              translations: {
                fr: "14.5.3 Conversion en tableaux",
              },
              slug: "chapter-14-arrays-mastery/14-5-3-converting-to-arrays",
            },
            {
              label: "14.6 Sparse Arrays",
              translations: {
                fr: "14.6 Tableaux clairsemés",
              },
              slug: "chapter-14-arrays-mastery/14-6-sparse-arrays",
            },
            {
              label: "14.7 Performance Considerations",
              translations: {
                fr: "14.7 Considérations de performance",
              },
              slug: "chapter-14-arrays-mastery/14-7-performance-considerations",
            },
          ],
        },
        {
          label: "15 - Advanced Array Techniques",
          translations: {
            fr: "15 - Techniques avancées sur les tableaux",
          },
          items: [
            {
              label: "15.1 The reduce() Method Deep Dive",
              translations: {
                fr: "15.1 Plongée dans la méthode reduce()",
              },
              slug: "chapter-15-advanced-array-techniques/15-1-the-reduce-method-deep-dive",
            },
            {
              label: "15.2 Flattening Arrays (flat, flatMap)",
              translations: {
                fr: "15.2 Aplatissement de tableaux (flat, flatMap)",
              },
              slug: "chapter-15-advanced-array-techniques/15-2-flattening-arrays-flat-flatmap",
            },
            {
              label: "15.3 Sorting Custom Objects",
              translations: {
                fr: "15.3 Tri d'objets personnalisés",
              },
              slug: "chapter-15-advanced-array-techniques/15-3-sorting-custom-objects",
            },
            {
              label: "15.4 Grouping Array Elements",
              translations: {
                fr: "15.4 Regroupement d'éléments de tableau",
              },
              slug: "chapter-15-advanced-array-techniques/15-4-grouping-array-elements",
            },
            {
              label: "15.5 Array Intersection, Union, Difference",
              translations: {
                fr: "15.5 Intersection, union, différence de tableaux",
              },
              slug: "chapter-15-advanced-array-techniques/15-5-array-intersection-union-difference",
            },
            {
              label: "15.6 Chaining Array Methods",
              translations: {
                fr: "15.6 Chaînage de méthodes de tableau",
              },
              slug: "chapter-15-advanced-array-techniques/15-6-chaining-array-methods",
            },
            {
              label: "15.7 Immutable Array Operations",
              translations: {
                fr: "15.7 Opérations immuables sur les tableaux",
              },
              slug: "chapter-15-advanced-array-techniques/15-7-immutable-array-operations",
            },
            {
              label: "15.8 Implementing Custom Array Methods",
              translations: {
                fr: "15.8 Implémenter des méthodes de tableau personnalisées",
              },
              slug: "chapter-15-advanced-array-techniques/15-8-implementing-custom-array-methods",
            },
          ],
        },
        {
          label: "16 - Iterators and Generators",
          translations: {
            fr: "16 - Itérateurs et générateurs",
          },
          items: [
            {
              label: "16.1 The Iteration Protocol",
              translations: {
                fr: "16.1 Le protocole d'itération",
              },
              slug: "chapter-16-iterators-and-generators/16-1-the-iteration-protocol",
            },
            {
              label: "16.1.1 Iterable Protocol (Symbol.iterator)",
              translations: {
                fr: "16.1.1 Protocole itérable (Symbol.iterator)",
              },
              slug: "chapter-16-iterators-and-generators/16-1-1-iterable-protocol-symboliterator",
            },
            {
              label: "16.1.2 Iterator Protocol (next(), done, value)",
              translations: {
                fr: "16.1.2 Protocole itérateur (next(), done, value)",
              },
              slug: "chapter-16-iterators-and-generators/16-1-2-iterator-protocol-next-done-value",
            },
            {
              label: "16.2 Built-in Iterables",
              translations: {
                fr: "16.2 Itérables natifs",
              },
              slug: "chapter-16-iterators-and-generators/16-2-built-in-iterables",
            },
            {
              label: "16.3 Creating Custom Iterables",
              translations: {
                fr: "16.3 Créer des itérables personnalisés",
              },
              slug: "chapter-16-iterators-and-generators/16-3-creating-custom-iterables",
            },
            {
              label: "16.4 Generator Functions",
              translations: {
                fr: "16.4 Fonctions génératrices",
              },
              slug: "chapter-16-iterators-and-generators/16-4-generator-functions",
            },
            {
              label: "16.4.1 yield Keyword",
              translations: {
                fr: "16.4.1 Mot-clé yield",
              },
              slug: "chapter-16-iterators-and-generators/16-4-1-yield-keyword",
            },
            {
              label: "16.4.2 yield* Delegation",
              translations: {
                fr: "16.4.2 Délégation yield*",
              },
              slug: "chapter-16-iterators-and-generators/16-4-2-yield-delegation",
            },
            {
              label: "16.4.3 Generator Methods (next, return, throw)",
              translations: {
                fr: "16.4.3 Méthodes de générateur (next, return, throw)",
              },
              slug: "chapter-16-iterators-and-generators/16-4-3-generator-methods-next-return-throw",
            },
            {
              label: "16.4.4 Two-Way Communication with Generators",
              translations: {
                fr: "16.4.4 Communication bidirectionnelle avec les générateurs",
              },
              slug: "chapter-16-iterators-and-generators/16-4-4-two-way-communication-with-generators",
            },
            {
              label: "16.5 Practical Generator Use Cases",
              translations: {
                fr: "16.5 Cas d'usage pratiques des générateurs",
              },
              slug: "chapter-16-iterators-and-generators/16-5-practical-generator-use-cases",
            },
            {
              label: "16.5.1 Infinite Sequences",
              translations: {
                fr: "16.5.1 Séquences infinies",
              },
              slug: "chapter-16-iterators-and-generators/16-5-1-infinite-sequences",
            },
            {
              label: "16.5.2 Lazy Evaluation",
              translations: {
                fr: "16.5.2 Évaluation paresseuse",
              },
              slug: "chapter-16-iterators-and-generators/16-5-2-lazy-evaluation",
            },
            {
              label: "16.5.3 Controlling Asynchronous Flows",
              translations: {
                fr: "16.5.3 Contrôle de flux asynchrones",
              },
              slug: "chapter-16-iterators-and-generators/16-5-3-controlling-asynchronous-flows",
            },
          ],
        },
        {
          label: "17 - Modern Collections",
          translations: {
            fr: "17 - Collections modernes",
          },
          items: [
            {
              label: "17.1 Map",
              translations: {
                fr: "17.1 Map",
              },
              slug: "chapter-17-modern-collections/17-1-map",
            },
            {
              label: "17.1.1 Creating and Using Maps",
              translations: {
                fr: "17.1.1 Créer et utiliser des Maps",
              },
              slug: "chapter-17-modern-collections/17-1-1-creating-and-using-maps",
            },
            {
              label: "17.1.2 Map vs Object",
              translations: {
                fr: "17.1.2 Map vs Object",
              },
              slug: "chapter-17-modern-collections/17-1-2-map-vs-object",
            },
            {
              label: "17.1.3 Map Methods (set, get, has, delete, clear)",
              translations: {
                fr: "17.1.3 Méthodes Map (set, get, has, delete, clear)",
              },
              slug: "chapter-17-modern-collections/17-1-3-map-methods-set-get-has-delete-clear",
            },
            {
              label: "17.1.4 Iterating Maps",
              translations: {
                fr: "17.1.4 Itérer sur les Maps",
              },
              slug: "chapter-17-modern-collections/17-1-4-iterating-maps",
            },
            {
              label: "17.2 Set",
              translations: {
                fr: "17.2 Set",
              },
              slug: "chapter-17-modern-collections/17-2-set",
            },
            {
              label: "17.2.1 Creating and Using Sets",
              translations: {
                fr: "17.2.1 Créer et utiliser des Sets",
              },
              slug: "chapter-17-modern-collections/17-2-1-creating-and-using-sets",
            },
            {
              label: "17.2.2 Set vs Array",
              translations: {
                fr: "17.2.2 Set vs Array",
              },
              slug: "chapter-17-modern-collections/17-2-2-set-vs-array",
            },
            {
              label: "17.2.3 Set Methods (add, has, delete, clear)",
              translations: {
                fr: "17.2.3 Méthodes Set (add, has, delete, clear)",
              },
              slug: "chapter-17-modern-collections/17-2-3-set-methods-add-has-delete-clear",
            },
            {
              label: "17.2.4 Iterating Sets",
              translations: {
                fr: "17.2.4 Itérer sur les Sets",
              },
              slug: "chapter-17-modern-collections/17-2-4-iterating-sets",
            },
            {
              label: "17.2.5 Set Operations (union, intersection, difference)",
              translations: {
                fr: "17.2.5 Opérations sur les Sets (union, intersection, différence)",
              },
              slug: "chapter-17-modern-collections/17-2-5-set-operations-union-intersection-difference",
            },
            {
              label: "17.3 WeakMap",
              translations: {
                fr: "17.3 WeakMap",
              },
              slug: "chapter-17-modern-collections/17-3-weakmap",
            },
            {
              label: "17.3.1 Garbage Collection and WeakMaps",
              translations: {
                fr: "17.3.1 Garbage collection et WeakMaps",
              },
              slug: "chapter-17-modern-collections/17-3-1-garbage-collection-and-weakmaps",
            },
            {
              label: "17.3.2 Use Cases (private data, caching)",
              translations: {
                fr: "17.3.2 Cas d'usage (données privées, mise en cache)",
              },
              slug: "chapter-17-modern-collections/17-3-2-use-cases-private-data-caching",
            },
            {
              label: "17.4 WeakSet",
              translations: {
                fr: "17.4 WeakSet",
              },
              slug: "chapter-17-modern-collections/17-4-weakset",
            },
            {
              label: "17.5 Typed Arrays (ArrayBuffer, DataView)",
              translations: {
                fr: "17.5 Tableaux typés (ArrayBuffer, DataView)",
              },
              slug: "chapter-17-modern-collections/17-5-typed-arrays-arraybuffer-dataview",
            },
          ],
        },
        {
          label: "18 - The Event Loop",
          translations: {
            fr: "18 - La boucle d'événements",
          },
          items: [
            {
              label: "18.1 JavaScript Runtime Architecture",
              translations: {
                fr: "18.1 Architecture du runtime JavaScript",
              },
              slug: "chapter-18-the-event-loop/18-1-javascript-runtime-architecture",
            },
            {
              label: "18.1.1 Call Stack",
              translations: {
                fr: "18.1.1 Pile d'appels",
              },
              slug: "chapter-18-the-event-loop/18-1-1-call-stack",
            },
            {
              label: "18.1.2 Heap",
              translations: {
                fr: "18.1.2 Tas",
              },
              slug: "chapter-18-the-event-loop/18-1-2-heap",
            },
            {
              label: "18.1.3 Web APIs / C++ APIs",
              translations: {
                fr: "18.1.3 Web APIs / C++ APIs",
              },
              slug: "chapter-18-the-event-loop/18-1-3-web-apis-c-apis",
            },
            {
              label: "18.1.4 Callback Queue (Task Queue)",
              translations: {
                fr: "18.1.4 File d'attente des callbacks (Task Queue)",
              },
              slug: "chapter-18-the-event-loop/18-1-4-callback-queue-task-queue",
            },
            {
              label: "18.1.5 Microtask Queue",
              translations: {
                fr: "18.1.5 File d'attente des microtasks",
              },
              slug: "chapter-18-the-event-loop/18-1-5-microtask-queue",
            },
            {
              label: "18.1.6 Render Queue",
              translations: {
                fr: "18.1.6 File d'attente de rendu",
              },
              slug: "chapter-18-the-event-loop/18-1-6-render-queue",
            },
            {
              label: "18.2 How the Event Loop Works",
              translations: {
                fr: "18.2 Comment fonctionne la boucle d'événements",
              },
              slug: "chapter-18-the-event-loop/18-2-how-the-event-loop-works",
            },
            {
              label: "18.3 Macrotasks vs Microtasks",
              translations: {
                fr: "18.3 Macrotâches vs microtâches",
              },
              slug: "chapter-18-the-event-loop/18-3-macrotasks-vs-microtasks",
            },
            {
              label: "18.4 Event Loop Phases (Node.js)",
              translations: {
                fr: "18.4 Phases de la boucle d'événements (Node.js)",
              },
              slug: "chapter-18-the-event-loop/18-4-event-loop-phases-nodejs",
            },
            {
              label: "18.5 Blocking the Event Loop",
              translations: {
                fr: "18.5 Bloquer la boucle d'événements",
              },
              slug: "chapter-18-the-event-loop/18-5-blocking-the-event-loop",
            },
            {
              label: "18.6 Visualizing the Event Loop",
              translations: {
                fr: "18.6 Visualiser la boucle d'événements",
              },
              slug: "chapter-18-the-event-loop/18-6-visualizing-the-event-loop",
            },
          ],
        },
        {
          label: "19 - Callbacks",
          translations: {
            fr: "19 - Callbacks",
          },
          items: [
            {
              label: "19.1 Synchronous vs Asynchronous Callbacks",
              translations: {
                fr: "19.1 Callbacks synchrones vs asynchrones",
              },
              slug: "chapter-19-callbacks/19-1-synchronous-vs-asynchronous-callbacks",
            },
            {
              label: "19.2 The Callback Pattern",
              translations: {
                fr: "19.2 Le modèle callback",
              },
              slug: "chapter-19-callbacks/19-2-the-callback-pattern",
            },
            {
              label: "19.3 Error-First Callbacks (Node.js style)",
              translations: {
                fr: "19.3 Callbacks avec erreur en premier (style Node.js)",
              },
              slug: "chapter-19-callbacks/19-3-error-first-callbacks-nodejs-style",
            },
            {
              label: "19.4 Callback Hell (Pyramid of Doom)",
              translations: {
                fr: "19.4 L'enfer des callbacks (Pyramide du doom)",
              },
              slug: "chapter-19-callbacks/19-4-callback-hell-pyramid-of-doom",
            },
            {
              label: "19.5 Inversion of Control",
              translations: {
                fr: "19.5 Inversion de contrôle",
              },
              slug: "chapter-19-callbacks/19-5-inversion-of-control",
            },
            {
              label: "19.6 Limitations of Callbacks",
              translations: {
                fr: "19.6 Limitations des callbacks",
              },
              slug: "chapter-19-callbacks/19-6-limitations-of-callbacks",
            },
          ],
        },
        {
          label: "20 - Promises",
          translations: {
            fr: "20 - Promises",
          },
          items: [
            {
              label: "20.1 What is a Promise?",
              translations: {
                fr: "20.1 Qu'est-ce qu'une Promise ?",
              },
              slug: "chapter-20-promises/20-1-what-is-a-promise",
            },
            {
              label: "20.2 Promise States (pending, fulfilled, rejected)",
              translations: {
                fr: "20.2 États d'une Promise (pending, fulfilled, rejected)",
              },
              slug: "chapter-20-promises/20-2-promise-states-pending-fulfilled-rejected",
            },
            {
              label: "20.3 Creating Promises (Promise constructor)",
              translations: {
                fr: "20.3 Créer des Promises (constructeur Promise)",
              },
              slug: "chapter-20-promises/20-3-creating-promises-promise-constructor",
            },
            {
              label: "20.4 Promise Methods",
              translations: {
                fr: "20.4 Méthodes des Promises",
              },
              slug: "chapter-20-promises/20-4-promise-methods",
            },
            {
              label: "20.4.1 then()",
              translations: {
                fr: "20.4.1 then()",
              },
              slug: "chapter-20-promises/20-4-1-then",
            },
            {
              label: "20.4.2 catch()",
              translations: {
                fr: "20.4.2 catch()",
              },
              slug: "chapter-20-promises/20-4-2-catch",
            },
            {
              label: "20.4.3 finally()",
              translations: {
                fr: "20.4.3 finally()",
              },
              slug: "chapter-20-promises/20-4-3-finally",
            },
            {
              label: "20.5 Promise Chaining",
              translations: {
                fr: "20.5 Chaînage de Promises",
              },
              slug: "chapter-20-promises/20-5-promise-chaining",
            },
            {
              label: "20.6 Error Propagation in Chains",
              translations: {
                fr: "20.6 Propagation d'erreur dans les chaînes",
              },
              slug: "chapter-20-promises/20-6-error-propagation-in-chains",
            },
            {
              label: "20.7 Promise Static Methods",
              translations: {
                fr: "20.7 Méthodes statiques des Promises",
              },
              slug: "chapter-20-promises/20-7-promise-static-methods",
            },
            {
              label: "20.7.1 Promise.all()",
              translations: {
                fr: "20.7.1 Promise.all()",
              },
              slug: "chapter-20-promises/20-7-1-promiseall",
            },
            {
              label: "20.7.2 Promise.allSettled()",
              translations: {
                fr: "20.7.2 Promise.allSettled()",
              },
              slug: "chapter-20-promises/20-7-2-promiseallsettled",
            },
            {
              label: "20.7.3 Promise.race()",
              translations: {
                fr: "20.7.3 Promise.race()",
              },
              slug: "chapter-20-promises/20-7-3-promiserace",
            },
            {
              label: "20.7.4 Promise.any()",
              translations: {
                fr: "20.7.4 Promise.any()",
              },
              slug: "chapter-20-promises/20-7-4-promiseany",
            },
            {
              label: "20.7.5 Promise.resolve()",
              translations: {
                fr: "20.7.5 Promise.resolve()",
              },
              slug: "chapter-20-promises/20-7-5-promiseresolve",
            },
            {
              label: "20.7.6 Promise.reject()",
              translations: {
                fr: "20.7.6 Promise.reject()",
              },
              slug: "chapter-20-promises/20-7-6-promisereject",
            },
            {
              label: "20.8 Promise Composition Patterns",
              translations: {
                fr: "20.8 Modèles de composition de Promises",
              },
              slug: "chapter-20-promises/20-8-promise-composition-patterns",
            },
            {
              label: "20.9 Promisifying Callback-Based Functions",
              translations: {
                fr: "20.9 Promisifier des fonctions basées sur des callbacks",
              },
              slug: "chapter-20-promises/20-9-promisifying-callback-based-functions",
            },
            {
              label: "20.10 Implementing Promise from Scratch",
              translations: {
                fr: "20.10 Implémenter une Promise from scratch",
              },
              slug: "chapter-20-promises/20-10-implementing-promise-from-scratch",
            },
          ],
        },
        {
          label: "21 - Async/Await",
          translations: {
            fr: "21 - Async/Await",
          },
          items: [
            {
              label: "21.1 async Functions",
              translations: {
                fr: "21.1 Fonctions async",
              },
              slug: "chapter-21-asyncawait/21-1-async-functions",
            },
            {
              label: "21.2 await Expression",
              translations: {
                fr: "21.2 Expression await",
              },
              slug: "chapter-21-asyncawait/21-2-await-expression",
            },
            {
              label: "21.3 Error Handling with try/catch",
              translations: {
                fr: "21.3 Gestion d'erreurs avec try/catch",
              },
              slug: "chapter-21-asyncawait/21-3-error-handling-with-trycatch",
            },
            {
              label: "21.4 Parallel Execution (Promise.all with await)",
              translations: {
                fr: "21.4 Exécution parallèle (Promise.all avec await)",
              },
              slug: "chapter-21-asyncawait/21-4-parallel-execution-promiseall-with-await",
            },
            {
              label: "21.5 Sequential vs Concurrent Execution",
              translations: {
                fr: "21.5 Exécution séquentielle vs concurrente",
              },
              slug: "chapter-21-asyncawait/21-5-sequential-vs-concurrent-execution",
            },
            {
              label: "21.6 Async/Await in Loops",
              translations: {
                fr: "21.6 Async/Await dans les boucles",
              },
              slug: "chapter-21-asyncawait/21-6-asyncawait-in-loops",
            },
            {
              label: "21.7 Top-Level Await",
              translations: {
                fr: "21.7 Await au niveau racine",
              },
              slug: "chapter-21-asyncawait/21-7-top-level-await",
            },
            {
              label: "21.8 Async/Await with Generators",
              translations: {
                fr: "21.8 Async/Await avec les générateurs",
              },
              slug: "chapter-21-asyncawait/21-8-asyncawait-with-generators",
            },
            {
              label: "21.9 Converting Promise Chains to Async/Await",
              translations: {
                fr: "21.9 Convertir des chaînes de Promises en Async/Await",
              },
              slug: "chapter-21-asyncawait/21-9-converting-promise-chains-to-asyncawait",
            },
          ],
        },
        {
          label: "22 - Advanced Async Patterns",
          translations: {
            fr: "22 - Modèles asynchrones avancés",
          },
          items: [
            {
              label: "22.1 Async Iterators and Generators",
              translations: {
                fr: "22.1 Itérateurs et générateurs asynchrones",
              },
              slug: "chapter-22-advanced-async-patterns/22-1-async-iterators-and-generators",
            },
            {
              label: "22.2 for await...of Loop",
              translations: {
                fr: "22.2 Boucle for await...of",
              },
              slug: "chapter-22-advanced-async-patterns/22-2-for-awaitof-loop",
            },
            {
              label: "22.3 Async Generators",
              translations: {
                fr: "22.3 Générateurs asynchrones",
              },
              slug: "chapter-22-advanced-async-patterns/22-3-async-generators",
            },
            {
              label: "22.4 Cancellation Patterns (AbortController)",
              translations: {
                fr: "22.4 Modèles d'annulation (AbortController)",
              },
              slug: "chapter-22-advanced-async-patterns/22-4-cancellation-patterns-abortcontroller",
            },
            {
              label: "22.5 Timeouts and Race Conditions",
              translations: {
                fr: "22.5 Délais et conditions de concurrence",
              },
              slug: "chapter-22-advanced-async-patterns/22-5-timeouts-and-race-conditions",
            },
            {
              label: "22.6 Retry Patterns",
              translations: {
                fr: "22.6 Modèles de réessai",
              },
              slug: "chapter-22-advanced-async-patterns/22-6-retry-patterns",
            },
            {
              label: "22.7 Rate Limiting and Throttling Async Operations",
              translations: {
                fr: "22.7 Limitation de débit et throttling d'opérations asynchrones",
              },
              slug: "chapter-22-advanced-async-patterns/22-7-rate-limiting-and-throttling-async-operations",
            },
            {
              label: "22.8 Batching and Caching Async Operations",
              translations: {
                fr: "22.8 Regroupement et mise en cache d'opérations asynchrones",
              },
              slug: "chapter-22-advanced-async-patterns/22-8-batching-and-caching-async-operations",
            },
            {
              label: "22.9 Observable Pattern (Introduction)",
              translations: {
                fr: "22.9 Modèle Observable (introduction)",
              },
              slug: "chapter-22-advanced-async-patterns/22-9-observable-pattern-introduction",
            },
            {
              label: "22.10 Async Queue Implementation",
              translations: {
                fr: "22.10 Implémentation d'une file d'attente asynchrone",
              },
              slug: "chapter-22-advanced-async-patterns/22-10-async-queue-implementation",
            },
          ],
        },
        {
          label: "23 - Web Workers (Browser)",
          translations: {
            fr: "23 - Web Workers (navigateur)",
          },
          items: [
            {
              label: "23.1 Why Web Workers?",
              translations: {
                fr: "23.1 Pourquoi les Web Workers ?",
              },
              slug: "chapter-23-web-workers-browser/23-1-why-web-workers",
            },
            {
              label: "23.2 Dedicated Workers",
              translations: {
                fr: "23.2 Workers dédiés",
              },
              slug: "chapter-23-web-workers-browser/23-2-dedicated-workers",
            },
            {
              label: "23.2.1 Creating a Worker",
              translations: {
                fr: "23.2.1 Créer un Worker",
              },
              slug: "chapter-23-web-workers-browser/23-2-1-creating-a-worker",
            },
            {
              label: "23.2.2 Communication (postMessage, onmessage)",
              translations: {
                fr: "23.2.2 Communication (postMessage, onmessage)",
              },
              slug: "chapter-23-web-workers-browser/23-2-2-communication-postmessage-onmessage",
            },
            {
              label: "23.2.3 Error Handling",
              translations: {
                fr: "23.2.3 Gestion d'erreurs",
              },
              slug: "chapter-23-web-workers-browser/23-2-3-error-handling",
            },
            {
              label: "23.2.4 Terminating Workers",
              translations: {
                fr: "23.2.4 Terminer des Workers",
              },
              slug: "chapter-23-web-workers-browser/23-2-4-terminating-workers",
            },
            {
              label: "23.3 Shared Workers",
              translations: {
                fr: "23.3 Workers partagés",
              },
              slug: "chapter-23-web-workers-browser/23-3-shared-workers",
            },
            {
              label: "23.4 Service Workers (Overview)",
              translations: {
                fr: "23.4 Service Workers (aperçu)",
              },
              slug: "chapter-23-web-workers-browser/23-4-service-workers-overview",
            },
            {
              label: "23.5 Transferable Objects",
              translations: {
                fr: "23.5 Objets transférables",
              },
              slug: "chapter-23-web-workers-browser/23-5-transferable-objects",
            },
            {
              label: "23.6 Worker Limitations",
              translations: {
                fr: "23.6 Limitations des Workers",
              },
              slug: "chapter-23-web-workers-browser/23-6-worker-limitations",
            },
            {
              label: "23.7 Performance Considerations",
              translations: {
                fr: "23.7 Considérations de performance",
              },
              slug: "chapter-23-web-workers-browser/23-7-performance-considerations",
            },
          ],
        },
        {
          label: "24 - Metaprogramming with Proxies and Reflect",
          translations: {
            fr: "24 - Métaprogrammation avec Proxies et Reflect",
          },
          items: [
            {
              label: "24.1 What is Metaprogramming?",
              translations: {
                fr: "24.1 Qu'est-ce que la métaprogrammation ?",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-1-what-is-metaprogramming",
            },
            {
              label: "24.2 Proxy Fundamentals",
              translations: {
                fr: "24.2 Fondamentaux des Proxies",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-2-proxy-fundamentals",
            },
            {
              label: "24.2.1 Creating Proxies (target, handler)",
              translations: {
                fr: "24.2.1 Créer des Proxies (cible, gestionnaire)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-2-1-creating-proxies-target-handler",
            },
            {
              label: "24.2.2 Revocable Proxies",
              translations: {
                fr: "24.2.2 Proxies révocables",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-2-2-revocable-proxies",
            },
            {
              label: "24.3 Proxy Traps",
              translations: {
                fr: "24.3 Intercepteurs (traps) de Proxy",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-proxy-traps",
            },
            {
              label: "24.3.1 get and set",
              translations: {
                fr: "24.3.1 get et set",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-1-get-and-set",
            },
            {
              label: "24.3.2 has (in operator)",
              translations: {
                fr: "24.3.2 has (opérateur in)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-2-has-in-operator",
            },
            {
              label: "24.3.3 deleteProperty",
              translations: {
                fr: "24.3.3 deleteProperty",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-3-deleteproperty",
            },
            {
              label: "24.3.4 apply (function calls)",
              translations: {
                fr: "24.3.4 apply (appels de fonction)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-4-apply-function-calls",
            },
            {
              label: "24.3.5 construct (new operator)",
              translations: {
                fr: "24.3.5 construct (opérateur new)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-5-construct-new-operator",
            },
            {
              label: "24.3.6 getPrototypeOf and setPrototypeOf",
              translations: {
                fr: "24.3.6 getPrototypeOf et setPrototypeOf",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-6-getprototypeof-and-setprototypeof",
            },
            {
              label: "24.3.7 defineProperty",
              translations: {
                fr: "24.3.7 defineProperty",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-7-defineproperty",
            },
            {
              label: "24.3.8 getOwnPropertyDescriptor",
              translations: {
                fr: "24.3.8 getOwnPropertyDescriptor",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-8-getownpropertydescriptor",
            },
            {
              label: "24.3.9 ownKeys",
              translations: {
                fr: "24.3.9 ownKeys",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-9-ownkeys",
            },
            {
              label: "24.3.10 isExtensible and preventExtensions",
              translations: {
                fr: "24.3.10 isExtensible et preventExtensions",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-3-10-isextensible-and-preventextensions",
            },
            {
              label: "24.4 Practical Proxy Use Cases",
              translations: {
                fr: "24.4 Cas d'usage pratiques des Proxies",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-practical-proxy-use-cases",
            },
            {
              label: "24.4.1 Validation",
              translations: {
                fr: "24.4.1 Validation",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-1-validation",
            },
            {
              label: "24.4.2 Logging and Profiling",
              translations: {
                fr: "24.4.2 Journalisation et profilage",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-2-logging-and-profiling",
            },
            {
              label: "24.4.3 Observability (Change Detection)",
              translations: {
                fr: "24.4.3 Observabilité (détection de changement)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-3-observability-change-detection",
            },
            {
              label: "24.4.4 Caching",
              translations: {
                fr: "24.4.4 Mise en cache",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-4-caching",
            },
            {
              label: "24.4.5 Default Values",
              translations: {
                fr: "24.4.5 Valeurs par défaut",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-5-default-values",
            },
            {
              label: "24.4.6 Virtual Properties",
              translations: {
                fr: "24.4.6 Propriétés virtuelles",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-6-virtual-properties",
            },
            {
              label: "24.4.7 Revocable References",
              translations: {
                fr: "24.4.7 Références révocables",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-4-7-revocable-references",
            },
            {
              label: "24.5 The Reflect API",
              translations: {
                fr: "24.5 L'API Reflect",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-5-the-reflect-api",
            },
            {
              label: "24.5.1 Reflect Methods (matching traps)",
              translations: {
                fr: "24.5.1 Méthodes Reflect (correspondant aux intercepteurs)",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-5-1-reflect-methods-matching-traps",
            },
            {
              label: "24.5.2 Using Reflect in Proxies",
              translations: {
                fr: "24.5.2 Utiliser Reflect dans les Proxies",
              },
              slug: "chapter-24-metaprogramming-with-proxies-and-reflect/24-5-2-using-reflect-in-proxies",
            },
          ],
        },
        {
          label: "25 - Symbols",
          translations: {
            fr: "25 - Symbols",
          },
          items: [
            {
              label: "25.1 Creating Symbols",
              translations: {
                fr: "25.1 Créer des Symbols",
              },
              slug: "chapter-25-symbols/25-1-creating-symbols",
            },
            {
              label: "25.2 Symbol Characteristics (unique, not enumerable)",
              translations: {
                fr: "25.2 Caractéristiques des Symbols (unicité, non énumérables)",
              },
              slug: "chapter-25-symbols/25-2-symbol-characteristics-unique-not-enumerable",
            },
            {
              label: "25.3 Global Symbol Registry (Symbol.for, Symbol.keyFor)",
              translations: {
                fr: "25.3 Registre global des Symbols (Symbol.for, Symbol.keyFor)",
              },
              slug: "chapter-25-symbols/25-3-global-symbol-registry-symbolfor-symbolkeyfor",
            },
            {
              label: "25.4 Well-Known Symbols",
              translations: {
                fr: "25.4 Symbols bien connus",
              },
              slug: "chapter-25-symbols/25-4-well-known-symbols",
            },
            {
              label: "25.4.1 Symbol.iterator",
              translations: {
                fr: "25.4.1 Symbol.iterator",
              },
              slug: "chapter-25-symbols/25-4-1-symboliterator",
            },
            {
              label: "25.4.2 Symbol.asyncIterator",
              translations: {
                fr: "25.4.2 Symbol.asyncIterator",
              },
              slug: "chapter-25-symbols/25-4-2-symbolasynciterator",
            },
            {
              label: "25.4.3 Symbol.hasInstance",
              translations: {
                fr: "25.4.3 Symbol.hasInstance",
              },
              slug: "chapter-25-symbols/25-4-3-symbolhasinstance",
            },
            {
              label: "25.4.4 Symbol.isConcatSpreadable",
              translations: {
                fr: "25.4.4 Symbol.isConcatSpreadable",
              },
              slug: "chapter-25-symbols/25-4-4-symbolisconcatspreadable",
            },
            {
              label: "25.4.5 Symbol.match, Symbol.replace, Symbol.search, Symbol.split",
              translations: {
                fr: "25.4.5 Symbol.match, Symbol.replace, Symbol.search, Symbol.split",
              },
              slug: "chapter-25-symbols/25-4-5-symbolmatch-symbolreplace-symbolsearch-symbolsplit",
            },
            {
              label: "25.4.6 Symbol.species",
              translations: {
                fr: "25.4.6 Symbol.species",
              },
              slug: "chapter-25-symbols/25-4-6-symbolspecies",
            },
            {
              label: "25.4.7 Symbol.toPrimitive",
              translations: {
                fr: "25.4.7 Symbol.toPrimitive",
              },
              slug: "chapter-25-symbols/25-4-7-symboltoprimitive",
            },
            {
              label: "25.4.8 Symbol.toStringTag",
              translations: {
                fr: "25.4.8 Symbol.toStringTag",
              },
              slug: "chapter-25-symbols/25-4-8-symboltostringtag",
            },
            {
              label: "25.4.9 Symbol.unscopables",
              translations: {
                fr: "25.4.9 Symbol.unscopables",
              },
              slug: "chapter-25-symbols/25-4-9-symbolunscopables",
            },
            {
              label: "25.5 Use Cases for Symbols",
              translations: {
                fr: "25.5 Cas d'usage des Symbols",
              },
              slug: "chapter-25-symbols/25-5-use-cases-for-symbols",
            },
            {
              label: "25.5.1 Private Properties (convention)",
              translations: {
                fr: "25.5.1 Propriétés privées (convention)",
              },
              slug: "chapter-25-symbols/25-5-1-private-properties-convention",
            },
            {
              label: "25.5.2 Avoiding Property Name Collisions",
              translations: {
                fr: "25.5.2 Éviter les collisions de noms de propriétés",
              },
              slug: "chapter-25-symbols/25-5-2-avoiding-property-name-collisions",
            },
            {
              label: "25.5.3 Defining Custom Behavior",
              translations: {
                fr: "25.5.3 Définir un comportement personnalisé",
              },
              slug: "chapter-25-symbols/25-5-3-defining-custom-behavior",
            },
          ],
        },
        {
          label: "26 - Memory Management",
          translations: {
            fr: "26 - Gestion de la mémoire",
          },
          items: [
            {
              label: "26.1 Memory Life Cycle",
              translations: {
                fr: "26.1 Cycle de vie de la mémoire",
              },
              slug: "chapter-26-memory-management/26-1-memory-life-cycle",
            },
            {
              label: "26.2 Garbage Collection",
              translations: {
                fr: "26.2 Garbage collection",
              },
              slug: "chapter-26-memory-management/26-2-garbage-collection",
            },
            {
              label: "26.2.1 Reference Counting",
              translations: {
                fr: "26.2.1 Comptage de références",
              },
              slug: "chapter-26-memory-management/26-2-1-reference-counting",
            },
            {
              label: "26.2.2 Mark-and-Sweep",
              translations: {
                fr: "26.2.2 Balayage marque-et-balaye",
              },
              slug: "chapter-26-memory-management/26-2-2-mark-and-sweep",
            },
            {
              label: "26.2.3 Generational Collection",
              translations: {
                fr: "26.2.3 Collection générationnelle",
              },
              slug: "chapter-26-memory-management/26-2-3-generational-collection",
            },
            {
              label: "26.2.4 Incremental Collection",
              translations: {
                fr: "26.2.4 Collection incrémentale",
              },
              slug: "chapter-26-memory-management/26-2-4-incremental-collection",
            },
            {
              label: "26.3 Memory Leaks",
              translations: {
                fr: "26.3 Fuites de mémoire",
              },
              slug: "chapter-26-memory-management/26-3-memory-leaks",
            },
            {
              label: "26.3.1 Accidental Global Variables",
              translations: {
                fr: "26.3.1 Variables globales accidentelles",
              },
              slug: "chapter-26-memory-management/26-3-1-accidental-global-variables",
            },
            {
              label: "26.3.2 Forgotten Timers and Callbacks",
              translations: {
                fr: "26.3.2 Minuteurs et callbacks oubliés",
              },
              slug: "chapter-26-memory-management/26-3-2-forgotten-timers-and-callbacks",
            },
            {
              label: "26.3.3 Closures Causing Leaks",
              translations: {
                fr: "26.3.3 Closures provoquant des fuites",
              },
              slug: "chapter-26-memory-management/26-3-3-closures-causing-leaks",
            },
            {
              label: "26.3.4 Detached DOM Elements",
              translations: {
                fr: "26.3.4 Éléments DOM détachés",
              },
              slug: "chapter-26-memory-management/26-3-4-detached-dom-elements",
            },
            {
              label: "26.3.5 Event Listeners",
              translations: {
                fr: "26.3.5 Écouteurs d'événements",
              },
              slug: "chapter-26-memory-management/26-3-5-event-listeners",
            },
            {
              label: "26.3.6 Circular References",
              translations: {
                fr: "26.3.6 Références circulaires",
              },
              slug: "chapter-26-memory-management/26-3-6-circular-references",
            },
            {
              label: "26.4 Detecting Memory Leaks",
              translations: {
                fr: "26.4 Détecter les fuites de mémoire",
              },
              slug: "chapter-26-memory-management/26-4-detecting-memory-leaks",
            },
            {
              label: "26.4.1 Chrome DevTools Memory Tab",
              translations: {
                fr: "26.4.1 Onglet Mémoire des Chrome DevTools",
              },
              slug: "chapter-26-memory-management/26-4-1-chrome-devtools-memory-tab",
            },
            {
              label: "26.4.2 Heap Snapshots",
              translations: {
                fr: "26.4.2 Instantanés du tas",
              },
              slug: "chapter-26-memory-management/26-4-2-heap-snapshots",
            },
            {
              label: "26.4.3 Allocation Timeline",
              translations: {
                fr: "26.4.3 Chronologie des allocations",
              },
              slug: "chapter-26-memory-management/26-4-3-allocation-timeline",
            },
            {
              label: "26.4.4 Performance Monitor",
              translations: {
                fr: "26.4.4 Moniteur de performance",
              },
              slug: "chapter-26-memory-management/26-4-4-performance-monitor",
            },
            {
              label: "26.5 Weak References (WeakMap, WeakSet, WeakRef)",
              translations: {
                fr: "26.5 Références faibles (WeakMap, WeakSet, WeakRef)",
              },
              slug: "chapter-26-memory-management/26-5-weak-references-weakmap-weakset-weakref",
            },
            {
              label: "26.6 FinalizationRegistry",
              translations: {
                fr: "26.6 FinalizationRegistry",
              },
              slug: "chapter-26-memory-management/26-6-finalizationregistry",
            },
          ],
        },
        {
          label: "27 - Modules",
          translations: {
            fr: "27 - Modules",
          },
          items: [
            {
              label: "27.1 The Need for Modules",
              translations: {
                fr: "27.1 Le besoin de modules",
              },
              slug: "chapter-27-modules/27-1-the-need-for-modules",
            },
            {
              label: "27.2 Module Formats History",
              translations: {
                fr: "27.2 Histoire des formats de modules",
              },
              slug: "chapter-27-modules/27-2-module-formats-history",
            },
            {
              label: "27.2.1 IIFE Modules",
              translations: {
                fr: "27.2.1 Modules IIFE",
              },
              slug: "chapter-27-modules/27-2-1-iife-modules",
            },
            {
              label: "27.2.2 CommonJS (require, module.exports)",
              translations: {
                fr: "27.2.2 CommonJS (require, module.exports)",
              },
              slug: "chapter-27-modules/27-2-2-commonjs-require-moduleexports",
            },
            {
              label: "27.2.3 AMD (Asynchronous Module Definition)",
              translations: {
                fr: "27.2.3 AMD (Asynchronous Module Definition)",
              },
              slug: "chapter-27-modules/27-2-3-amd-asynchronous-module-definition",
            },
            {
              label: "27.2.4 UMD (Universal Module Definition)",
              translations: {
                fr: "27.2.4 UMD (Universal Module Definition)",
              },
              slug: "chapter-27-modules/27-2-4-umd-universal-module-definition",
            },
            {
              label: "27.3 ES6 Modules",
              translations: {
                fr: "27.3 Modules ES6",
              },
              slug: "chapter-27-modules/27-3-es6-modules",
            },
            {
              label: "27.3.1 Named Exports/Imports",
              translations: {
                fr: "27.3.1 Exportations/Importations nommées",
              },
              slug: "chapter-27-modules/27-3-1-named-exportsimports",
            },
            {
              label: "27.3.2 Default Exports/Imports",
              translations: {
                fr: "27.3.2 Exportations/Importations par défaut",
              },
              slug: "chapter-27-modules/27-3-2-default-exportsimports",
            },
            {
              label: "27.3.3 Mixed Exports",
              translations: {
                fr: "27.3.3 Exportations mixtes",
              },
              slug: "chapter-27-modules/27-3-3-mixed-exports",
            },
            {
              label: "27.3.4 Renaming Imports/Exports (as)",
              translations: {
                fr: "27.3.4 Renommer les importations/exportations (as)",
              },
              slug: "chapter-27-modules/27-3-4-renaming-importsexports-as",
            },
            {
              label: "27.3.5 Namespace Imports (* as)",
              translations: {
                fr: "27.3.5 Importations d'espace de noms (* as)",
              },
              slug: "chapter-27-modules/27-3-5-namespace-imports-as",
            },
            {
              label: "27.3.6 Re-exporting (export from)",
              translations: {
                fr: "27.3.6 Réexportation (export from)",
              },
              slug: "chapter-27-modules/27-3-6-re-exporting-export-from",
            },
            {
              label: "27.4 Dynamic Imports (import())",
              translations: {
                fr: "27.4 Importations dynamiques (import())",
              },
              slug: "chapter-27-modules/27-4-dynamic-imports-import",
            },
            {
              label: "27.5 Module Resolution",
              translations: {
                fr: "27.5 Résolution de modules",
              },
              slug: "chapter-27-modules/27-5-module-resolution",
            },
            {
              label: "27.6 Circular Dependencies",
              translations: {
                fr: "27.6 Dépendances circulaires",
              },
              slug: "chapter-27-modules/27-6-circular-dependencies",
            },
            {
              label: "27.7 Tree Shaking",
              translations: {
                fr: "27.7 Tree shaking",
              },
              slug: "chapter-27-modules/27-7-tree-shaking",
            },
            {
              label: "27.8 Modules in Browsers vs Node.js",
              translations: {
                fr: "27.8 Modules dans les navigateurs vs Node.js",
              },
              slug: "chapter-27-modules/27-8-modules-in-browsers-vs-nodejs",
            },
            {
              label: "27.9 Module Bundlers (Conceptual Understanding)",
              translations: {
                fr: "27.9 Bundlers de modules (compréhension conceptuelle)",
              },
              slug: "chapter-27-modules/27-9-module-bundlers-conceptual-understanding",
            },
          ],
        },
        {
          label: "28 - Regular Expressions",
          translations: {
            fr: "28 - Expressions régulières",
          },
          items: [
            {
              label: "28.1 Creating Regular Expressions",
              translations: {
                fr: "28.1 Créer des expressions régulières",
              },
              slug: "chapter-28-regular-expressions/28-1-creating-regular-expressions",
            },
            {
              label: "28.2 RegExp Methods (test, exec)",
              translations: {
                fr: "28.2 Méthodes RegExp (test, exec)",
              },
              slug: "chapter-28-regular-expressions/28-2-regexp-methods-test-exec",
            },
            {
              label: "28.3 String Methods with RegExp (match, matchAll, search, replace, split)",
              translations: {
                fr: "28.3 Méthodes de String avec RegExp (match, matchAll, search, replace, split)",
              },
              slug: "chapter-28-regular-expressions/28-3-string-methods-with-regexp-match-matchall-search-replace-split",
            },
            {
              label: "28.4 Pattern Syntax",
              translations: {
                fr: "28.4 Syntaxe des motifs",
              },
              slug: "chapter-28-regular-expressions/28-4-pattern-syntax",
            },
            {
              label: "28.4.1 Character Classes",
              translations: {
                fr: "28.4.1 Classes de caractères",
              },
              slug: "chapter-28-regular-expressions/28-4-1-character-classes",
            },
            {
              label: "28.4.2 Quantifiers",
              translations: {
                fr: "28.4.2 Quantificateurs",
              },
              slug: "chapter-28-regular-expressions/28-4-2-quantifiers",
            },
            {
              label: "28.4.3 Groups and Ranges",
              translations: {
                fr: "28.4.3 Groupes et intervalles",
              },
              slug: "chapter-28-regular-expressions/28-4-3-groups-and-ranges",
            },
            {
              label: "28.4.4 Assertions (Lookahead, Lookbehind)",
              translations: {
                fr: "28.4.4 Assertions (anticipation, rétrospective)",
              },
              slug: "chapter-28-regular-expressions/28-4-4-assertions-lookahead-lookbehind",
            },
            {
              label: "28.4.5 Flags (g, i, m, s, u, y)",
              translations: {
                fr: "28.4.5 Drapeaux (g, i, m, s, u, y)",
              },
              slug: "chapter-28-regular-expressions/28-4-5-flags-g-i-m-s-u-y",
            },
            {
              label: "28.5 Advanced RegExp Features",
              translations: {
                fr: "28.5 Fonctionnalités avancées des RegExp",
              },
              slug: "chapter-28-regular-expressions/28-5-advanced-regexp-features",
            },
            {
              label: "28.5.1 Named Capture Groups",
              translations: {
                fr: "28.5.1 Groupes de capture nommés",
              },
              slug: "chapter-28-regular-expressions/28-5-1-named-capture-groups",
            },
            {
              label: "28.5.2 Backreferences",
              translations: {
                fr: "28.5.2 Rétroréférences",
              },
              slug: "chapter-28-regular-expressions/28-5-2-backreferences",
            },
            {
              label: "28.5.3 Unicode Property Escapes",
              translations: {
                fr: "28.5.3 Échappements de propriétés Unicode",
              },
              slug: "chapter-28-regular-expressions/28-5-3-unicode-property-escapes",
            },
            {
              label: "28.6 Performance Considerations",
              translations: {
                fr: "28.6 Considérations de performance",
              },
              slug: "chapter-28-regular-expressions/28-6-performance-considerations",
            },
            {
              label: "28.7 Common RegExp Patterns",
              translations: {
                fr: "28.7 Motifs RegExp courants",
              },
              slug: "chapter-28-regular-expressions/28-7-common-regexp-patterns",
            },
            {
              label: "28.8 Debugging Regular Expressions",
              translations: {
                fr: "28.8 Déboguer les expressions régulières",
              },
              slug: "chapter-28-regular-expressions/28-8-debugging-regular-expressions",
            },
          ],
        },
        {
          label: "29 - Debugging JavaScript",
          translations: {
            fr: "29 - Déboguer JavaScript",
          },
          items: [
            {
              label: "29.1 Console API Mastery",
              translations: {
                fr: "29.1 Maîtrise de la Console API",
              },
              slug: "chapter-29-debugging-javascript/29-1-console-api-mastery",
            },
            {
              label: "29.1.1 console.log, info, warn, error",
              translations: {
                fr: "29.1.1 console.log, info, warn, error",
              },
              slug: "chapter-29-debugging-javascript/29-1-1-consolelog-info-warn-error",
            },
            {
              label: "29.1.2 console.table",
              translations: {
                fr: "29.1.2 console.table",
              },
              slug: "chapter-29-debugging-javascript/29-1-2-consoletable",
            },
            {
              label: "29.1.3 console.group, groupCollapsed, groupEnd",
              translations: {
                fr: "29.1.3 console.group, groupCollapsed, groupEnd",
              },
              slug: "chapter-29-debugging-javascript/29-1-3-consolegroup-groupcollapsed-groupend",
            },
            {
              label: "29.1.4 console.time, timeLog, timeEnd",
              translations: {
                fr: "29.1.4 console.time, timeLog, timeEnd",
              },
              slug: "chapter-29-debugging-javascript/29-1-4-consoletime-timelog-timeend",
            },
            {
              label: "29.1.5 console.count, countReset",
              translations: {
                fr: "29.1.5 console.count, countReset",
              },
              slug: "chapter-29-debugging-javascript/29-1-5-consolecount-countreset",
            },
            {
              label: "29.1.6 console.trace",
              translations: {
                fr: "29.1.6 console.trace",
              },
              slug: "chapter-29-debugging-javascript/29-1-6-consoletrace",
            },
            {
              label: "29.1.7 console.dir, dirxml",
              translations: {
                fr: "29.1.7 console.dir, dirxml",
              },
              slug: "chapter-29-debugging-javascript/29-1-7-consoledir-dirxml",
            },
            {
              label: "29.1.8 console.assert",
              translations: {
                fr: "29.1.8 console.assert",
              },
              slug: "chapter-29-debugging-javascript/29-1-8-consoleassert",
            },
            {
              label: "29.1.9 console.clear",
              translations: {
                fr: "29.1.9 console.clear",
              },
              slug: "chapter-29-debugging-javascript/29-1-9-consoleclear",
            },
            {
              label: "29.2 Chrome DevTools",
              translations: {
                fr: "29.2 Chrome DevTools",
              },
              slug: "chapter-29-debugging-javascript/29-2-chrome-devtools",
            },
            {
              label: "29.2.1 Sources Panel",
              translations: {
                fr: "29.2.1 Panneau Sources",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-sources-panel",
            },
            {
              label: "29.2.1.1 Breakpoints (line, conditional, DOM, event listener)",
              translations: {
                fr: "29.2.1.1 Points d'arrêt (ligne, conditionnel, DOM, écouteur d'événement)",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-1-breakpoints-line-conditional-dom-event-listener",
            },
            {
              label: "29.2.1.2 Stepping Through Code",
              translations: {
                fr: "29.2.1.2 Parcourir le code pas à pas",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-2-stepping-through-code",
            },
            {
              label: "29.2.1.3 Watch Expressions",
              translations: {
                fr: "29.2.1.3 Expressions de surveillance",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-3-watch-expressions",
            },
            {
              label: "29.2.1.4 Call Stack",
              translations: {
                fr: "29.2.1.4 Pile d'appels",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-4-call-stack",
            },
            {
              label: "29.2.1.5 Scope Variables",
              translations: {
                fr: "29.2.1.5 Variables de portée",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-5-scope-variables",
            },
            {
              label: "29.2.1.6 Blackboxing Scripts",
              translations: {
                fr: "29.2.1.6 Blackboxing de scripts",
              },
              slug: "chapter-29-debugging-javascript/29-2-1-6-blackboxing-scripts",
            },
            {
              label: "29.2.2 Debugging with debugger Statement",
              translations: {
                fr: "29.2.2 Débogage avec l'instruction debugger",
              },
              slug: "chapter-29-debugging-javascript/29-2-2-debugging-with-debugger-statement",
            },
            {
              label: "29.2.3 Debugging Async Code",
              translations: {
                fr: "29.2.3 Déboguer du code asynchrone",
              },
              slug: "chapter-29-debugging-javascript/29-2-3-debugging-async-code",
            },
            {
              label: "29.2.4 Debugging Memory Issues (Heap Snapshots)",
              translations: {
                fr: "29.2.4 Déboguer les problèmes de mémoire (instantanés du tas)",
              },
              slug: "chapter-29-debugging-javascript/29-2-4-debugging-memory-issues-heap-snapshots",
            },
            {
              label: "29.2.5 Performance Profiling",
              translations: {
                fr: "29.2.5 Profilage de performance",
              },
              slug: "chapter-29-debugging-javascript/29-2-5-performance-profiling",
            },
            {
              label: "29.2.6 Network Panel for API Debugging",
              translations: {
                fr: "29.2.6 Panneau Network pour le débogage d'API",
              },
              slug: "chapter-29-debugging-javascript/29-2-6-network-panel-for-api-debugging",
            },
            {
              label: "29.3 VS Code Debugger",
              translations: {
                fr: "29.3 Débogueur VS Code",
              },
              slug: "chapter-29-debugging-javascript/29-3-vs-code-debugger",
            },
            {
              label: "29.3.1 Launch Configurations",
              translations: {
                fr: "29.3.1 Configurations de lancement",
              },
              slug: "chapter-29-debugging-javascript/29-3-1-launch-configurations",
            },
            {
              label: "29.3.2 Attaching to Node.js Processes",
              translations: {
                fr: "29.3.2 Attacher à des processus Node.js",
              },
              slug: "chapter-29-debugging-javascript/29-3-2-attaching-to-nodejs-processes",
            },
            {
              label: "29.3.3 Debugging Tests",
              translations: {
                fr: "29.3.3 Déboguer les tests",
              },
              slug: "chapter-29-debugging-javascript/29-3-3-debugging-tests",
            },
            {
              label: "29.4 Node.js Debugging",
              translations: {
                fr: "29.4 Débogage Node.js",
              },
              slug: "chapter-29-debugging-javascript/29-4-nodejs-debugging",
            },
            {
              label: "29.4.1 Inspector",
              translations: {
                fr: "29.4.1 Inspecteur",
              },
              slug: "chapter-29-debugging-javascript/29-4-1-inspector",
            },
            {
              label: "29.4.2 ndb",
              translations: {
                fr: "29.4.2 ndb",
              },
              slug: "chapter-29-debugging-javascript/29-4-2-ndb",
            },
          ],
        },
        {
          label: "30 - Code Quality and Linting",
          translations: {
            fr: "30 - Qualité de code et linting",
          },
          items: [
            {
              label: "30.1 ESLint",
              translations: {
                fr: "30.1 ESLint",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-eslint",
            },
            {
              label: "30.1.1 Installation and Configuration",
              translations: {
                fr: "30.1.1 Installation et configuration",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-1-installation-and-configuration",
            },
            {
              label: "30.1.2 Rules (errors, warnings, off)",
              translations: {
                fr: "30.1.2 Règles (erreurs, avertissements, désactivé)",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-2-rules-errors-warnings-off",
            },
            {
              label: "30.1.3 Plugins",
              translations: {
                fr: "30.1.3 Plugins",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-3-plugins",
            },
            {
              label: "30.1.4 Extending Configs",
              translations: {
                fr: "30.1.4 Étendre des configurations",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-4-extending-configs",
            },
            {
              label: "30.1.5 .eslintrc Formats",
              translations: {
                fr: "30.1.5 Formats .eslintrc",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-5-eslintrc-formats",
            },
            {
              label: "30.1.6 Ignoring Files",
              translations: {
                fr: "30.1.6 Ignorer des fichiers",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-6-ignoring-files",
            },
            {
              label: "30.1.7 Fixing Automatically",
              translations: {
                fr: "30.1.7 Correction automatique",
              },
              slug: "chapter-30-code-quality-and-linting/30-1-7-fixing-automatically",
            },
            {
              label: "30.2 Prettier",
              translations: {
                fr: "30.2 Prettier",
              },
              slug: "chapter-30-code-quality-and-linting/30-2-prettier",
            },
            {
              label: "30.2.1 Opinionated Formatting",
              translations: {
                fr: "30.2.1 Formatage opinionné",
              },
              slug: "chapter-30-code-quality-and-linting/30-2-1-opinionated-formatting",
            },
            {
              label: "30.2.2 Integration with ESLint",
              translations: {
                fr: "30.2.2 Intégration avec ESLint",
              },
              slug: "chapter-30-code-quality-and-linting/30-2-2-integration-with-eslint",
            },
            {
              label: "30.2.3 Configuration Options",
              translations: {
                fr: "30.2.3 Options de configuration",
              },
              slug: "chapter-30-code-quality-and-linting/30-2-3-configuration-options",
            },
            {
              label: "30.3 EditorConfig",
              translations: {
                fr: "30.3 EditorConfig",
              },
              slug: "chapter-30-code-quality-and-linting/30-3-editorconfig",
            },
            {
              label: "30.4 Husky and lint-staged (Git Hooks)",
              translations: {
                fr: "30.4 Husky et lint-staged (hooks Git)",
              },
              slug: "chapter-30-code-quality-and-linting/30-4-husky-and-lint-staged-git-hooks",
            },
            {
              label: "30.5 JSDoc Comments",
              translations: {
                fr: "30.5 Commentaires JSDoc",
              },
              slug: "chapter-30-code-quality-and-linting/30-5-jsdoc-comments",
            },
            {
              label: "30.5.1 @param, @returns, @throws",
              translations: {
                fr: "30.5.1 @param, @returns, @throws",
              },
              slug: "chapter-30-code-quality-and-linting/30-5-1-param-returns-throws",
            },
            {
              label: "30.5.2 @typedef for Custom Types",
              translations: {
                fr: "30.5.2 @typedef pour les types personnalisés",
              },
              slug: "chapter-30-code-quality-and-linting/30-5-2-typedef-for-custom-types",
            },
            {
              label: "30.5.3 Generating Documentation",
              translations: {
                fr: "30.5.3 Générer de la documentation",
              },
              slug: "chapter-30-code-quality-and-linting/30-5-3-generating-documentation",
            },
          ],
        },
        {
          label: "31 - Testing JavaScript",
          translations: {
            fr: "31 - Tester JavaScript",
          },
          items: [
            {
              label: "31.1 Testing Fundamentals",
              translations: {
                fr: "31.1 Fondamentaux du test",
              },
              slug: "chapter-31-testing-javascript/31-1-testing-fundamentals",
            },
            {
              label: "31.1.1 Why Test?",
              translations: {
                fr: "31.1.1 Pourquoi tester ?",
              },
              slug: "chapter-31-testing-javascript/31-1-1-why-test",
            },
            {
              label: "31.1.2 Types of Tests (Unit, Integration, E2E)",
              translations: {
                fr: "31.1.2 Types de tests (unitaire, intégration, E2E)",
              },
              slug: "chapter-31-testing-javascript/31-1-2-types-of-tests-unit-integration-e2e",
            },
            {
              label: "31.1.3 Test Pyramid",
              translations: {
                fr: "31.1.3 Pyramide des tests",
              },
              slug: "chapter-31-testing-javascript/31-1-3-test-pyramid",
            },
            {
              label: "31.2 Unit Testing with Jest",
              translations: {
                fr: "31.2 Tests unitaires avec Jest",
              },
              slug: "chapter-31-testing-javascript/31-2-unit-testing-with-jest",
            },
            {
              label: "31.2.1 Setup and Configuration",
              translations: {
                fr: "31.2.1 Installation et configuration",
              },
              slug: "chapter-31-testing-javascript/31-2-1-setup-and-configuration",
            },
            {
              label: "31.2.2 Matchers (toBe, toEqual, toContain, toThrow)",
              translations: {
                fr: "31.2.2 Comparateurs (toBe, toEqual, toContain, toThrow)",
              },
              slug: "chapter-31-testing-javascript/31-2-2-matchers-tobe-toequal-tocontain-tothrow",
            },
            {
              label: "31.2.3 Setup and Teardown (beforeEach, afterAll)",
              translations: {
                fr: "31.2.3 Initialisation et nettoyage (beforeEach, afterAll)",
              },
              slug: "chapter-31-testing-javascript/31-2-3-setup-and-teardown-beforeeach-afterall",
            },
            {
              label: "31.2.4 Mocking Functions (jest.fn(), jest.spyOn())",
              translations: {
                fr: "31.2.4 Mock de fonctions (jest.fn(), jest.spyOn())",
              },
              slug: "chapter-31-testing-javascript/31-2-4-mocking-functions-jestfn-jestspyon",
            },
            {
              label: "31.2.5 Mocking Modules (jest.mock())",
              translations: {
                fr: "31.2.5 Mock de modules (jest.mock())",
              },
              slug: "chapter-31-testing-javascript/31-2-5-mocking-modules-jestmock",
            },
            {
              label: "31.2.6 Mocking Timers (jest.useFakeTimers())",
              translations: {
                fr: "31.2.6 Mock de minuteries (jest.useFakeTimers())",
              },
              slug: "chapter-31-testing-javascript/31-2-6-mocking-timers-jestusefaketimers",
            },
            {
              label: "31.2.7 Testing Async Code",
              translations: {
                fr: "31.2.7 Tester du code asynchrone",
              },
              slug: "chapter-31-testing-javascript/31-2-7-testing-async-code",
            },
            {
              label: "31.2.8 Code Coverage",
              translations: {
                fr: "31.2.8 Couverture de code",
              },
              slug: "chapter-31-testing-javascript/31-2-8-code-coverage",
            },
            {
              label: "31.3 Alternative Test Runners (Mocha, Jasmine, Vitest)",
              translations: {
                fr: "31.3 Autres exécuteurs de tests (Mocha, Jasmine, Vitest)",
              },
              slug: "chapter-31-testing-javascript/31-3-alternative-test-runners-mocha-jasmine-vitest",
            },
            {
              label: "31.4 Assertion Libraries (Chai, expect)",
              translations: {
                fr: "31.4 Bibliothèques d'assertion (Chai, expect)",
              },
              slug: "chapter-31-testing-javascript/31-4-assertion-libraries-chai-expect",
            },
            {
              label: "31.5 Test-Driven Development (TDD) with JavaScript",
              translations: {
                fr: "31.5 Développement piloté par les tests (TDD) avec JavaScript",
              },
              slug: "chapter-31-testing-javascript/31-5-test-driven-development-tdd-with-javascript",
            },
            {
              label: "31.5.1 Red-Green-Refactor Cycle",
              translations: {
                fr: "31.5.1 Cycle rouge-vert-refactor",
              },
              slug: "chapter-31-testing-javascript/31-5-1-red-green-refactor-cycle",
            },
            {
              label: "31.5.2 Writing Tests First",
              translations: {
                fr: "31.5.2 Écrire les tests d'abord",
              },
              slug: "chapter-31-testing-javascript/31-5-2-writing-tests-first",
            },
            {
              label: "31.5.3 Refactoring Safely",
              translations: {
                fr: "31.5.3 Refactoriser en toute sécurité",
              },
              slug: "chapter-31-testing-javascript/31-5-3-refactoring-safely",
            },
            {
              label: "31.6 Property-Based Testing (fast-check)",
              translations: {
                fr: "31.6 Tests basés sur les propriétés (fast-check)",
              },
              slug: "chapter-31-testing-javascript/31-6-property-based-testing-fast-check",
            },
          ],
        },
        {
          label: "32 - JavaScript Performance",
          translations: {
            fr: "32 - Performance JavaScript",
          },
          items: [
            {
              label: "32.1 Measuring Performance",
              translations: {
                fr: "32.1 Mesurer la performance",
              },
              slug: "chapter-32-javascript-performance/32-1-measuring-performance",
            },
            {
              label: "32.1.1 Performance API (performance.now())",
              translations: {
                fr: "32.1.1 Performance API (performance.now())",
              },
              slug: "chapter-32-javascript-performance/32-1-1-performance-api-performancenow",
            },
            {
              label: "32.1.2 console.time",
              translations: {
                fr: "32.1.2 console.time",
              },
              slug: "chapter-32-javascript-performance/32-1-2-consoletime",
            },
            {
              label: "32.1.3 Chrome DevTools Performance Tab",
              translations: {
                fr: "32.1.3 Onglet Performance des Chrome DevTools",
              },
              slug: "chapter-32-javascript-performance/32-1-3-chrome-devtools-performance-tab",
            },
            {
              label: "32.1.4 Lighthouse Audits",
              translations: {
                fr: "32.1.4 Audits Lighthouse",
              },
              slug: "chapter-32-javascript-performance/32-1-4-lighthouse-audits",
            },
            {
              label: "32.2 JavaScript Engine Optimizations",
              translations: {
                fr: "32.2 Optimisations du moteur JavaScript",
              },
              slug: "chapter-32-javascript-performance/32-2-javascript-engine-optimizations",
            },
            {
              label: "32.2.1 Hidden Classes",
              translations: {
                fr: "32.2.1 Classes cachées",
              },
              slug: "chapter-32-javascript-performance/32-2-1-hidden-classes",
            },
            {
              label: "32.2.2 Inline Caching",
              translations: {
                fr: "32.2.2 Mise en cache en ligne",
              },
              slug: "chapter-32-javascript-performance/32-2-2-inline-caching",
            },
            {
              label: "32.2.3 Just-In-Time (JIT) Compilation",
              translations: {
                fr: "32.2.3 Compilation à la volée (JIT)",
              },
              slug: "chapter-32-javascript-performance/32-2-3-just-in-time-jit-compilation",
            },
            {
              label: "32.2.4 Garbage Collection Impact",
              translations: {
                fr: "32.2.4 Impact du garbage collection",
              },
              slug: "chapter-32-javascript-performance/32-2-4-garbage-collection-impact",
            },
            {
              label: "32.3 Code-Level Optimizations",
              translations: {
                fr: "32.3 Optimisations au niveau du code",
              },
              slug: "chapter-32-javascript-performance/32-3-code-level-optimizations",
            },
            {
              label: "32.3.1 Loop Optimizations",
              translations: {
                fr: "32.3.1 Optimisations de boucles",
              },
              slug: "chapter-32-javascript-performance/32-3-1-loop-optimizations",
            },
            {
              label: "32.3.2 Function Inlining",
              translations: {
                fr: "32.3.2 Inlining de fonctions",
              },
              slug: "chapter-32-javascript-performance/32-3-2-function-inlining",
            },
            {
              label: "32.3.3 Memoization",
              translations: {
                fr: "32.3.3 Mémoïsation",
              },
              slug: "chapter-32-javascript-performance/32-3-3-memoization",
            },
            {
              label: "32.3.4 Debouncing and Throttling",
              translations: {
                fr: "32.3.4 Debouncing et throttling",
              },
              slug: "chapter-32-javascript-performance/32-3-4-debouncing-and-throttling",
            },
            {
              label: "32.3.5 Lazy Evaluation",
              translations: {
                fr: "32.3.5 Évaluation paresseuse",
              },
              slug: "chapter-32-javascript-performance/32-3-5-lazy-evaluation",
            },
            {
              label: "32.3.6 Avoiding Memory Leaks",
              translations: {
                fr: "32.3.6 Éviter les fuites de mémoire",
              },
              slug: "chapter-32-javascript-performance/32-3-6-avoiding-memory-leaks",
            },
            {
              label: "32.4 DOM Interaction Performance",
              translations: {
                fr: "32.4 Performance des interactions DOM",
              },
              slug: "chapter-32-javascript-performance/32-4-dom-interaction-performance",
            },
            {
              label: "32.4.1 Reflow and Repaint",
              translations: {
                fr: "32.4.1 Reflux et repaint",
              },
              slug: "chapter-32-javascript-performance/32-4-1-reflow-and-repaint",
            },
            {
              label: "32.4.2 Batch DOM Updates",
              translations: {
                fr: "32.4.2 Mises à jour DOM par lots",
              },
              slug: "chapter-32-javascript-performance/32-4-2-batch-dom-updates",
            },
            {
              label: "32.4.3 Document Fragments",
              translations: {
                fr: "32.4.3 Fragments de document",
              },
              slug: "chapter-32-javascript-performance/32-4-3-document-fragments",
            },
            {
              label: "32.4.4 requestAnimationFrame",
              translations: {
                fr: "32.4.4 requestAnimationFrame",
              },
              slug: "chapter-32-javascript-performance/32-4-4-requestanimationframe",
            },
            {
              label: "32.4.5 Virtual Scrolling",
              translations: {
                fr: "32.4.5 Défilement virtuel",
              },
              slug: "chapter-32-javascript-performance/32-4-5-virtual-scrolling",
            },
            {
              label: "32.5 Network Performance",
              translations: {
                fr: "32.5 Performance réseau",
              },
              slug: "chapter-32-javascript-performance/32-5-network-performance",
            },
            {
              label: "32.5.1 Minimizing Bundle Size",
              translations: {
                fr: "32.5.1 Minimiser la taille du bundle",
              },
              slug: "chapter-32-javascript-performance/32-5-1-minimizing-bundle-size",
            },
            {
              label: "32.5.2 Code Splitting",
              translations: {
                fr: "32.5.2 Fractionnement de code",
              },
              slug: "chapter-32-javascript-performance/32-5-2-code-splitting",
            },
            {
              label: "32.5.3 Lazy Loading",
              translations: {
                fr: "32.5.3 Chargement paresseux",
              },
              slug: "chapter-32-javascript-performance/32-5-3-lazy-loading",
            },
            {
              label: "32.5.4 Preloading, Prefetching, Preconnecting",
              translations: {
                fr: "32.5.4 Préchargement, prélecture, préconnexion",
              },
              slug: "chapter-32-javascript-performance/32-5-4-preloading-prefetching-preconnecting",
            },
          ],
        },
        {
          label: "33 - Design Patterns in JavaScript",
          translations: {
            fr: "33 - Design patterns en JavaScript",
          },
          items: [
            {
              label: "33.1 Creational Patterns",
              translations: {
                fr: "33.1 Patterns de création",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-creational-patterns",
            },
            {
              label: "33.1.1 Singleton",
              translations: {
                fr: "33.1.1 Singleton",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-1-singleton",
            },
            {
              label: "33.1.2 Factory Method",
              translations: {
                fr: "33.1.2 Méthode de fabrique",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-2-factory-method",
            },
            {
              label: "33.1.3 Abstract Factory",
              translations: {
                fr: "33.1.3 Fabrique abstraite",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-3-abstract-factory",
            },
            {
              label: "33.1.4 Builder",
              translations: {
                fr: "33.1.4 Monteur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-4-builder",
            },
            {
              label: "33.1.5 Prototype",
              translations: {
                fr: "33.1.5 Prototype",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-1-5-prototype",
            },
            {
              label: "33.2 Structural Patterns",
              translations: {
                fr: "33.2 Patterns structurels",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-structural-patterns",
            },
            {
              label: "33.2.1 Adapter",
              translations: {
                fr: "33.2.1 Adaptateur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-1-adapter",
            },
            {
              label: "33.2.2 Decorator",
              translations: {
                fr: "33.2.2 Décorateur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-2-decorator",
            },
            {
              label: "33.2.3 Proxy",
              translations: {
                fr: "33.2.3 Proxy",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-3-proxy",
            },
            {
              label: "33.2.4 Facade",
              translations: {
                fr: "33.2.4 Façade",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-4-facade",
            },
            {
              label: "33.2.5 Bridge",
              translations: {
                fr: "33.2.5 Pont",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-5-bridge",
            },
            {
              label: "33.2.6 Composite",
              translations: {
                fr: "33.2.6 Composite",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-6-composite",
            },
            {
              label: "33.2.7 Flyweight",
              translations: {
                fr: "33.2.7 Poids-mouche",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-2-7-flyweight",
            },
            {
              label: "33.3 Behavioral Patterns",
              translations: {
                fr: "33.3 Patterns comportementaux",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-behavioral-patterns",
            },
            {
              label: "33.3.1 Observer",
              translations: {
                fr: "33.3.1 Observateur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-1-observer",
            },
            {
              label: "33.3.2 Strategy",
              translations: {
                fr: "33.3.2 Stratégie",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-2-strategy",
            },
            {
              label: "33.3.3 Command",
              translations: {
                fr: "33.3.3 Commande",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-3-command",
            },
            {
              label: "33.3.4 Iterator (already covered)",
              translations: {
                fr: "33.3.4 Itérateur (déjà couvert)",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-4-iterator-already-covered",
            },
            {
              label: "33.3.5 Mediator",
              translations: {
                fr: "33.3.5 Médiateur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-5-mediator",
            },
            {
              label: "33.3.6 Memento",
              translations: {
                fr: "33.3.6 Mémento",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-6-memento",
            },
            {
              label: "33.3.7 State",
              translations: {
                fr: "33.3.7 État",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-7-state",
            },
            {
              label: "33.3.8 Template Method",
              translations: {
                fr: "33.3.8 Méthode patron",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-8-template-method",
            },
            {
              label: "33.3.9 Visitor",
              translations: {
                fr: "33.3.9 Visiteur",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-9-visitor",
            },
            {
              label: "33.3.10 Chain of Responsibility",
              translations: {
                fr: "33.3.10 Chaîne de responsabilité",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-3-10-chain-of-responsibility",
            },
            {
              label: "33.4 JavaScript-Specific Patterns",
              translations: {
                fr: "33.4 Patterns spécifiques à JavaScript",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-javascript-specific-patterns",
            },
            {
              label: "33.4.1 Module Pattern",
              translations: {
                fr: "33.4.1 Module Pattern",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-1-module-pattern",
            },
            {
              label: "33.4.2 Revealing Module Pattern",
              translations: {
                fr: "33.4.2 Revealing Module Pattern",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-2-revealing-module-pattern",
            },
            {
              label: "33.4.3 Singleton in ES6",
              translations: {
                fr: "33.4.3 Singleton en ES6",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-3-singleton-in-es6",
            },
            {
              label: "33.4.4 Mixins",
              translations: {
                fr: "33.4.4 Mixins",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-4-mixins",
            },
            {
              label: "33.4.5 Middleware Pattern",
              translations: {
                fr: "33.4.5 Middleware Pattern",
              },
              slug: "chapter-33-design-patterns-in-javascript/33-4-5-middleware-pattern",
            },
          ],
        },
        {
          label: "34 - Document Object Model (DOM)",
          translations: {
            fr: "34 - Document Object Model (DOM)",
          },
          items: [
            {
              label: "34.1 DOM Tree Structure",
              translations: {
                fr: "34.1 Structure de l'arbre DOM",
              },
              slug: "chapter-34-document-object-model-dom/34-1-dom-tree-structure",
            },
            {
              label: "34.2 Selecting Elements",
              translations: {
                fr: "34.2 Sélectionner des éléments",
              },
              slug: "chapter-34-document-object-model-dom/34-2-selecting-elements",
            },
            {
              label: "34.2.1 getElementById",
              translations: {
                fr: "34.2.1 getElementById",
              },
              slug: "chapter-34-document-object-model-dom/34-2-1-getelementbyid",
            },
            {
              label: "34.2.2 getElementsByClassName",
              translations: {
                fr: "34.2.2 getElementsByClassName",
              },
              slug: "chapter-34-document-object-model-dom/34-2-2-getelementsbyclassname",
            },
            {
              label: "34.2.3 getElementsByTagName",
              translations: {
                fr: "34.2.3 getElementsByTagName",
              },
              slug: "chapter-34-document-object-model-dom/34-2-3-getelementsbytagname",
            },
            {
              label: "34.2.4 querySelector and querySelectorAll",
              translations: {
                fr: "34.2.4 querySelector et querySelectorAll",
              },
              slug: "chapter-34-document-object-model-dom/34-2-4-queryselector-and-queryselectorall",
            },
            {
              label: "34.3 Traversing the DOM",
              translations: {
                fr: "34.3 Parcourir le DOM",
              },
              slug: "chapter-34-document-object-model-dom/34-3-traversing-the-dom",
            },
            {
              label: "34.3.1 Parent, Child, Sibling Relationships",
              translations: {
                fr: "34.3.1 Relations parent, enfant, frère",
              },
              slug: "chapter-34-document-object-model-dom/34-3-1-parent-child-sibling-relationships",
            },
            {
              label: "34.3.2 closest(), matches()",
              translations: {
                fr: "34.3.2 closest(), matches()",
              },
              slug: "chapter-34-document-object-model-dom/34-3-2-closest-matches",
            },
            {
              label: "34.4 Manipulating Elements",
              translations: {
                fr: "34.4 Manipuler des éléments",
              },
              slug: "chapter-34-document-object-model-dom/34-4-manipulating-elements",
            },
            {
              label: "34.4.1 Creating Elements (createElement)",
              translations: {
                fr: "34.4.1 Créer des éléments (createElement)",
              },
              slug: "chapter-34-document-object-model-dom/34-4-1-creating-elements-createelement",
            },
            {
              label: "34.4.2 Inserting Elements (appendChild, insertBefore, append, prepend)",
              translations: {
                fr: "34.4.2 Insérer des éléments (appendChild, insertBefore, append, prepend)",
              },
              slug: "chapter-34-document-object-model-dom/34-4-2-inserting-elements-appendchild-insertbefore-append-prepend",
            },
            {
              label: "34.4.3 Removing Elements (removeChild, remove)",
              translations: {
                fr: "34.4.3 Supprimer des éléments (removeChild, remove)",
              },
              slug: "chapter-34-document-object-model-dom/34-4-3-removing-elements-removechild-remove",
            },
            {
              label: "34.4.4 Cloning Elements (cloneNode)",
              translations: {
                fr: "34.4.4 Cloner des éléments (cloneNode)",
              },
              slug: "chapter-34-document-object-model-dom/34-4-4-cloning-elements-clonenode",
            },
            {
              label: "34.4.5 innerHTML vs textContent",
              translations: {
                fr: "34.4.5 innerHTML vs textContent",
              },
              slug: "chapter-34-document-object-model-dom/34-4-5-innerhtml-vs-textcontent",
            },
            {
              label: "34.5 Attributes and Properties",
              translations: {
                fr: "34.5 Attributs et propriétés",
              },
              slug: "chapter-34-document-object-model-dom/34-5-attributes-and-properties",
            },
            {
              label: "34.5.1 getAttribute, setAttribute, removeAttribute",
              translations: {
                fr: "34.5.1 getAttribute, setAttribute, removeAttribute",
              },
              slug: "chapter-34-document-object-model-dom/34-5-1-getattribute-setattribute-removeattribute",
            },
            {
              label: "34.5.2 dataset (data-* attributes)",
              translations: {
                fr: "34.5.2 dataset (attributs data-*)",
              },
              slug: "chapter-34-document-object-model-dom/34-5-2-dataset-data-attributes",
            },
            {
              label: "34.5.3 Class Manipulation (classList)",
              translations: {
                fr: "34.5.3 Manipulation des classes (classList)",
              },
              slug: "chapter-34-document-object-model-dom/34-5-3-class-manipulation-classlist",
            },
            {
              label: "34.6 Styles and CSS",
              translations: {
                fr: "34.6 Styles et CSS",
              },
              slug: "chapter-34-document-object-model-dom/34-6-styles-and-css",
            },
            {
              label: "34.6.1 style Property",
              translations: {
                fr: "34.6.1 Propriété style",
              },
              slug: "chapter-34-document-object-model-dom/34-6-1-style-property",
            },
            {
              label: "34.6.2 getComputedStyle",
              translations: {
                fr: "34.6.2 getComputedStyle",
              },
              slug: "chapter-34-document-object-model-dom/34-6-2-getcomputedstyle",
            },
            {
              label: "34.6.3 className and classList",
              translations: {
                fr: "34.6.3 className et classList",
              },
              slug: "chapter-34-document-object-model-dom/34-6-3-classname-and-classlist",
            },
          ],
        },
        {
          label: "35 - Events",
          translations: {
            fr: "35 - Événements",
          },
          items: [
            {
              label: "35.1 Event Types",
              translations: {
                fr: "35.1 Types d'événements",
              },
              slug: "chapter-35-events/35-1-event-types",
            },
            {
              label: "35.1.1 Mouse Events",
              translations: {
                fr: "35.1.1 Événements de souris",
              },
              slug: "chapter-35-events/35-1-1-mouse-events",
            },
            {
              label: "35.1.2 Keyboard Events",
              translations: {
                fr: "35.1.2 Événements de clavier",
              },
              slug: "chapter-35-events/35-1-2-keyboard-events",
            },
            {
              label: "35.1.3 Form Events",
              translations: {
                fr: "35.1.3 Événements de formulaire",
              },
              slug: "chapter-35-events/35-1-3-form-events",
            },
            {
              label: "35.1.4 Focus Events",
              translations: {
                fr: "35.1.4 Événements de focus",
              },
              slug: "chapter-35-events/35-1-4-focus-events",
            },
            {
              label: "35.1.5 Touch Events",
              translations: {
                fr: "35.1.5 Événements tactiles",
              },
              slug: "chapter-35-events/35-1-5-touch-events",
            },
            {
              label: "35.1.6 Drag and Drop Events",
              translations: {
                fr: "35.1.6 Événements de glisser-déposer",
              },
              slug: "chapter-35-events/35-1-6-drag-and-drop-events",
            },
            {
              label: "35.1.7 Custom Events",
              translations: {
                fr: "35.1.7 Événements personnalisés",
              },
              slug: "chapter-35-events/35-1-7-custom-events",
            },
            {
              label: "35.2 Event Handlers",
              translations: {
                fr: "35.2 Gestionnaires d'événements",
              },
              slug: "chapter-35-events/35-2-event-handlers",
            },
            {
              label: "35.2.1 Inline Event Handlers (onclick)",
              translations: {
                fr: "35.2.1 Gestionnaires en ligne (onclick)",
              },
              slug: "chapter-35-events/35-2-1-inline-event-handlers-onclick",
            },
            {
              label: "35.2.2 DOM Property Handlers",
              translations: {
                fr: "35.2.2 Gestionnaires par propriété DOM",
              },
              slug: "chapter-35-events/35-2-2-dom-property-handlers",
            },
            {
              label: "35.2.3 addEventListener",
              translations: {
                fr: "35.2.3 addEventListener",
              },
              slug: "chapter-35-events/35-2-3-addeventlistener",
            },
            {
              label: "35.2.4 removeEventListener",
              translations: {
                fr: "35.2.4 removeEventListener",
              },
              slug: "chapter-35-events/35-2-4-removeeventlistener",
            },
            {
              label: "35.3 Event Object",
              translations: {
                fr: "35.3 Objet événement",
              },
              slug: "chapter-35-events/35-3-event-object",
            },
            {
              label: "35.3.1 Properties (type, target, currentTarget)",
              translations: {
                fr: "35.3.1 Propriétés (type, target, currentTarget)",
              },
              slug: "chapter-35-events/35-3-1-properties-type-target-currenttarget",
            },
            {
              label: "35.3.2 Methods (preventDefault, stopPropagation, stopImmediatePropagation)",
              translations: {
                fr: "35.3.2 Méthodes (preventDefault, stopPropagation, stopImmediatePropagation)",
              },
              slug: "chapter-35-events/35-3-2-methods-preventdefault-stoppropagation-stopimmediatepropagation",
            },
            {
              label: "35.4 Event Propagation",
              translations: {
                fr: "35.4 Propagation des événements",
              },
              slug: "chapter-35-events/35-4-event-propagation",
            },
            {
              label: "35.4.1 Capturing Phase",
              translations: {
                fr: "35.4.1 Phase de capture",
              },
              slug: "chapter-35-events/35-4-1-capturing-phase",
            },
            {
              label: "35.4.2 Target Phase",
              translations: {
                fr: "35.4.2 Phase de cible",
              },
              slug: "chapter-35-events/35-4-2-target-phase",
            },
            {
              label: "35.4.3 Bubbling Phase",
              translations: {
                fr: "35.4.3 Phase de bouillonnement",
              },
              slug: "chapter-35-events/35-4-3-bubbling-phase",
            },
            {
              label: "35.5 Event Delegation",
              translations: {
                fr: "35.5 Délégation d'événements",
              },
              slug: "chapter-35-events/35-5-event-delegation",
            },
            {
              label: "35.6 Custom Events (CustomEvent)",
              translations: {
                fr: "35.6 Événements personnalisés (CustomEvent)",
              },
              slug: "chapter-35-events/35-6-custom-events-customevent",
            },
          ],
        },
        {
          label: "36 - Browser Storage",
          translations: {
            fr: "36 - Stockage dans le navigateur",
          },
          items: [
            {
              label: "36.1 Cookies",
              translations: {
                fr: "36.1 Cookies",
              },
              slug: "chapter-36-browser-storage/36-1-cookies",
            },
            {
              label: "36.1.1 Setting and Reading Cookies",
              translations: {
                fr: "36.1.1 Définir et lire des cookies",
              },
              slug: "chapter-36-browser-storage/36-1-1-setting-and-reading-cookies",
            },
            {
              label: "36.1.2 Cookie Attributes (expires, path, domain, secure, HttpOnly, SameSite)",
              translations: {
                fr: "36.1.2 Attributs des cookies (expires, path, domain, secure, HttpOnly, SameSite)",
              },
              slug: "chapter-36-browser-storage/36-1-2-cookie-attributes-expires-path-domain-secure-httponly-samesite",
            },
            {
              label: "36.2 Web Storage API",
              translations: {
                fr: "36.2 Web Storage API",
              },
              slug: "chapter-36-browser-storage/36-2-web-storage-api",
            },
            {
              label: "36.2.1 localStorage",
              translations: {
                fr: "36.2.1 localStorage",
              },
              slug: "chapter-36-browser-storage/36-2-1-localstorage",
            },
            {
              label: "36.2.2 sessionStorage",
              translations: {
                fr: "36.2.2 sessionStorage",
              },
              slug: "chapter-36-browser-storage/36-2-2-sessionstorage",
            },
            {
              label: "36.2.3 Storage Events",
              translations: {
                fr: "36.2.3 Événements de stockage",
              },
              slug: "chapter-36-browser-storage/36-2-3-storage-events",
            },
            {
              label: "36.3 IndexedDB",
              translations: {
                fr: "36.3 IndexedDB",
              },
              slug: "chapter-36-browser-storage/36-3-indexeddb",
            },
            {
              label: "36.3.1 Opening a Database",
              translations: {
                fr: "36.3.1 Ouvrir une base de données",
              },
              slug: "chapter-36-browser-storage/36-3-1-opening-a-database",
            },
            {
              label: "36.3.2 Object Stores",
              translations: {
                fr: "36.3.2 Magasins d'objets",
              },
              slug: "chapter-36-browser-storage/36-3-2-object-stores",
            },
            {
              label: "36.3.3 Transactions",
              translations: {
                fr: "36.3.3 Transactions",
              },
              slug: "chapter-36-browser-storage/36-3-3-transactions",
            },
            {
              label: "36.3.4 CRUD Operations",
              translations: {
                fr: "36.3.4 Opérations CRUD",
              },
              slug: "chapter-36-browser-storage/36-3-4-crud-operations",
            },
            {
              label: "36.3.5 Indexes",
              translations: {
                fr: "36.3.5 Index",
              },
              slug: "chapter-36-browser-storage/36-3-5-indexes",
            },
            {
              label: "36.3.6 Cursors",
              translations: {
                fr: "36.3.6 Curseurs",
              },
              slug: "chapter-36-browser-storage/36-3-6-cursors",
            },
            {
              label: "36.4 Cache API (Service Workers)",
              translations: {
                fr: "36.4 Cache API (Service Workers)",
              },
              slug: "chapter-36-browser-storage/36-4-cache-api-service-workers",
            },
          ],
        },
        {
          label: "37 - Network Requests",
          translations: {
            fr: "37 - Requêtes réseau",
          },
          items: [
            {
              label: "37.1 XMLHttpRequest (Legacy)",
              translations: {
                fr: "37.1 XMLHttpRequest (historique)",
              },
              slug: "chapter-37-network-requests/37-1-xmlhttprequest-legacy",
            },
            {
              label: "37.2 Fetch API",
              translations: {
                fr: "37.2 Fetch API",
              },
              slug: "chapter-37-network-requests/37-2-fetch-api",
            },
            {
              label: "37.2.1 Basic Fetch",
              translations: {
                fr: "37.2.1 Fetch basique",
              },
              slug: "chapter-37-network-requests/37-2-1-basic-fetch",
            },
            {
              label: "37.2.2 Request and Response Objects",
              translations: {
                fr: "37.2.2 Objets Request et Response",
              },
              slug: "chapter-37-network-requests/37-2-2-request-and-response-objects",
            },
            {
              label: "37.2.3 Headers",
              translations: {
                fr: "37.2.3 Headers",
              },
              slug: "chapter-37-network-requests/37-2-3-headers",
            },
            {
              label: "37.2.4 Body Methods (json, text, blob, formData)",
              translations: {
                fr: "37.2.4 Méthodes du corps (json, text, blob, formData)",
              },
              slug: "chapter-37-network-requests/37-2-4-body-methods-json-text-blob-formdata",
            },
            {
              label: "37.2.5 Error Handling",
              translations: {
                fr: "37.2.5 Gestion d'erreurs",
              },
              slug: "chapter-37-network-requests/37-2-5-error-handling",
            },
            {
              label: "37.2.6 Aborting Fetch (AbortController)",
              translations: {
                fr: "37.2.6 Annuler une requête Fetch (AbortController)",
              },
              slug: "chapter-37-network-requests/37-2-6-aborting-fetch-abortcontroller",
            },
            {
              label: "37.3 WebSockets",
              translations: {
                fr: "37.3 WebSockets",
              },
              slug: "chapter-37-network-requests/37-3-websockets",
            },
            {
              label: "37.3.1 WebSocket API",
              translations: {
                fr: "37.3.1 API WebSocket",
              },
              slug: "chapter-37-network-requests/37-3-1-websocket-api",
            },
            {
              label: "37.3.2 Sending and Receiving Messages",
              translations: {
                fr: "37.3.2 Envoyer et recevoir des messages",
              },
              slug: "chapter-37-network-requests/37-3-2-sending-and-receiving-messages",
            },
            {
              label: "37.3.3 Connection Management",
              translations: {
                fr: "37.3.3 Gestion de connexion",
              },
              slug: "chapter-37-network-requests/37-3-3-connection-management",
            },
            {
              label: "37.4 Server-Sent Events (EventSource)",
              translations: {
                fr: "37.4 Server-Sent Events (EventSource)",
              },
              slug: "chapter-37-network-requests/37-4-server-sent-events-eventsource",
            },
          ],
        },
        {
          label: "38 - Internationalization (i18n)",
          translations: {
            fr: "38 - Internationalisation (i18n)",
          },
          items: [
            {
              label: "38.1 Intl Object Overview",
              translations: {
                fr: "38.1 Présentation de l'objet Intl",
              },
              slug: "chapter-38-internationalization-i18n/38-1-intl-object-overview",
            },
            {
              label: "38.2 Number Formatting (Intl.NumberFormat)",
              translations: {
                fr: "38.2 Formatage des nombres (Intl.NumberFormat)",
              },
              slug: "chapter-38-internationalization-i18n/38-2-number-formatting-intlnumberformat",
            },
            {
              label: "38.3 Date and Time Formatting (Intl.DateTimeFormat)",
              translations: {
                fr: "38.3 Formatage des dates et heures (Intl.DateTimeFormat)",
              },
              slug: "chapter-38-internationalization-i18n/38-3-date-and-time-formatting-intldatetimeformat",
            },
            {
              label: "38.4 Collation (Intl.Collator)",
              translations: {
                fr: "38.4 Collation (Intl.Collator)",
              },
              slug: "chapter-38-internationalization-i18n/38-4-collation-intlcollator",
            },
            {
              label: "38.5 Pluralization (Intl.PluralRules)",
              translations: {
                fr: "38.5 Pluriels (Intl.PluralRules)",
              },
              slug: "chapter-38-internationalization-i18n/38-5-pluralization-intlpluralrules",
            },
            {
              label: "38.6 Relative Time (Intl.RelativeTimeFormat)",
              translations: {
                fr: "38.6 Temps relatifs (Intl.RelativeTimeFormat)",
              },
              slug: "chapter-38-internationalization-i18n/38-6-relative-time-intlrelativetimeformat",
            },
            {
              label: "38.7 List Formatting (Intl.ListFormat)",
              translations: {
                fr: "38.7 Formatage de listes (Intl.ListFormat)",
              },
              slug: "chapter-38-internationalization-i18n/38-7-list-formatting-intllistformat",
            },
          ],
        },
        {
          label: "39 - Security in JavaScript",
          translations: {
            fr: "39 - Sécurité en JavaScript",
          },
          items: [
            {
              label: "39.1 Cross-Site Scripting (XSS)",
              translations: {
                fr: "39.1 Cross-Site Scripting (XSS)",
              },
              slug: "chapter-39-security-in-javascript/39-1-cross-site-scripting-xss",
            },
            {
              label: "39.1.1 Reflected XSS",
              translations: {
                fr: "39.1.1 XSS réfléchi",
              },
              slug: "chapter-39-security-in-javascript/39-1-1-reflected-xss",
            },
            {
              label: "39.1.2 Stored XSS",
              translations: {
                fr: "39.1.2 XSS stocké",
              },
              slug: "chapter-39-security-in-javascript/39-1-2-stored-xss",
            },
            {
              label: "39.1.3 DOM-based XSS",
              translations: {
                fr: "39.1.3 XSS basé sur le DOM",
              },
              slug: "chapter-39-security-in-javascript/39-1-3-dom-based-xss",
            },
            {
              label: "39.1.4 Prevention Strategies (escaping, CSP)",
              translations: {
                fr: "39.1.4 Stratégies de prévention (échappement, CSP)",
              },
              slug: "chapter-39-security-in-javascript/39-1-4-prevention-strategies-escaping-csp",
            },
            {
              label: "39.2 Cross-Site Request Forgery (CSRF)",
              translations: {
                fr: "39.2 Cross-Site Request Forgery (CSRF)",
              },
              slug: "chapter-39-security-in-javascript/39-2-cross-site-request-forgery-csrf",
            },
            {
              label: "39.3 Content Security Policy (CSP)",
              translations: {
                fr: "39.3 Content Security Policy (CSP)",
              },
              slug: "chapter-39-security-in-javascript/39-3-content-security-policy-csp",
            },
            {
              label: "39.4 Same-Origin Policy and CORS",
              translations: {
                fr: "39.4 Same-Origin Policy et CORS",
              },
              slug: "chapter-39-security-in-javascript/39-4-same-origin-policy-and-cors",
            },
            {
              label: "39.5 iframe Security (sandbox)",
              translations: {
                fr: "39.5 Sécurité des iframes (sandbox)",
              },
              slug: "chapter-39-security-in-javascript/39-5-iframe-security-sandbox",
            },
            {
              label: "39.6 Subresource Integrity (SRI)",
              translations: {
                fr: "39.6 Subresource Integrity (SRI)",
              },
              slug: "chapter-39-security-in-javascript/39-6-subresource-integrity-sri",
            },
            {
              label: "39.7 Secure Cookies (HttpOnly, Secure, SameSite)",
              translations: {
                fr: "39.7 Cookies sécurisés (HttpOnly, Secure, SameSite)",
              },
              slug: "chapter-39-security-in-javascript/39-7-secure-cookies-httponly-secure-samesite",
            },
          ],
        },
        {
          label: "40 - JavaScript Runtimes and Environments",
          translations: {
            fr: "40 - Runtimes et environnements JavaScript",
          },
          items: [
            {
              label: "40.1 Browser JavaScript",
              translations: {
                fr: "40.1 JavaScript dans le navigateur",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-browser-javascript",
            },
            {
              label: "40.1.1 window Object",
              translations: {
                fr: "40.1.1 Objet window",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-1-window-object",
            },
            {
              label: "40.1.2 document Object",
              translations: {
                fr: "40.1.2 Objet document",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-2-document-object",
            },
            {
              label: "40.1.3 navigator Object",
              translations: {
                fr: "40.1.3 Objet navigator",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-3-navigator-object",
            },
            {
              label: "40.1.4 location Object",
              translations: {
                fr: "40.1.4 Objet location",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-4-location-object",
            },
            {
              label: "40.1.5 history Object",
              translations: {
                fr: "40.1.5 Objet history",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-1-5-history-object",
            },
            {
              label: "40.2 Node.js JavaScript",
              translations: {
                fr: "40.2 JavaScript Node.js",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-nodejs-javascript",
            },
            {
              label: "40.2.1 global Object",
              translations: {
                fr: "40.2.1 Objet global",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-1-global-object",
            },
            {
              label: "40.2.2 process Object",
              translations: {
                fr: "40.2.2 Objet process",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-2-process-object",
            },
            {
              label: "40.2.3 Buffer",
              translations: {
                fr: "40.2.3 Buffer",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-3-buffer",
            },
            {
              label: "40.2.4 __dirname, __filename",
              translations: {
                fr: "40.2.4 **dirname, **filename",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-4-__dirname-__filename",
            },
            {
              label: "40.2.5 module and require",
              translations: {
                fr: "40.2.5 module et require",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-2-5-module-and-require",
            },
            {
              label: "40.3 Deno and Bun (Alternative Runtimes)",
              translations: {
                fr: "40.3 Deno et Bun (runtimes alternatifs)",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-3-deno-and-bun-alternative-runtimes",
            },
            {
              label: "40.4 WebAssembly and JavaScript",
              translations: {
                fr: "40.4 WebAssembly et JavaScript",
              },
              slug: "chapter-40-javascript-runtimes-and-environments/40-4-webassembly-and-javascript",
            },
          ],
        },
      ],
    }),
  ],
});
