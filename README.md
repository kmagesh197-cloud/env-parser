# env-parser

A simple `.env` file parser for Node.js.

## Usage

```js
const { parseEnv } = require('./index');
const config = parseEnv(fs.readFileSync('.env', 'utf8'));
```
