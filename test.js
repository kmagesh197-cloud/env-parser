const { parseEnv } = require('./index');

const input = `
# Database config
DB_HOST=localhost
DB_PORT=5432
export DB_NAME=mydb
export API_KEY=secret123
`;

const result = parseEnv(input);
console.log(result);
console.assert(result.DB_HOST === 'localhost');
console.assert(result.DB_PORT === '5432');
console.assert(result.DB_NAME === 'mydb');
console.assert(result.API_KEY === 'secret123');
console.log('All tests passed');
