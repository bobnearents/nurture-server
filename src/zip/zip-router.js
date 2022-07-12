import express from 'express';
import zipService from './zip-service.js';
const zipRouter = express.Router();

zipRouter.route('/').get(async (req, res) => {
  const { value, radius } = req.query;
  const result = await zipService.getZipsInRadius(value, radius);
  res.send(result);
});

export default zipRouter;
