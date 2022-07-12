import { google } from 'googleapis';

const jwtClient = new google.auth.JWT(
  config.CLIENT_EMAIL,
  null,
  config.PRIVATE_KEY.replace(/\\n/g, '\n'), //sanitize the key since heroku escapes out the \n to \\n https://stackoverflow.com/questions/39492587/escaping-issue-with-firebase-privatekey-as-a-heroku-config-variable
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheetsService = google.sheets({ version: 'v4', auth: jwtClient });

const trimDataTable = (response) => {
  const headers = {
    main: response.data.values[1],
    fallback: response.data.values[0]
  };
  //"slice" off the headers from the providers array and then begin to loop through each provider
  const providersArray = response.data.values.slice(2);
  const providers = providersArray.map((provider) => {
    //since the database is just a spreadsheet, this is my attempt at keeping data organized,
    //eventually these sub objects will likely be names of relational data tables
    let newProvider = {
      contact: {},
      paymentOptions: {},
      services: {},
      certifications: {},
      formData: {},
      visibility: {}
    };
    headers.main.forEach((header, i) => {
      const headerName = header || headers.fallback[i];
      if (i < 2) newProvider.formData[headerName] = provider[i];
      else if (i < 6) newProvider.services[headerName] = provider[i];
      else if (i < 19) newProvider.contact[headerName] = provider[i];
      else if (i < 40) newProvider.certifications[headerName] = provider[i];
      else if (i < 43) newProvider.visibility[headerName] = provider[i];
      else if (i < 51) newProvider.paymentOptions[headerName] = provider[i];
    });
    let vis = true;

    Object.values(newProvider.visibility).forEach((param, i) => {
      if (i === 0) {
        //if it needs review then make it not visible
        if (param) vis = false;
      } else if (
        param != 'Yes' &&
        param != 'Currently Practicing' &&
        param != 'Permission to share'
      ) {
        vis = false;
      }
    });

    newProvider.visibility = vis;
    if (vis) return newProvider;
  });
  //only send a provider if it should be visible and has a name provided
  return providers.filter((provider) => {
    return provider !== undefined && provider.contact['Name'];
  });
};

app.get('/providers', async (req, res) => {
  try {
    const sheetsResponse = await sheetsService.spreadsheets.values.get({
      spreadsheetId: config.SPREADSHEET_ID,
      range: config.SPREADSHEET_RANGE
    });
    const data = trimDataTable(sheetsResponse);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

app.post('/comment', (req, res) => {
  const requestBody = {
    values: [[req.body.comment]]
  };
  sheetsService.spreadsheets.values.append(
    {
      spreadsheetId: config.SPREADSHEET_ID,
      range: 'User-Comments!A1',
      valueInputOption: 'RAW',
      requestBody,
      insertDataOption: 'INSERT_ROWS'
    },
    (err, result) => {
      if (err) {
        // Handle error.
        console.log(err);
      } else {
        // console.log(result);
      }
    }
  );
});

app.post('/new-provider', async (req, res) => {
  const newProvider = req.body;
  const formData = [44, 22];
  //convert object to array
  Object.keys(newProvider).forEach((key) => {
    newProvider[key] = Object.values(newProvider[key]);
  });

  const requestBody = {
    values: [
      [
        ...formData,
        ...newProvider.services,
        ...newProvider.contact,
        ...newProvider.certifications,
        ...newProvider.visibility,
        ...newProvider.paymentOptions
      ]
    ]
  };
  sheetsService.spreadsheets.values.append(
    {
      spreadsheetId: config.SPREADSHEET_ID,
      range: 'A1',
      valueInputOption: 'RAW',
      requestBody,
      insertDataOption: 'INSERT_ROWS'
    },
    (err, result) => {
      if (err) {
        // Handle error.
        console.log(err);
      } else {
        // console.log(result);
      }
    }
  );
});
