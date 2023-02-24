import express from 'express';
import crudService from '../crud-service.js';

const paymentRouter = express.Router();

paymentRouter
  .route('/')
  .get(async (req, res) => {
    const rows = await crudService.payment.getAll();

    res.send(rows);
  })
  .post(async (req, res) => {
    const { newService } = req.body;

    const rows = await crudService.payment.add(newService);
    res.send(rows);
  });
paymentRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.payment.getOne(id);
    res.send(rows);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService.payment.delete(id);

    res.send(rows);
  });

export default paymentRouter;
