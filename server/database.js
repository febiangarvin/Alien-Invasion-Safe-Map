const Pool = require("pg").Pool;

// // ----- POOL Connection to PostgreSQL ----- // //
/*
- Koneksi dengan: FGA
*/
const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "cews"
});

module.exports = pool;