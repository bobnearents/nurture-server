import migrateProvidersFromSheets from '../../src/sheets/sheets-service.js';
console.log('getting data from google sheets, and then inserting into db...');
console.log(await migrateProvidersFromSheets());
