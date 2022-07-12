import config from './config/config.js';
import express from 'express';
import zipRouter from './src/zip/zip-router.js';
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
  ); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/zip-codes', zipRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});
