# fpl-fetch

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
