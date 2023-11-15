import express from 'express';
import crudService from '../services/crud-service.js';
import {
  getAllOrganizations,
  getOrganizationById,
  createNewOrganization,
  editOrganization
} from './organization-service.js';

const organizationRouter = express.Router();

organizationRouter
  .route('/')
  .get(async (req, res) => {
    const { isPending } = req.query;
    const rows = await getAllOrganizations(isPending);
    res.send(rows);
  })
  .post(async (req, res) => {
    const newOrganization = req.body;
    const rows = await createNewOrganization(newOrganization);
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

organizationRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await getOrganizationById(id);
      res.send(rows);
    } catch (error) {
      res.statusCode = 404;
      res.send({ error: 'invalid provider id' });
    }
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const organization = req.body;
    const response = await editOrganization(organization, id);
    res.send({ response });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const response = await crudService.organization.delete(id);
    res.send(response);
  });

export default organizationRouter;
