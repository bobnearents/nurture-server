import { writeFileSync } from 'fs';
import { generateSqlFilesFromList } from './generate-sql.js';
import { findTableByName, getAllTables } from './helpers.js';

const migrationOutputDirectory = './db/migrations';

const createMigrationFile = (tableName, index) => {
  //this will get table name. look up table name in json file and attach the columns or make a junction table migration file for it.
  const table = findTableByName(tableName);
  let migrationScript;
  if (!table) {
    const junctionTable = tableName;
    const columns = `\nid SERIAL PRIMARY KEY NOT NULL,\n${junctionTable.primaryTableName}_description TEXT,\n${junctionTable.primaryTableName}_id INTEGER REFERENCES ${junctionTable.primaryTableName}(id) ON DELETE CASCADE,\n${junctionTable.optionTableName}_id INTEGER REFERENCES ${junctionTable.optionTableName}(id) ON DELETE CASCADE`;

    migrationScript = `CREATE TABLE ${junctionTable.name} (${columns})`;
    tableName = junctionTable.name;
  } else {
    const columns = table.columns
      .map((column) => `${column.name} ${column.dataTypes}`)
      .join(',\n  ');

    migrationScript = `CREATE TABLE ${tableName} (${columns}\n);`;
  }

  const fileName = (action) =>
    `${migrationOutputDirectory}/00${
      index + 1
    }.${action}.create_${tableName}.sql`;
  const doCreate = fileName('do');
  const undoCreate = fileName('undo');

  writeFileSync(doCreate, migrationScript);
  console.log(`Migration file ${doCreate} created successfully.`);
  writeFileSync(undoCreate, `DROP TABLE IF EXISTS ${tableName}`);
  console.log(`Migration file ${undoCreate} created successfully.`);
};

const generateMigrations = () =>
  generateSqlFilesFromList(
    migrationOutputDirectory,
    getAllTables(),
    createMigrationFile
  );

console.log('creating migration files...');
generateMigrations();
console.log('migration files created');
