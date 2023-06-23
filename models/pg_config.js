const Pool = require('pg').Pool;
const pg_conn = new Pool({
  user: 'pnxyebhooczcpp', //day ne, thay roide yen
  host: 'ec2-107-21-67-46.compute-1.amazonaws.com',
  database: 'dt3tjk16gkvnu',
  password: 'b420f3b5edd71800946244c820cdd5d57ad735dc126be8b20db38831404c075d',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  },
});
module.exports = pg_conn;   