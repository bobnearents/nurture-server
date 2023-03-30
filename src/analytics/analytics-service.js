import { google } from 'googleapis';
import config from '../../config/config.js';

const jwtClient = new google.auth.JWT(
  config.CLIENT_EMAIL,
  null,
  config.PRIVATE_KEY, //sanitize the key since heroku escapes out the \n to \\n https://stackoverflow.com/questions/39492587/escaping-issue-with-firebase-privatekey-as-a-heroku-config-variable
  ['https://www.googleapis.com/auth/analytics']
);

const analyticsService = google.analyticsreporting({
  version: 'v4',
  auth: jwtClient
});

const getReports = async (timeLength) => {
  const todaysDate = new Date();
  const startDate = new Date();
  startDate.setDate(todaysDate.getDate() - timeLength);

  const analyticsResponse = await analyticsService.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: '273665336',
          dateRanges: [
            {
              startDate: startDate.toISOString().split('T')[0],
              endDate: todaysDate.toISOString().split('T')[0]
            }
          ],
          metrics: [{ expression: 'ga:users' }, { expression: 'ga:pageviews' }]
        }
      ]
    }
  });

  const response = analyticsResponse.data.reports[0].data.totals[0].values;
  const responseObject = {
    uniqueUsers: response[0],
    pageViews: response[1]
  };
  return responseObject;
};

export default { getReports };

// ****************&************************

// const propertyId = '328044542';

// // Imports the Google Analytics Data API client library.
// import { BetaAnalyticsDataClient } from '@google-analytics/data';

// // Using a default constructor instructs the client to use the credentials
// // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
// const analyticsDataClient = new BetaAnalyticsDataClient();

// // Runs a simple report.
// export default async function runReport() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [
//       {
//         startDate: '2020-03-31',
//         endDate: 'today'
//       }
//     ],
//     dimensions: [
//       {
//         name: 'city'
//       }
//     ],
//     metrics: [
//       {
//         name: 'activeUsers'
//       }
//     ]
//   });

//   console.log('Report result:');
//   response.rows.forEach((row) => {
//     console.log(row.dimensionValues[0], row.metricValues[0]);
//   });
// }

// runReport();
