import config from './config.js';

export default {
  migrationPattern: './db/migrations/*',
  driver: 'pg',
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD
};
