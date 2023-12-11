import express from 'express';
import * as primaryService from '../services/primary-service.js';
import crudService from '../services/crud-service.js';

const providerRouter = express.Router();

providerRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const rows = await primaryService.getAllProviders(
        false,
        req.providerType
      );
      res.send(rows);
    } catch (e) {
      console.log(e);

      res.send(e.message || 'there was an error');
    }
  })
  .post(async (req, res) => {
    const newProvider = req.body;
    try {
      const rows = await primaryService.createNewProvider(
        newProvider,
        req.providerType
      );
      res.status(200).send({ id: rows });
    } catch (e) {
      console.log(e);
      res.status(e.message.includes('violates unique constraint') ? 409 : 400);
      res.send({ error: e.message ? e.message : 'there was an error' });
    }
  });
providerRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await primaryService.getProviderById(id, req.providerType);
      res.send(rows);
    } catch (e) {
      console.log('error at provider router get /:id', e);
      res.status(404).send("Can't find that provider. Try a different id. ");
    }
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const provider = req.body;
    const response = await primaryService.editProvider(
      provider,
      id,
      req.providerType
    );
    // const response = await providerService.editProvider(provider, id);
    res.send({ response });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const response = await crudService[req.providerType].delete(id);

    res.send(response);
  });
providerRouter.route('/:id/:hash').get(async (req, res) => {
  const { id, hash } = req.params;
  const rows = await primaryService.getProviderById(id, req.providerType);
  //TODO make sure edit hash doesn't get sent to client on GETs
  res.send(hash === rows.edit_hash);
});

export default providerRouter;
