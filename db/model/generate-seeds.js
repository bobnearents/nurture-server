import { writeFileSync } from 'fs';
import { generateSqlFilesFromList } from './generate-sql.js';
import { getAllSeedTables } from './helpers.js';

const seedOutputDirectory = './db/seeds';

const createSeedFile = (table) => {
  const seedValues = table.seedNames;
  const seedSqlList = seedValues.map((value, i) => `('${value}')`);
  const seedScript = `INSERT INTO ${table.dbName}(name)\nVALUES\n${seedSqlList}`;

  writeFileSync(`${seedOutputDirectory}/seed.${table.dbName}.sql`, seedScript);
  console.log(`Seed file for ${table.dbName} created successfully.`);
};

const generateSeeds = () =>
  generateSqlFilesFromList(
    seedOutputDirectory,
    getAllSeedTables(),
    createSeedFile
  );

console.log('creating seed files...');
generateSeeds();
console.log('seed files created');
