// import express from 'express';
// import analyticsService from './analytics/analytics-service.js';
// import providerService from './provider/provider-service.js';
// const adminRouter = express.Router();

// adminRouter.route('/pending-providers').get(async (req, res) => {
//   const rows = await providerService.getAllProviders(true);
//   res.send(rows);
// });

// adminRouter.route('/reports').get(async (req, res) => {
//   const { reportPeriod = 30 } = req.query;
//   const analyticsResponse = await analyticsService.getReports(reportPeriod);
//   res.send(analyticsResponse);
// });

// export default adminRouter;
