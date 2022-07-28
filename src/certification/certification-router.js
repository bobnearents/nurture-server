import express from 'express';
import crudService from '../crud-service.js';

const certificationRouter = express.Router();

certificationRouter.route('/').get(async (req, res) => {
  const rows = await crudService.certification.getAll();

  res.send(rows);
});

export default certificationRouter;
