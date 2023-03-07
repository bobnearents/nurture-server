import express from 'express';
import crudService from '../crud-service.js';

const serviceRouter = express.Router();

serviceRouter
  .route('/')
  .get(async (req, res) => {
    const rows = await crudService.service.getAll();

    res.send(rows);
  })
  .post(async (req, res) => {
    const { newService } = req.body;
    const rows = await crudService.service.add(newService);
    res.send(rows);
  });
serviceRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.service.getOne(id);
    res.send(rows);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.service.delete(id);

    res.send(rows);
  });

export default serviceRouter;
