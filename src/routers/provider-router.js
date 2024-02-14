import express from 'express';
import * as primaryService from '../services/primary-service.js';
import crudService from '../services/crud-service.js';
import { sendRequestEditEmail, sendWelcomeEmail } from '../services/aws/ses.js';
import { deletePhoto, upload } from '../services/aws/s3.js';
import { v4 as uuidv4 } from 'uuid';

const providerRouter = express.Router();

providerRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const { isPending } = req.query;
      console.log(isPending);
      const rows = await primaryService.getAllProviders(
        isPending,
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
      if (!req.providerType.includes('demographic'))
        sendWelcomeEmail(newProvider.general.email, rows, req.providerType);
    } catch (e) {
      console.log(e);
      res.status(e.message.includes('violates unique constraint') ? 409 : 400);
      res.send({ error: e.message ? e.message : 'there was an error' });
    }
  });
providerRouter.route('/delete-photo').patch(async (req, res) => {
  const { key } = req.body;
  const [photoType, id] = key.split('.')[0].split('-');

  const photoResponse = await deletePhoto(key);
  const updateResponse = await crudService.provider.update(Number(id), {
    [photoType]: null
  });
  res.send('okay');
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
    console.log('?????');
    const { id } = req.params;
    const hash = uuidv4();
    const patchBody = req.query.addHash
      ? { general: { edit_hash: hash } }
      : req.body;

    const response = await primaryService.editProvider(
      patchBody,
      id,
      req.providerType
    );
    if (req.query.addHash) {
      // const { email } = await primaryService.getProviderById(
      //   id,
      //   req.providerType
      // );
      const email = 'bobnearents@gmail.com';
      const { note } = req.body;
      // console.log('body:', note);
      sendRequestEditEmail(email, note, hash, id);
    }
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
providerRouter.route('/:id/upload').patch(
  upload.fields([
    { name: 'profile_photo', maxCount: 1 },
    { name: 'logo', maxCount: 1 }
  ]),
  async (req, res) => {
    const { id } = req.params;
    const photoTypes = Object.keys(res.req.files);
    console.log(res.req.files);
    const patchBody = photoTypes.reduce(
      (acc, cur) => ({ ...acc, [cur]: res.req.files[cur][0].key }),
      {}
    );

    crudService.provider.update(id, patchBody);
    res.send(patchBody);
  }
);

export default providerRouter;
