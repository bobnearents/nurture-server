import { createProvidersFromSheets } from '../../src/provider/provider-service.js';
console.log('getting data from google sheets, and then inserting into db...');
createProvidersFromSheets();
