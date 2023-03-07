import config from './config/config.js';
import zipRouter from './src/zip/zip-router.js';
import providerRouter from './src/provider/provider-router.js';
import paymentRouter from './src/payment/payment-router.js';
import serviceRouter from './src/service/service-router.js';
import certificationRouter from './src/certification/certification-router.js';
import adminRouter from './src/admin-router.js';
import { upload } from './src/s3.js';

// import analyticsService from './src/analytics/analytics-service.js';
import express from 'express';

const app = express();

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    `${
      config.NODE_ENV === 'production'
        ? 'https://nurture-client.onrender.com'
        : '*'
    }`
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});
app.post('/upload', upload.single('photo'), (req, res) => {
  res.send({ upload: res.req.file.location });
});
app.use('/zip-codes', zipRouter);
app.use('/providers', providerRouter);
app.use('/payment-options', paymentRouter);
app.use('/services', serviceRouter);
app.use('/certifications', certificationRouter);
app.use('/admin', adminRouter);

app.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});
