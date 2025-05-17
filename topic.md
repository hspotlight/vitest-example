✅ Basic Setup
Installing Jest/Vitest

Configuring package.json / vitest.config.ts

Basic test structure (.test.js, describe, it/test, expect)

Running tests via CLI

🔍 Core Testing Concepts
Testing pure functions (e.g. math, string manipulation)

Using beforeEach, afterEach, beforeAll, afterAll

Using matchers (toBe, toEqual, toContain, toThrow, etc.)

Parameterized tests (test.each)

🧪 Mocking and Spying
Manual mocking (e.g. jest.fn() or vi.fn())

Mocking modules

Spying on function calls

Mocking timers (e.g. jest.useFakeTimers() / vi.useFakeTimers())

🧱 Testing Components (if React/Vue involved)
React/Vue component testing with Testing Library

Simulating events (clicks, input)

Testing async UI updates

Mocking API calls (e.g. fetch, axios)

🔄 Async Testing
Testing Promises (resolves, rejects)

Async/await with expect

Retry logic / polling

🧰 Advanced Techniques
Snapshot testing

Code coverage reports

Custom matchers

Testing custom hooks (React) or composables (Vue)

Integration tests vs Unit tests

🧪 Test Environment
Using jsdom vs node

Handling global setup and teardown

Parallel / isolated tests

🛠️ Tooling & DX
VSCode extensions & debugging tests

Pre-commit hooks for test enforcement

CI Integration: Running tests in GitHub Actions

🧩 Bonus Topics
Vitest vs Jest: feature and performance comparison

Migrating from Jest to Vitest

Running tests with watch mode

Common testing pitfalls and anti-patterns