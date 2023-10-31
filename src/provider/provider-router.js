import express from 'express';
import crudService from '../crud-service.js';

import providerService from './provider-service.js';
const providerRouter = express.Router();
providerRouter
  .route('/')
  .get(async (req, res) => {
    const { isPending } = req.query;
    const rows = await providerService.getAllProviders(isPending);
    res.send(rows);
  })
  .post(async (req, res) => {
    const newProvider = req.body;
    const rows = await providerService.createNewProvider(newProvider);
    if (!rows || rows.error) {
      res.statusCode =
        rows?.error && rows.error.includes('already exists') ? 409 : 400;
      console.log(rows.error);

      res.send({ error: rows ? rows.error : 'there was an error' });
    } else {
      res.statusCode = 200;
      res.send({ id: rows });
    }
  });
providerRouter.get('/columns', async (req, res) => {
  const rows = await crudService.getProviderColumns();

  res.send(rows);
});
providerRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await providerService.getProviderById(id);
      res.send(rows);
    } catch (error) {
      res.statusCode = 404;
      res.send({ error: 'invalid provider id' });
    }
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const provider = req.body;
    const response = await providerService.editProvider(provider, id);
    res.send({ response });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const response = await crudService.provider.delete(id);
    res.send(response);
  });
providerRouter.route('/:id/:hash').get(async (req, res) => {
  const { id, hash } = req.params;
  const rows = await providerService.getProviderById(id);
  //TODO make sure edit hash doesn't get sent to client on GETs
  res.send(hash === rows.edit_hash);
});

export default providerRouter;
