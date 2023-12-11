import { existsSync, mkdirSync, rmSync } from 'fs';

const rmFiles = (outputDirectory) => {
  rmSync(outputDirectory, { force: true, recursive: true });
};

export const generateSqlFilesFromList = (
  outputDirectory,
  tableList,
  createFile
) => {
  if (existsSync(outputDirectory)) {
    rmFiles(outputDirectory);
  }
  mkdirSync(outputDirectory);
  tableList.forEach((table, i) => createFile(table, i));
};

/**
 * @param {{
 *      dbName: string;
 *      jsName: string;
 *      endpointName: string;
 *      relationships?: string[];
 *      columns: {name: string; sqlOptions:string;}[];
 * }} tableRow
 */
