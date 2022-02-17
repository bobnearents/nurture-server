const express = require('express');
const app = express();
const port = 5000;
const keys = require('./keys.json');
const {google} = require('googleapis');


const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
)

client.authorize((err, tokens) => {
    try {
        sheetsConnect(client);
        console.log('connected!')
    } catch (err) {
        console.log(err);
    }
});

async function sheetsConnect(auth) {
    const sheets = google.sheets({
        version:'v4',
        auth
    });

    const opts = {
        spreadsheetId: '1HTRaqhYCO8LmY7K9bKXqBS5bvr_e1MnJzTtAJVdf1AE',
        range:'Sheet1'
    };

    const response = await sheets.spreadsheets.values.get(opts)
    const headers = {
        main: response.data.values[1],
        fallback: response.data.values[0]
    }
    //"slice" off the headers from the providers array and then begin to loop through each provider
    const providersArray = response.data.values.slice(2)
    const providers = providersArray.map((provider) => {
        let newProvider = {}; 
        headers.main.forEach((header, i) => {
            headerName = header || headers.fallback[i];
            newProvider[headerName] = provider[i];
        });
        return newProvider
    })

    console.log(providers[0])
}

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})