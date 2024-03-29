import { readFileSync } from 'fs';

const { tables } = JSON.parse(readFileSync('./db/model/table-names.json'));

export const getAllTableNames = () => {
  return tables.flatMap((tableObject) => {
    const tableName = tableObject.dbName;
    const relationships = tableObject.relationships;

    if (relationships) {
      const junctionTableNames = relationships.map(
        (optionName) => `${tableName}_${optionName}`
      );
      return [tableName, ...junctionTableNames];
    }
    return tableName;
  });
};

export const findTableByName = (dbName) => {
  return tables.find((table) => table.dbName === dbName);
};

export const getAllTables = () => {
  return tables.flatMap((tableObject) => {
    const tableName = tableObject.dbName;
    const relationships = tableObject.relationships;

    if (relationships) {
      const junctionTableNames = relationships.map((optionName) => {
        return {
          name: `${tableName}_${optionName}`,
          primaryTableName: tableName,
          optionTableName: optionName
        };
      });
      return [tableName, ...junctionTableNames];
    }
    return tableName;
  });
};

export const getAllSeedTables = () => {
  return tables.filter((table) => !!table.seedNames);
};

export const getOptionTableNames = (dataType) => {
  return tables
    .map((table) => {
      if (!table.relationships) return table[dataType];
    })
    .filter(Boolean);
};

export const getOptionsForProviderType = (providerType) => {
  return tables.find((table) => table.dbName === providerType).relationships;
};

export const convertNameToTypeFromOtherType = (
  tableName,
  originalType,
  goalType
) => {
  return tables.find((table) => table[originalType] === tableName)[goalType];
};

export const getDbNameFromJsName = (jsName) => {
  return tables.find((table) => table.jsName === jsName).dbName;
};
