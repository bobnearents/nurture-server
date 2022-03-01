require('dotenv').config();
const express = require('express');
const fs = require('fs');
const readline = require('readline');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const {google} = require('googleapis');

const trimDataTable = (response) => {
    const headers = {
        main: response.data.values[1],
        fallback: response.data.values[0]
    }
    //"slice" off the headers from the providers array and then begin to loop through each provider
    const providersArray = response.data.values.slice(2)
    const providers = providersArray.map((provider) => {
        //since the database is just a spreadsheet, this is my attempt at keeping data organized,
        //eventually these sub objects will likely be names of relational data tables
        let newProvider = {
            contact: {},
            services: {},
            certs: {},
            formData: {},
            metaData: {},
            visibility: true
        }; 
        headers.main.forEach((header, i) => {
            headerName = header || headers.fallback[i];
            if (i<9)
                newProvider.formData[headerName] = provider[i];
            else if (i<14)
                newProvider.services[headerName] = provider[i];
            else if (i<26)
                newProvider.contact[headerName] = provider[i]; 
            else if (i<47)
                newProvider.certs[headerName] = provider[i];
            else if ((i==47) || (i==49))
                newProvider.visibility = !newProvider.visibility || !!provider[i] //if visibility is already false, keep it that way
            else
                newProvider.metaData[headerName] = provider[i];
        });
        return newProvider
    })

    return providers
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
*/
function authorize(res, callback) {
    const {client_secret, client_id, redirect_uris} = process.env;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, 
        client_secret, 
        redirect_uris
    );
  
    // Check if we have previously stored a token.
    fs.readFile(process.env.TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client, res);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets'] //if this gets changed, we need to delete token.json
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(process.env.TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', process.env.TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getProviders(auth, response) {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.SPREADSHEET_RANGE,
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const data = trimDataTable(res);
        console.log(data);
        response.send(data)
    });
}

app.get('/providers', (req, res) => {
    // Load client secrets from a local file.
    authorize(res, getProviders);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(process.env.PORT, () => {
    console.log(`listening at port: ${process.env.PORT}`)
})