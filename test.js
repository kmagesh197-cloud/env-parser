const { parseEnv } = require('./index');
const input = `
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
`;
const result = parseEnv(input);
console.log(result);
console.assert(result.DB_HOST === 'localhost');
console.assert(result.DB_PORT === '5432');
console.log('All tests passed');

const quoted = parseEnv(`
GREETING="hello world"
PATH_VAL='/usr/local/bin'
BARE=plain
`);
console.assert(quoted.GREETING === 'hello world');
console.assert(quoted.PATH_VAL === '/usr/local/bin');
console.assert(quoted.BARE === 'plain');
console.log('Quoted-value tests passed');
