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
        user: config.DB_USERNAME,
        port: config.DB_PORT,
        password: config.DB_PASSWORD,
        database: config.DB_NAME
      };

export default new Pool(connection);
