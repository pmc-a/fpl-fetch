# fpl-fetch &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pmc-a/fpl-fetch/blob/main/LICENSE.md) &middot; ![Run Unit Tests](https://github.com/pmc-a/fpl-fetch/actions/workflows/tests.yml/badge.svg) 

Wrapper for the Fantasy Premier League API written in TypeScript.

## Installation

```bash
npm install fpl-fetch
```

## Basic Usage

```typescript
import FplFetch from 'fpl-fetch';

const client = new FplFetch();
const player = client.getPlayer(328);
```
