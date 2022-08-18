import express from 'express';
import providerService from './provider-service.js';
const providerRouter = express.Router();

providerRouter.route('/').get(async (req, res) => {
  const rows = await providerService.getAllProviders();
  res.send(rows);
});
providerRouter.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await providerService.getProviderById(id);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.statusCode = 404;
    res.send({ error: 'invalid provider id' });
  }
});
providerRouter.route('/add').post(async (req, res) => {
  const { newProvider } = req.body;
  const rows = await providerService.createNewProvider(newProvider);
  if (!rows || rows.error) {
    res.statusCode = 404;
    res.send({ error: rows ? rows.error.constraint : 'there was an error' });
  } else res.send(rows);
});

export default providerRouter;
