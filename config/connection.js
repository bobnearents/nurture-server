import pg from 'pg';
const { Pool } = pg;
import config from './config.js';

let connection = new Pool({
  host: config.DB_URL,
  user: config.DB_USERNAME,
  port: config.DB_PORT,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
});
if (config.NODE_ENV === 'production') {
  connection = new Pool({ connectionString: config.DATABASE_URL });
}

export default connection;
