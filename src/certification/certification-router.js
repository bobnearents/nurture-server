import express from 'express';
import crudService from '../crud-service.js';

const certificationRouter = express.Router();

certificationRouter
  .route('/')
  .get(async (req, res) => {
    const rows = await crudService.certification.getAll();

    res.send(rows);
  })
  .post(async (req, res) => {
    const { newService } = req.body;

    const rows = await crudService.certification.add(newService);
    res.send(rows);
  });
certificationRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.certification.getOne(id);
    res.send(rows);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.certification.delete(id);

    res.send(rows);
  });

export default certificationRouter;
