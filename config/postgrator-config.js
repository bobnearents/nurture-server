import config from './config.js';

let connection = {
  migrationPattern: './db/migrations/*',
  driver: 'pg',
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD
};
if (config.NODE_ENV === 'production') {
  connection = {
    migrationPattern: './db/migrations/*',
    driver: 'pg',
    connectionString: config.DATABASE_URL
  };
  console.log(connection);
}

export default connection;
