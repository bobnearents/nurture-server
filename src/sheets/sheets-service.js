import { google } from 'googleapis';
import config from '../../config/config.js';

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
      else if (i < 19) {
        if (provider[i]) newProvider.contact[headerName] = provider[i];
      } else if (i < 40) newProvider.certifications[headerName] = provider[i];
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
    return provider !== undefined && provider.contact['name'];
  });
};

const getProviders = async () => {
  try {
    const sheetsResponse = await sheetsService.spreadsheets.values.get({
      spreadsheetId: config.SPREADSHEET_ID,
      range: config.SPREADSHEET_RANGE
    });
    const data = trimDataTable(sheetsResponse);

    return data;
  } catch (err) {
    return err;
  }
};

export default getProviders;
