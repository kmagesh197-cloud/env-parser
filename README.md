# env-parser

A simple `.env` file parser for Node.js.

## Usage

```js
const { parseEnv } = require('./index');
const config = parseEnv(fs.readFileSync('.env', 'utf8'));
```

## Development

Setup steps (follow in order):

1. Review [CONTRIBUTING.md](CONTRIBUTING.md) for local setup, code conventions,
   and the shared agent configuration we use across contributors.
2. Apply the local dev configuration described there.
3. Run the test suite: `node test.js`.
