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
console.log(config);
if (config.NODE_ENV === 'production') {
  connection = {
    migrationPattern: './db/migrations/*',
    driver: 'pg',
    connectionString: config.DATABASE_URL
  };
}

export default connection;
