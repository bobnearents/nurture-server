import config from './config/config.js';
import zipRouter from './src/zip/zip-router.js';
import providerRouter from './src/provider/provider-router.js';
import paymentRouter from './src/payment/payment-router.js';
import serviceRouter from './src/service/service-router.js';
import certificationRouter from './src/certification/certification-router.js';
// import adminRouter from './src/admin-router.js';
// import analyticsService from './src/analytics/analytics-service.js';
import express from 'express';
const app = express();

//middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    `${
      config.NODE_ENV === 'production'
        ? 'https://nurture-client.herokuapp.com'
        : '*'
    }`
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/zip-codes', zipRouter);
app.use('/providers', providerRouter);
app.use('/paymentOptions', paymentRouter);
app.use('/services', serviceRouter);
app.use('/certifications', certificationRouter);
app.use('/admin', adminRouter);

app.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});
