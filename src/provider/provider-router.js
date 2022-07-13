import express from 'express';
import providerService from '../crud-service.js';
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

export default providerRouter;
