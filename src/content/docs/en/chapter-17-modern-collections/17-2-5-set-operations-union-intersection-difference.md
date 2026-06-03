---
title: Set Operations (union, intersection, difference)
sidebar:
  order: 11
  label: 17.2.5 Set Operations
---

While JavaScript Sets don't have built-in methods for mathematical set operations, you can easily implement them using the available methods. These operations are powerful for data manipulation and analysis.

### Standard Set Operations

| Operation                | Description                         | Mathematical Notation |
| ------------------------ | ----------------------------------- | --------------------- |
| **Union**                | All elements from both sets         | A ∪ B                 |
| **Intersection**         | Elements in both sets               | A ∩ B                 |
| **Difference**           | Elements in A but not in B          | A \ B                 |
| **Symmetric Difference** | Elements in either set but not both | A ∆ B                 |
| **Subset**               | All elements of A are in B          | A ⊆ B                 |
| **Superset**             | All elements of B are in A          | A ⊇ B                 |

### Implementation Patterns

All operations can be implemented using:

- Set constructors with spread syntax
- `filter()` with `has()` checks
- Loops for better performance with large Sets

### Performance Considerations

- Converting to arrays and back is convenient but creates intermediate copies.
- For large Sets, use iteration to avoid extra memory usage.
- `has()` is O(1), making these operations efficient.

### Key Points

- Set operations are O(n) where n is the size of the smaller set (when implemented efficiently).
- These operations work with any value types.
- Original Sets are never modified (pure functions).
- Results are always new Sets.

### Example Code

```javascript
// Sample Sets for demonstration
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

// 1. UNION (A ∪ B) - all elements from both sets
function union(set1, set2) {
  return new Set([...set1, ...set2]);
}

console.log("Union:", union(setA, setB));
// Set {1, 2, 3, 4, 5, 6, 7, 8}

// Alternative union implementation using iteration
function unionIterative(set1, set2) {
  const result = new Set(set1);
  for (const item of set2) {
    result.add(item);
  }
  return result;
}

console.log("Union (iterative):", unionIterative(setA, setB));

// 2. INTERSECTION (A ∩ B) - elements in both sets
function intersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}

console.log("Intersection:", intersection(setA, setB));
// Set {4, 5}

// Optimized intersection (iterates over smaller set)
function intersectionOptimized(set1, set2) {
  const [smaller, larger] = set1.size <= set2.size ? [set1, set2] : [set2, set1];
  const result = new Set();
  for (const item of smaller) {
    if (larger.has(item)) {
      result.add(item);
    }
  }
  return result;
}

console.log("Intersection (optimized):", intersectionOptimized(setA, setB));

// 3. DIFFERENCE (A \ B) - elements in A but not in B
function difference(set1, set2) {
  return new Set([...set1].filter((item) => !set2.has(item)));
}

console.log("Difference (A \\ B):", difference(setA, setB));
// Set {1, 2, 3}

console.log("Difference (B \\ A):", difference(setB, setA));
// Set {6, 7, 8}

// 4. SYMMETRIC DIFFERENCE (A ∆ B) - elements in either but not both
function symmetricDifference(set1, set2) {
  const diff1 = difference(set1, set2);
  const diff2 = difference(set2, set1);
  return union(diff1, diff2);
}

console.log("Symmetric Difference:", symmetricDifference(setA, setB));
// Set {1, 2, 3, 6, 7, 8}

// Alternative symmetric difference (one pass)
function symmetricDifferenceOptimized(set1, set2) {
  const result = new Set();
  for (const item of set1) {
    if (!set2.has(item)) result.add(item);
  }
  for (const item of set2) {
    if (!set1.has(item)) result.add(item);
  }
  return result;
}

// 5. SUBSET (A ⊆ B) - all elements of A are in B
function isSubset(set1, set2) {
  if (set1.size > set2.size) return false;
  for (const item of set1) {
    if (!set2.has(item)) return false;
  }
  return true;
}

console.log("Is {1,2} subset of {1,2,3}?", isSubset(new Set([1, 2]), new Set([1, 2, 3]))); // true
console.log("Is {1,2,3} subset of {1,2}?", isSubset(new Set([1, 2, 3]), new Set([1, 2]))); // false

// 6. SUPERSET (A ⊇ B) - all elements of B are in A
function isSuperset(set1, set2) {
  return isSubset(set2, set1);
}

console.log("Is {1,2,3} superset of {1,2}?", isSuperset(new Set([1, 2, 3]), new Set([1, 2]))); // true

// 7. DISJOINT - no common elements
function areDisjoint(set1, set2) {
  for (const item of set1) {
    if (set2.has(item)) return false;
  }
  return true;
}

console.log("Are {1,2} and {3,4} disjoint?", areDisjoint(new Set([1, 2]), new Set([3, 4]))); // true
console.log("Are {1,2} and {2,3} disjoint?", areDisjoint(new Set([1, 2]), new Set([2, 3]))); // false

// Practical examples

// Example 1: User permissions
const adminPermissions = new Set(["read", "write", "delete", "manage_users"]);
const editorPermissions = new Set(["read", "write", "edit_content"]);
const viewerPermissions = new Set(["read"]);

function getCombinedPermissions(...permissionSets) {
  return permissionSets.reduce((combined, current) => union(combined, current), new Set());
}

console.log("Admin+Editor:", getCombinedPermissions(adminPermissions, editorPermissions));

// Example 2: Finding common interests
const user1Interests = new Set(["coding", "music", "gaming", "reading"]);
const user2Interests = new Set(["gaming", "travel", "photography", "music"]);
const commonInterests = intersection(user1Interests, user2Interests);
console.log("Common interests:", commonInterests); // Set {'music', 'gaming'}

// Example 3: Exclusive interests (what makes each user unique)
const user1Unique = difference(user1Interests, user2Interests);
const user2Unique = difference(user2Interests, user1Interests);
console.log("User1 unique:", user1Unique); // Set {'coding', 'reading'}
console.log("User2 unique:", user2Unique); // Set {'travel', 'photography'}

// Example 4: Set operations with objects
const activeUsers = new Set([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]);

const premiumUsers = new Set([
  { id: 2, name: "Bob" },
  { id: 4, name: "Diana" },
]);

// Note: Object references matter!
// These objects are different references, so operations won't work as expected
// Solution: Use IDs as keys

const activeIds = new Set([1, 2, 3]);
const premiumIds = new Set([2, 4]);

const allUserIds = union(activeIds, premiumIds);
const premiumActiveIds = intersection(activeIds, premiumIds);
const freeOnlyIds = difference(activeIds, premiumIds);

console.log("All users:", [...allUserIds]); // [1, 2, 3, 4]
console.log("Premium active:", [...premiumActiveIds]); // [2]
console.log("Free only:", [...freeOnlyIds]); // [1, 3]

// Example 5: Tag filtering system
class TagFilter {
  constructor(allTags) {
    this.allTags = new Set(allTags);
  }

  mustHave(requiredTags) {
    this.current = this.current ? intersection(this.current, new Set(requiredTags)) : new Set(requiredTags);
    return this;
  }

  canHave(optionalTags) {
    if (!this.current) {
      this.current = new Set(optionalTags);
    } else {
      this.current = intersection(this.current, new Set(optionalTags));
    }
    return this;
  }

  exclude(forbiddenTags) {
    this.current = difference(this.current, new Set(forbiddenTags));
    return this;
  }

  getResults() {
    return this.current || new Set();
  }
}

const tags = new TagFilter(["js", "react", "node", "python", "django", "vue"]);
const results = tags.mustHave(["js"]).canHave(["react", "vue", "node"]).exclude(["vue"]).getResults();

console.log("Filtered tags:", [...results]); // ['js', 'react', 'node']

// Example 6: Finding missing elements
const required = new Set(["email", "password", "username", "age"]);
const provided = new Set(["email", "password", "username"]);

const missing = difference(required, provided);
console.log("Missing fields:", [...missing]); // ['age']

// Example 7: Data validation with Set operations
class DataValidator {
  constructor(allowedValues) {
    this.allowed = new Set(allowedValues);
  }

  validate(input) {
    const inputSet = new Set(input);
    const invalid = difference(inputSet, this.allowed);
    const missing = difference(this.allowed, inputSet);

    return {
      valid: invalid.size === 0 && missing.size === 0,
      invalid: [...invalid],
      missing: [...missing],
    };
  }
}

const colorValidator = new DataValidator(["red", "green", "blue"]);
console.log(colorValidator.validate(["red", "green"]));
// { valid: false, invalid: [], missing: ['blue'] }

console.log(colorValidator.validate(["red", "green", "blue", "yellow"]));
// { valid: false, invalid: ['yellow'], missing: [] }
```
