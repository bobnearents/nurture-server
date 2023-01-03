// import { google } from 'googleapis';
// import config from '../../config/config.js';

// const jwtClient = new google.auth.JWT(
//   config.CLIENT_EMAIL,
//   null,
//   config.PRIVATE_KEY.replace(/\\n/g, '\n'), //sanitize the key since heroku escapes out the \n to \\n https://stackoverflow.com/questions/39492587/escaping-issue-with-firebase-privatekey-as-a-heroku-config-variable
//   ['https://www.googleapis.com/auth/analytics']
// );

// const analyticsService = google.analyticsreporting({
//   version: 'v4',
//   auth: jwtClient
// });

// const getReports = async (timeLength) => {
//   const todaysDate = new Date();
//   const startDate = new Date();
//   startDate.setDate(todaysDate.getDate() - timeLength);

//   const analyticsResponse = await analyticsService.reports.batchGet({
//     requestBody: {
//       reportRequests: [
//         {
//           viewId: '273665336',
//           dateRanges: [
//             {
//               startDate: startDate.toISOString().split('T')[0],
//               endDate: todaysDate.toISOString().split('T')[0]
//             }
//           ],
//           metrics: [{ expression: 'ga:users' }, { expression: 'ga:pageviews' }]
//         }
//       ]
//     }
//   });

//   const response = analyticsResponse.data.reports[0].data.totals[0].values;
//   const responseObject = {
//     uniqueUsers: response[0],
//     pageViews: response[1]
//   };
//   return responseObject;
// };

// export default { getReports };
