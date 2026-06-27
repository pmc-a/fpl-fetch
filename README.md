# fpl-fetch &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pmc-a/fpl-fetch/blob/main/LICENSE.md) &middot; ![Run Unit Tests](https://github.com/pmc-a/fpl-fetch/actions/workflows/tests.yml/badge.svg) &middot; [![npm version](https://img.shields.io/npm/v/fpl-fetch)](https://www.npmjs.com/package/fpl-fetch) &middot; [![Downloads](https://img.shields.io/npm/dm/fpl-fetch)](https://www.npmjs.com/package/fpl-fetch) &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/pmc-a/fpl-fetch/pulls)

A modern, type-safe TypeScript wrapper for the [Fantasy Premier League](https://fantasy.premierleague.com) (FPL) API.

## Features

- 🏆 Simple API: Fetch players, teams, fixtures, and more with minimal code.
- ⚡ TypeScript Support: Fully typed for a great developer experience.
- 🔄 Async/Await: Modern asynchronous API.
- 🛡️ Robust Error Handling: Clear and consistent error messages.
- 📦 Lightweight: No unnecessary dependencies.

## Installation

```bash
npm install fpl-fetch
```

## Basic Usage

```typescript
import FplFetch from "fpl-fetch";

const client = new FplFetch();

async function main() {
  const player = await client.getPlayer(328);
  console.log(player);
}

main().catch(console.error);
```
