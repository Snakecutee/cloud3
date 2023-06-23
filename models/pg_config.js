const  Pool = require('pg').Pool;
const pg_conn = new Pool({
  user: 'ydvdbroqyfgkmy',
  host: 'ec2-34-235-198-25.compute-1.amazonaws.com',
  database: 'dcr7ge3tlu1oj7',
  password: 'e34d6241d1ce51754e3d91af168fe11ebcfe80661f6e41a7e6e0d0ea3350a32e',
  port: 5432,
  ssl:{
    rejectUnauthorized: false
  },
});
module.exports = pg_conn;   