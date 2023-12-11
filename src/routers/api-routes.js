import express from 'express';
import crudService from '../services/crud-service.js';

const genericRouter = express.Router();
genericRouter
  .route('/')
  .get(async (req, res) => {
    const rows = await crudService[req.table].getAll();

    res.send(rows);
  })
  .post(async (req, res) => {
    const { newEntry } = req.body;

    const rows = await crudService[req.table].add(newEntry);
    res.send(rows);
  });
genericRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService[req.table].getOne(id);
    res.send(rows);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const rows = await crudService[req.table].delete(id);

    res.send(rows);
  });

export default genericRouter;
