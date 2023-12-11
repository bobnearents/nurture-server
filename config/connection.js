import pg from 'pg';
const { Pool } = pg;
import config from './config.js';

const connection = {
  connectionString: config.DATABASE_URL
};

export default new Pool(connection);
