import express from 'express';
import providerService from './provider-service.js';
const providerRouter = express.Router();

providerRouter.route('/').get(async (req, res) => {
  const rows = await providerService.getAllProviders();
  res.send(rows);
});
providerRouter.route('/:id/').get(async (req, res) => {
  const { id } = req.params;
  const rows = await providerService.getProviderById(id);
  res.send(rows);
});
providerRouter.route('/add').post(async (req, res) => {
  const { newProvider } = req.body;
  const rows = await providerService.createNewProvider(newProvider);
  res.send(rows);
});

export default providerRouter;
