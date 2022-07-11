import { Client } from 'pg';
import config from './config';

export default new Client({
  host: config.DB_HOST,
  user: config.DB_USERNAME,
  port: config.DB_PORT,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
});
