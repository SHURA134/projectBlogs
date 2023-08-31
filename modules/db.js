const {Client} = require('pg');
const config={
    user: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5433,
    db: process.env.POSTGRES_DB
}

const client = new Client(config);

client.connect();

module.exports={client};