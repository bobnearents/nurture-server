import pg from 'pg';
const { Pool } = pg;
import config from './config.js';

const connection = {
  user: config.DB_USERNAME,
  port: config.DB_PORT,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
};

export default new Pool(connection);
