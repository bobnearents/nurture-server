import config from './config/config.js';
import zipRouter from './src/zip/zip-router.js';
import providerRouter from './src/provider/provider-router.js';
import paymentRouter from './src/payment/payment-router.js';
import serviceRouter from './src/service/service-router.js';
import certificationRouter from './src/certification/certification-router.js';
import express from 'express';
const app = express();

//middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    `${
      config.NODE_ENV
        ? 'https://nurture-client.herokuapp.com'
        : 'http://localhost:3000'
    }`
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
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

app.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});
