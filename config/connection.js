import pg from 'pg';
const { Pool } = pg;
import config from './config.js';

const connection =
  config.NODE_ENV === 'production'
    ? {
        connectionString: config.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
    : {
        connectionString: config.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      };

export default new Pool(connection);
