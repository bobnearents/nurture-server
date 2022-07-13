import pg from 'pg';
const { Pool } = pg;
import config from './config.js';

export default new Pool({
  host: config.DB_HOST,
  user: config.DB_USERNAME,
  port: config.DB_PORT,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
});
