# Architecture Overview

This codebase now follows a lightweight domain-driven layout that keeps pages thin and focuses on SOLID-friendly modules.

## Layered Structure
- **core/** – shared infrastructure (env parsing, PocketBase client factories). Nothing outside `core` should instantiate third-party SDKs directly.
- **domains/** – independent feature slices (e.g., `gigs`, `music`). Each slice exposes types, repositories, and services so UI layers depend on stable contracts instead of raw SDK calls.
- **state/** – reusable Svelte stores with factories for overrides in tests or stories.
- **routes/** – SvelteKit pages. Components receive fully prepared view models through `load` functions and never talk to PocketBase.

## Data Flow
1. A `load` function requests data through a domain service (e.g., `createGigService().getUpcomingGig()`).
2. Services coordinate repositories and encapsulate derived fields or filtering logic (SRP + OCP).
3. Repositories wrap the PocketBase client and are injected, allowing fakes to be swapped in tests (LSP + DIP).
4. Components simply consume the `data` prop, so UI logic stays declarative.

```text
routes -> services -> repositories -> core PocketBase client
```

## Testing Hooks
- Services expose pure async functions that accept optional “now” dates or repository overrides, making it simple to unit test scheduling logic.
- Repositories accept a PocketBase-like interface; create lightweight stubs or mock adapters for integration tests.

## Extending the System
1. Create a new folder in `src/lib/domains/<feature>` with `*.types.ts`, `*.repository.ts`, and `*.service.ts`.
2. Export a `create<Feature>Service()` factory that wires repositories with `createPocketBaseClient()`.
3. Reference the service inside a `+page.ts` or `+page.server.ts`, and surface the result via `load`.
4. If the feature requires shared stores, add them to `src/lib/state` and re-export from `src/lib/stores.ts`.

By channeling all data access through domain services and keeping UI components dependency-free, the refactor restores maintainability while leaving room for future extensions such as caching layers or SSR-only adapters.
