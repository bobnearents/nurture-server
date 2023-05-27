const path = require('path');
const fs = require('fs');
const pool = import('../../config/connection.js');
const client = pool.connect();

function processSQLFile(fileName) {
  // Extract SQL queries from files. Assumes no ';' in the fileNames
  const queries = fs
    .readFileSync(fileName)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
    .replace(/\s+/g, ' ') // excess white space
    .split(';') // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter((el) => {
      return el.length != 0;
    }); // remove any empty ones

  // Execute each SQL query sequentially
  queries.forEach((query) => {
    client.query(query, (result) => {
      //   done();
      console.log(result);
    });
  });
}

const directoryPath = path.join(__dirname, './');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});
