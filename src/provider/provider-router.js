import express from 'express';
import crudService from '../crud-service.js';
import providerService from './provider-service.js';
const providerRouter = express.Router();

providerRouter
  .route('/')
  .get(async (req, res) => {
    const rows = await providerService.getAllProviders();
    res.send(rows);
  })
  .post(async (req, res) => {
    const { newProvider } = req.body;
    const rows = await providerService.createNewProvider(newProvider);
    if (!rows || rows.error) {
      res.statusCode = 404;
      res.send({ error: rows ? rows.error.constraint : 'there was an error' });
    } else res.send(rows);
  });
providerRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await providerService.getProviderById(id);
      res.send(rows);
    } catch (error) {
      console.log(error);
      res.statusCode = 404;
      res.send({ error: 'invalid provider id' });
    }
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const { patchBody } = req.body;
    console.log(patchBody, id);
    const response = await crudService.provider.update(id, patchBody);
    res.send(response);
  });

export default providerRouter;
