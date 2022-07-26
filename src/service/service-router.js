import express from 'express';
import crudService from '../crud-service.js';

const serviceRouter = express.Router();

serviceRouter.route('/').get(async (req, res) => {
  const rows = await crudService.service.getAll();

  res.send(rows);
});

export default serviceRouter;
