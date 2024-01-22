import express from 'express';
import * as emailService from '../services/aws/ses.js';

const emailRouter = express.Router();
emailRouter.route('/welcome').post(async (req, res) => {
  const { recipient, id, providerType } = req.body;
  const response = await emailService.sendWelcomeEmail(
    recipient,
    id,
    providerType
  );
  res.send(response);
});
emailRouter.route('/edit-request').post(async (req, res) => {
  const { recipient, userNote, hash } = req.body;
  const response = await emailService.sendRequestEditEmail(
    recipient,
    userNote,
    hash
  );
  res.send(response);
});
emailRouter.route('/edit-success').post(async (req, res) => {
  const { recipient, providerType, id } = req.body;
  const response = await emailService.sendEditSuccessEmail(
    recipient,
    providerType,
    id
  );
  res.send(response);
});
emailRouter.route('/beta-launch').post(async (req, res) => {
  const { recipient, providerType, id, hash } = req.body;
  const response = await emailService.sendBetaLaunchEmail(
    recipient,
    providerType,
    id,
    hash
  );
  res.send(response);
});

export default emailRouter;
