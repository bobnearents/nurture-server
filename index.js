import config from './config/config.js';
// import zipRouter from './src/zip/zip-router.js';
// import providerRouter from './src/provider/provider-router.js';
// import paymentRouter from './src/payment/payment-router.js';
// import serviceRouter from './src/service/service-router.js';
// import certificationRouter from './src/certification/certification-router.js';
// import adminRouter from './src/admin-router.js';
// import { deletePhoto, upload } from './src/s3.js';
// import analyticsService from './src/analytics/analytics-service.js';
import express from 'express';
import genericRouter from './src/routers/api-routes.js';
import providerRouter from './src/routers/provider-router.js';
import { v4 as uuidv4 } from 'uuid';
import {
  convertNameToTypeFromOtherType,
  getOptionTableNames
} from './db/model/helpers.js';
import emailRouter from './src/routers/email-router.js';
import { getAllProviders, editProvider } from './src/services/primary-service.js';
import { sendAdminEmail, sendBetaLaunchEmail } from './src/services/aws/ses.js';
// import organizationRouter from './src/organization/organization-router.js';

const app = express();

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    `${config.NODE_ENV === 'production' ? '*' : '*'}`
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
  res.send('hello world!');
});
app.use(
  getOptionTableNames('endpointName'),
  (req, res, next) => {
    req.table = convertNameToTypeFromOtherType(
      req.baseUrl,
      'endpointName',
      'dbName'
    );
    next();
  },
  genericRouter
);
app.use(
  ['/providers', '/organizations', '/demographic-profiles'],
  (req, res, next) => {
    const providerType = convertNameToTypeFromOtherType(
      req.baseUrl,
      'endpointName',
      'dbName'
    );
    req.providerType = providerType;
    next();
  },
  providerRouter
);
app.use('/send-email', emailRouter);
app.use('/beta-launch', async (req, res) => {
  console.log('sending launch email to all beta providers');
  const providers = await getAllProviders(true, 'provider');
  await providers.forEach(async (provider) => {
    
    const hash = uuidv4();
    const patchBody = { general: { edit_hash: hash } };
    const response = await editProvider(
      patchBody,
      provider.id,
      'provider'
    );
    console.log('hash added to' + provider.name)
  });
  const updatedProviders = await getAllProviders(true, 'provider');
  let count = 0;
  await updatedProviders.forEach(provider => {
    count++
    const { name, email, edit_hash, id } = provider;
    sendBetaLaunchEmail(email, name, id, edit_hash)
  })
  console.log(`sent welcome email to ${count} providers`)
  res.send('ok');
});
// app.use('/admin', adminRouter);
// app.use('/zip-codes', zipRouter);

//VVV to be DELETED VVV

//zip-codes, providers, organizations, demographic_profile, admin,
// app.patch(
//   '/providers/:id/upload',
//   upload.fields([
//     { name: 'profile_photo', maxCount: 1 },
//     { name: 'logo', maxCount: 1 }
//   ]),
//   (req, res) => {
//     const { id } = req.params;
//     const photoTypes = Object.keys(res.req.files);
//     const patchBody = photoTypes.reduce(
//       (acc, cur) => ({ ...acc, [cur]: res.req.files[cur][0].key }),
//       {}
//     );
//     console.log(patchBody, id);
//     // crudService.provider.update(id, patchBody);
//     // res.send(patchBody);
//     res.send(id);
//   }
// );
// app.delete('/s3/:key', async (req, res) => {
//   const { key } = req.params;
//   console.log(key, req.body);
//   const [photoType, id] = key.split('.')[0].split('-');

//   const photoResponse = await deletePhoto(key);
//   const updateResponse = await crudService.provider.update(Number(id), {
//     [photoType]: null
//   });
//   console.log(photoResponse, updateResponse);
//   res.send('okay');
// });
// app.use('/organizations', organizationRouter);
// app.use('/payment-options', paymentRouter);
// app.use('/services', serviceRouter);
// app.use('/certifications', certificationRouter);

app.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});
//
