const { parseEnv } = require('./index');

const input = `
# Database config
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
`;

const result = parseEnv(input);
console.log(result);
console.assert(result.DB_HOST === 'localhost');
console.assert(result.DB_PORT === '5432');
console.log('All tests passed');
