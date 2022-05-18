import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { google } from "googleapis";
import fetch from "node-fetch";

const app = express();

//middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    `${
      process.env.NODE_ENV
        ? "https://nurture-client.herokuapp.com"
        : "http://localhost:3000"
    }`
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const jwtClient = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.PRIVATE_KEY.replace(/\\n/g, "\n"), //sanitize the key since heroku escapes out the \n to \\n https://stackoverflow.com/questions/39492587/escaping-issue-with-firebase-privatekey-as-a-heroku-config-variable
  ["https://www.googleapis.com/auth/spreadsheets"]
);
const sheetsService = google.sheets({ version: "v4", auth: jwtClient });

const trimDataTable = (response) => {
  const headers = {
    main: response.data.values[1],
    fallback: response.data.values[0],
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
      certs: {},
      formData: {},
      visibility: true,
    };
    headers.main.forEach((header, i) => {
      const headerName = header || headers.fallback[i];
      if (i < 2) newProvider.formData[headerName] = provider[i];
      else if (i < 6) newProvider.services[headerName] = provider[i];
      else if (i < 19) newProvider.contact[headerName] = provider[i];
      else if (i < 40) newProvider.certs[headerName] = provider[i];
      else if (i == 40) newProvider.visibility = !provider[i];
      else if (i == 41 || i == 42)
        newProvider.visibility = !newProvider.visibility || !!provider[i];
      //if visibility is already false, keep it that way
      else if (i < 51) {
        newProvider.paymentOptions[headerName] = provider[i];
      }
    });
    return newProvider;
  });

  return providers;
};

app.get("/providers", async (req, res) => {
  try {
    const sheetsResponse = await sheetsService.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SPREADSHEET_RANGE,
    });
    const data = trimDataTable(sheetsResponse);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

app.get("/zip-codes", async (req, res) => {
  const key = process.env.ZIP_KEY;
  const { value, radius } = req.query;
  const rawResult = await fetch(
    `https://www.zipcodeapi.com/rest/${key}/radius.json/${value}/${radius}/mile`
  );
  const result = await rawResult.json();
  res.send(result);
});

app.post("/comment", (req, res) => {});

app.post("/new-provider", (req, res) => {
  const newProvider = req.body;
  Object.keys(newProvider).forEach((key) => {
    newProvider[key] = Object.values(newProvider[key]);
  });
  const visibility = ["yes", "yes", "yes"];
  const requestBody = {
    values: [
      [
        ...newProvider.formData,
        ...newProvider.services,
        ...newProvider.contact,
        ...newProvider.certs,
        ...visibility,
        ...newProvider.paymentOptions,
      ],
    ],
  };
  sheetsService.spreadsheets.values.append(
    {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A1",
      valueInputOption: "RAW",
      requestBody,
      insertDataOption: "INSERT_ROWS",
    },
    (err, result) => {
      if (err) {
        // Handle error.
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`listening at port: ${process.env.PORT}`);
});
