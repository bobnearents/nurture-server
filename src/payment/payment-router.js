import express from 'express';
import crudService from '../crud-service.js';

const paymentRouter = express.Router();

paymentRouter.route('/').get(async (req, res) => {
  const rows = await crudService.payment.getAll();

  res.send(rows);
});

export default paymentRouter;
