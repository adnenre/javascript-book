---
title: Date Object
sidebar:
  order: 5
  label: 13.5 Date Object
---

The `Date` object is used to work with dates and times. It stores a timestamp (milliseconds since Unix epoch). Methods allow getting, setting, and formatting date components.

However, the traditional `Date` object has many limitations: mutability, confusing month indexing (0‑11), poor time zone handling, and lack of a separate date-only type. **Temporal** is a new built‑in API (currently a TC39 proposal) that addresses these issues. It is expected to become the standard way to handle dates and times in JavaScript.

### Using `Date`

```javascript
const now = new Date();
console.log(now.getFullYear()); // current year
console.log(now.getMonth()); // 0‑11 (January = 0)
console.log(now.getDate()); // day of month

const specific = new Date(2025, 0, 15); // Jan 15, 2025
console.log(specific.toLocaleDateString("en-US")); // "1/15/2025"
console.log(specific.toISOString()); // "2025-01-15T00:00:00.000Z"

// Timestamp
const timestamp = Date.now();
console.log(timestamp); // milliseconds since epoch
```

### Using Temporal (Modern Alternative)

Temporal provides immutable objects, intuitive APIs, and proper time zone handling. It is not yet part of the standard but can be polyfilled. Key types:

- `Temporal.PlainDate` – date without time (year, month, day)
- `Temporal.PlainTime` – time without date
- `Temporal.PlainDateTime` – date and time without time zone
- `Temporal.ZonedDateTime` – date and time with a specific time zone

```javascript
// Example using Temporal (with polyfill)
// Note: This is not yet built into all environments; requires a polyfill.
const { Temporal } = require("@js-temporal/polyfill"); // hypothetical import

const date = Temporal.PlainDate.from("2025-03-27");
console.log(date.year); // 2025
console.log(date.month); // 3
console.log(date.day); // 27

const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString()); // e.g., "2025-03-27T14:30:00+01:00[Europe/Paris]"
```

For production use today, stick with `Date` or a library like `moment.js` or `date-fns`, but keep an eye on Temporal as it becomes available.
