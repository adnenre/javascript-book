---
title: WeakMap Use Cases (Private Data, Caching)
sidebar:
  order: 14
  label: 17.3.2 Use Cases (Private Data, Caching)
---

WeakMaps shine in specific scenarios where you need to associate data with objects without preventing their garbage collection. The two most common use cases are implementing private properties and creating memory-safe caches.

### Primary Use Cases

| Use Case             | Description                           | Why WeakMap?                                |
| -------------------- | ------------------------------------- | ------------------------------------------- |
| **Private Data**     | Store internal state of objects       | Data is cleaned up when object is destroyed |
| **Caching**          | Cache computed results per object     | Cache entries don't cause memory leaks      |
| **Metadata Storage** | Attach metadata to DOM elements       | Automatic cleanup when elements are removed |
| **Observer Pattern** | Track observers without preventing GC | No manual cleanup required                  |

### Use Case 1: Private Properties (Without WeakMap)

Traditional JavaScript doesn't have true private properties (before ES2022). WeakMaps provide a clean solution.

### Use Case 2: Caching

Regular Map caches keep objects alive indefinitely. WeakMap caches allow garbage collection.

### Key Points

- WeakMap private data is truly private (not accessible without the WeakMap).
- WeakMap caches prevent memory leaks in long-running applications.
- DOM element metadata automatically cleans up when elements are removed.
- The observer pattern can be implemented without manual cleanup.

### Example Code

```javascript
// USE CASE 1: Private Properties with WeakMap

// Before WeakMap (convention-based privacy - not secure)
class PersonOld {
  constructor(name) {
    this._name = name; // Convention, not truly private
  }

  getName() {
    return this._name;
  }
}

// With WeakMap (truly private)
const _privateName = new WeakMap();
const _privateAge = new WeakMap();

class Person {
  constructor(name, age) {
    _privateName.set(this, name);
    _privateAge.set(this, age);
  }

  getName() {
    return _privateName.get(this);
  }

  getAge() {
    return _privateAge.get(this);
  }

  setAge(age) {
    _privateAge.set(this, age);
  }

  introduce() {
    const name = _privateName.get(this);
    const age = _privateAge.get(this);
    return `${name} is ${age} years old`;
  }
}

const alice = new Person("Alice", 30);
console.log(alice.getName()); // 'Alice'
console.log(alice.introduce()); // 'Alice is 30 years old'
console.log(alice._privateName); // undefined (truly private)

// USE CASE 2: Private methods (using WeakMap)
const _privateMethods = new WeakMap();

class Counter {
  constructor() {
    _privateMethods.set(this, {
      validate(value) {
        if (value < 0) throw new Error("Cannot be negative");
        return value;
      },
    });
    this.count = 0;
  }

  increment() {
    const methods = _privateMethods.get(this);
    this.count = methods.validate(this.count + 1);
    return this.count;
  }

  decrement() {
    const methods = _privateMethods.get(this);
    this.count = methods.validate(this.count - 1);
    return this.count;
  }
}

const counter = new Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// USE CASE 3: Caching with WeakMap (preventing memory leaks)

// Bad: Regular Map cache (memory leak)
const strongCache = new Map();

function expensiveOperationBad(obj) {
  if (strongCache.has(obj)) {
    console.log("Cache hit (bad)");
    return strongCache.get(obj);
  }

  console.log("Computing expensive result...");
  const result = { computed: Date.now(), data: obj.value };
  strongCache.set(obj, result);
  return result;
}

let tempObj = { value: "test" };
expensiveOperationBad(tempObj); // Computes
expensiveOperationBad(tempObj); // Cache hit
tempObj = null;
// Cache still holds reference - memory leak!

// Good: WeakMap cache (no memory leak)
const weakCache = new WeakMap();

function expensiveOperationGood(obj) {
  if (weakCache.has(obj)) {
    console.log("Cache hit (good)");
    return weakCache.get(obj);
  }

  console.log("Computing expensive result...");
  const result = { computed: Date.now(), data: obj.value };
  weakCache.set(obj, result);
  return result;
}

let tempObj2 = { value: "test" };
expensiveOperationGood(tempObj2); // Computes
expensiveOperationGood(tempObj2); // Cache hit
tempObj2 = null;
// Cache entry can be garbage collected - no leak!

// USE CASE 4: DOM element metadata
const elementMetadata = new WeakMap();

function trackElementPerformance(element) {
  if (!elementMetadata.has(element)) {
    elementMetadata.set(element, {
      renderCount: 0,
      lastRenderTime: null,
      eventCounts: {},
    });
  }

  const metadata = elementMetadata.get(element);

  return {
    incrementRender() {
      metadata.renderCount++;
      metadata.lastRenderTime = Date.now();
    },
    incrementEvent(eventType) {
      metadata.eventCounts[eventType] = (metadata.eventCounts[eventType] || 0) + 1;
    },
    getStats() {
      return { ...metadata };
    },
  };
}

// Simulating DOM elements
let button = { id: "submit-btn", tagName: "BUTTON" };
let input = { id: "username", tagName: "INPUT" };

const buttonTracker = trackElementPerformance(button);
const inputTracker = trackElementPerformance(input);

buttonTracker.incrementRender();
buttonTracker.incrementEvent("click");
buttonTracker.incrementEvent("click");
inputTracker.incrementRender();

console.log(buttonTracker.getStats());
// { renderCount: 1, lastRenderTime: ..., eventCounts: { click: 2 } }

// When elements are removed from DOM
button = null;
input = null;

// Metadata is automatically cleaned up!

// USE CASE 5: Image/Resource caching with WeakMap
const imageCache = new WeakMap();

class ImageManager {
  constructor() {
    this.loadedImages = new WeakMap();
  }

  loadImage(element, url) {
    if (this.loadedImages.has(element)) {
      console.log("Image already loaded for this element");
      return this.loadedImages.get(element);
    }

    console.log(`Loading image from ${url}`);
    const img = new Image();
    img.src = url;
    this.loadedImages.set(element, img);
    return img;
  }

  hasImage(element) {
    return this.loadedImages.has(element);
  }
}

// USE CASE 6: Observer pattern without memory leaks
const observers = new WeakMap();

class EventEmitter {
  constructor() {
    // Observers stored per object
  }

  on(target, event, callback) {
    if (!observers.has(target)) {
      observers.set(target, new Map());
    }

    const targetObservers = observers.get(target);
    if (!targetObservers.has(event)) {
      targetObservers.set(event, new Set());
    }

    targetObservers.get(event).add(callback);
  }

  off(target, event, callback) {
    if (!observers.has(target)) return;

    const targetObservers = observers.get(target);
    if (targetObservers.has(event)) {
      targetObservers.get(event).delete(callback);
    }
  }

  emit(target, event, data) {
    if (!observers.has(target)) return;

    const targetObservers = observers.get(target);
    if (targetObservers.has(event)) {
      targetObservers.get(event).forEach((callback) => callback(data));
    }
  }
}

const emitter = new EventEmitter();
let widget = { id: "widget1" };

emitter.on(widget, "click", () => console.log("Widget clicked"));
emitter.emit(widget, "click"); // 'Widget clicked'

widget = null; // Remove reference
// Observers for widget are automatically cleaned up

// USE CASE 7: Computed property cache
const computedCache = new WeakMap();

class DataProcessor {
  process(data) {
    if (computedCache.has(data)) {
      console.log("Returning cached result");
      return computedCache.get(data);
    }

    console.log("Computing fresh result");
    const result = {
      processed: true,
      timestamp: Date.now(),
      value: data.raw * 2,
    };

    computedCache.set(data, result);
    return result;
  }
}

const processor = new DataProcessor();
let dataItem = { raw: 42 };
console.log(processor.process(dataItem)); // Computing fresh result
console.log(processor.process(dataItem)); // Returning cached result

dataItem = null;
// Cache entry can be GC'd

// USE CASE 8: Private symbols (alternative to WeakMap)
// Note: Symbols don't provide true privacy (reflection can access)
const _name = Symbol("name");
const _age = Symbol("age");

class SymbolPerson {
  constructor(name, age) {
    this[_name] = name;
    this[_age] = age;
  }

  getName() {
    return this[_name];
  }
}

// WeakMap is better because:
// 1. Symbols can be accessed via Object.getOwnPropertySymbols()
// 2. WeakMap provides stronger privacy guarantees

// USE CASE 9: Dependency injection container
const dependencyCache = new WeakMap();

class DIContainer {
  register(target, dependencies) {
    dependencyCache.set(target, dependencies);
  }

  resolve(target) {
    const deps = dependencyCache.get(target);
    if (!deps) {
      throw new Error("No dependencies registered");
    }

    const resolvedDeps = {};
    for (const [key, value] of Object.entries(deps)) {
      resolvedDeps[key] = typeof value === "function" ? value() : value;
    }

    return resolvedDeps;
  }
}

const di = new DIContainer();
let service = { name: "UserService" };
di.register(service, { db: () => ({ query: () => {} }), logger: { log: () => {} } });

const deps = di.resolve(service);
console.log(deps);

service = null;
// Dependencies can be GC'd
```
