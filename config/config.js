import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ZIP_KEY: process.env.ZIP_KEY,
  //variables to interact with db
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  //variabls to interact with google spreadsheets
  CLIENT_EMAIL: process.env.CLIENT_EMAIL,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  SPREADSHEET_RANGE: process.env.SPREADSHEET_RANGE
};
