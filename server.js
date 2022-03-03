require('dotenv').config();
const express = require('express');
const {google} = require('googleapis');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.get('/providers', async (req, res) => {
    const jwtClient = new google.auth.JWT(
        process.env.CLIENT_EMAIL, 
        null, 
        process.env.PRIVATE_KEY, 
        ["https://www.googleapis.com/auth/spreadsheets"]
    );
    const sheets = google.sheets({ version: "v4", "auth": jwtClient });
    const sheetsResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: process.env.SPREADSHEET_RANGE
        });
    const data = trimDataTable(sheetsResponse);
    res.send(data)
})

app.get('/', (req, res) => {
    console.log(process.env.PRIVATE_KEY)
    res.send('Hello world')
})

app.listen(process.env.PORT, () => {
    console.log(`listening at port: ${process.env.PORT}`)
})