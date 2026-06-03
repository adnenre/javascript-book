---
title: Controlling Asynchronous Flows
sidebar:
  order: 3
  label: 16.5.3 Controlling Asynchronous Flows
---

Generators can be used to control asynchronous operations, making async code look synchronous. While `async/await` is now the standard, generators were the precursor and are still useful for certain patterns like retry logic, rate limiting, and advanced flow control.

### Why Use Generators for Async?

- **Synchronous-looking code** for async operations
- **Pause/resume** capabilities for complex workflows
- **Custom control flow** not possible with async/await alone
- **Composable async operations** with custom runners

### The Runner Pattern

A runner function executes a generator that yields promises, handling the async flow:

```javascript
function run(generator) {
  const iterator = generator();

  function handle(result) {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(
      (res) => handle(iterator.next(res)),
      (err) => handle(iterator.throw(err)),
    );
  }

  return handle(iterator.next());
}
```

### Key Points

- Generators preceded async/await and inspired its design.
- They offer more flexibility for custom async patterns.
- Use `yield` with promises to pause for async results.
- Perfect for retries, polling, rate limiting, and coordination.

### Example Code

```javascript
// 1. Basic async flow control with promises
function* asyncWorkflow() {
  console.log("Step 1: Fetching user...");
  const user = yield fetchUser();
  console.log("User fetched:", user);

  console.log("Step 2: Fetching posts...");
  const posts = yield fetchPosts(user.id);
  console.log("Posts fetched:", posts);

  console.log("Step 3: Fetching comments...");
  const comments = yield fetchComments(posts[0].id);
  console.log("Comments fetched:", comments);

  return { user, posts, comments };
}

// Simulated async functions
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 101, title: "Post 1" }]), 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ text: "Great post!" }]), 1000);
  });
}

// Runner function
function run(generator) {
  const iterator = generator();

  function handle(result) {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(
      (res) => handle(iterator.next(res)),
      (err) => handle(iterator.throw(err)),
    );
  }

  return handle(iterator.next());
}

// Execute
run(asyncWorkflow).then((result) => {
  console.log("All steps completed:", result);
});

// 2. Retry logic with exponential backoff
function* retryOperation(maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}...`);
      const result = yield fetchWithPossibleFailure();
      console.log(`Success on attempt ${attempt}!`);
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delayMs = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Waiting ${delayMs}ms before retry...`);
        yield delay(delayMs);
      }
    }
  }

  throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
}

function fetchWithPossibleFailure() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.6; // 60% chance to fail
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network error"));
      } else {
        resolve({ data: "Success!" });
      }
    }, 500);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

run(retryOperation).then(console.log).catch(console.error);

// 3. Rate limiting API requests
function* rateLimitedRequests(requests, delayMs) {
  const results = [];

  for (const request of requests) {
    console.log(`Making request: ${request.url}`);
    const result = yield makeApiCall(request);
    console.log(`Response received for: ${request.url}`);
    results.push(result);

    if (delayMs > 0) {
      console.log(`Rate limiting: waiting ${delayMs}ms...`);
      yield delay(delayMs);
    }
  }

  return results;
}

function makeApiCall(request) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: request.url,
        status: 200,
        data: `Response for ${request.url}`,
        timestamp: Date.now(),
      });
    }, 300);
  });
}

const apiRequests = [
  { url: "/api/users", method: "GET" },
  { url: "/api/posts", method: "GET" },
  { url: "/api/comments", method: "GET" },
  { url: "/api/likes", method: "GET" },
  { url: "/api/shares", method: "GET" },
];

run(rateLimitedRequests(apiRequests, 1000)).then((results) => {
  console.log("All requests completed with rate limiting");
  console.log("Results:", results);
});

// 4. Concurrent operations with limited parallelism
function* concurrentRequests(urls, maxConcurrent = 3) {
  const results = [];
  const executing = [];

  for (const url of urls) {
    const promise = fetchUrl(url).then((result) => {
      // Remove from executing array when done
      const index = executing.indexOf(promise);
      if (index !== -1) executing.splice(index, 1);
      return result;
    });

    results.push(promise);
    executing.push(promise);

    console.log(`Started request for ${url} (${executing.length} concurrent)`);

    if (executing.length >= maxConcurrent) {
      console.log(`Reached max concurrent (${maxConcurrent}), waiting...`);
      yield Promise.race(executing);
    }
  }

  // Wait for all remaining requests to complete
  console.log("Waiting for remaining requests...");
  yield Promise.all(executing);

  return Promise.all(results);
}

function fetchUrl(url) {
  return new Promise((resolve) => {
    const delayTime = Math.random() * 1500 + 500;
    setTimeout(() => {
      resolve({ url, data: `Data from ${url}`, delay: delayTime });
    }, delayTime);
  });
}

const urls = ["/api/1", "/api/2", "/api/3", "/api/4", "/api/5", "/api/6", "/api/7", "/api/8", "/api/9", "/api/10"];

run(concurrentRequests(urls, 3)).then((results) => {
  console.log("All concurrent requests completed");
  console.log(`Total results: ${results.length}`);
});

// 5. Polling with timeout and cancellation
function* poll(endpoint, intervalMs, maxAttempts = 10) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    console.log(`Polling attempt ${attempt}/${maxAttempts}...`);

    try {
      const result = yield fetch(endpoint).then((res) => res.json());

      if (result.status === "complete") {
        console.log("Process completed successfully!");
        return result.data;
      }

      console.log(`Status: ${result.status}, waiting ${intervalMs}ms...`);
      yield delay(intervalMs);
    } catch (error) {
      console.error(`Polling error on attempt ${attempt}:`, error.message);
      if (attempt === maxAttempts) throw error;
      yield delay(intervalMs);
    }
  }

  throw new Error(`Polling timeout after ${maxAttempts} attempts`);
}

// Simulated polling endpoint
function createPollableProcess(completionAttempt = 5) {
  let attempts = 0;
  return () => {
    attempts++;
    const isComplete = attempts >= completionAttempt;
    return Promise.resolve({
      status: isComplete ? "complete" : "processing",
      data: isComplete ? { id: 123, result: "Success", attemptsNeeded: attempts } : null,
      attempt: attempts,
    });
  };
}

// Mock fetch for polling example
const mockFetch = (endpoint) => {
  const getStatus = createPollableProcess(4);
  return Promise.resolve({
    json: getStatus,
  });
};

global.fetch = mockFetch;

run(poll("/status", 1000, 6))
  .then((result) => console.log("Polling result:", result))
  .catch((error) => console.error("Polling failed:", error.message));

// 6. Async task queue with priorities
function* taskQueue(tasks, concurrency = 2) {
  const results = [];
  const queue = [...tasks];
  const running = [];

  while (queue.length > 0 || running.length > 0) {
    // Start new tasks up to concurrency limit
    while (running.length < concurrency && queue.length > 0) {
      const task = queue.shift();
      console.log(`Starting task: ${task.name} (priority: ${task.priority})`);
      const promise = task.execute().then((result) => {
        const index = running.indexOf(promise);
        if (index !== -1) running.splice(index, 1);
        return { taskName: task.name, result };
      });
      running.push(promise);
      results.push(promise);
    }

    // Wait for any task to complete
    if (running.length > 0) {
      yield Promise.race(running);
    }
  }

  return Promise.all(results);
}

// Example tasks
const tasks = [
  {
    name: "High priority task 1",
    priority: 1,
    execute: () => delay(1000).then(() => `Result of high priority 1`),
  },
  {
    name: "Low priority task 1",
    priority: 3,
    execute: () => delay(2000).then(() => `Result of low priority 1`),
  },
  {
    name: "High priority task 2",
    priority: 1,
    execute: () => delay(1500).then(() => `Result of high priority 2`),
  },
  {
    name: "Medium priority task",
    priority: 2,
    execute: () => delay(1000).then(() => `Result of medium priority`),
  },
  {
    name: "Low priority task 2",
    priority: 3,
    execute: () => delay(2500).then(() => `Result of low priority 2`),
  },
];

run(taskQueue(tasks, 2)).then((results) => {
  console.log("All tasks completed");
  results.forEach((r) => console.log(r));
});

// 7. Async validation pipeline
function* validateUser(userData) {
  console.log("Starting validation pipeline...");

  // Step 1: Validate email format
  console.log("Checking email format...");
  const emailValid = yield validateEmail(userData.email);
  if (!emailValid) throw new Error("Invalid email format");
  console.log("✓ Email valid");

  // Step 2: Check if email exists
  console.log("Checking if email exists...");
  const emailAvailable = yield checkEmailExists(userData.email);
  if (!emailAvailable) throw new Error("Email already registered");
  console.log("✓ Email available");

  // Step 3: Validate password strength
  console.log("Checking password strength...");
  const passwordStrong = yield validatePassword(userData.password);
  if (!passwordStrong) throw new Error("Password too weak");
  console.log("✓ Password strong");

  // Step 4: Verify age
  console.log("Verifying age...");
  const ageValid = yield verifyAge(userData.age);
  if (!ageValid) throw new Error("Must be 18 or older");
  console.log("✓ Age verified");

  return { validated: true, user: userData };
}

function validateEmail(email) {
  return Promise.resolve(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}

function checkEmailExists(email) {
  // Simulate API check
  const existingEmails = ["test@example.com", "admin@example.com"];
  return Promise.resolve(!existingEmails.includes(email));
}

function validatePassword(password) {
  const isValid = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  return Promise.resolve(isValid);
}

function verifyAge(age) {
  return Promise.resolve(age >= 18);
}

run(validateUser({ email: "user@example.com", password: "StrongPass123", age: 25 }))
  .then((result) => console.log("Validation passed:", result))
  .catch((error) => console.error("Validation failed:", error.message));
```
