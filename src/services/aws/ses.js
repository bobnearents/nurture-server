import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import config from '../../../config/config.js';

// Set the AWS Region.
const REGION = 'us-east-1';
// Create SES service object.
const sesClient = new SESClient({ region: REGION });

const createSendEmailCommand = (toAddress, fromAddress, body, subject) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress
        /* more To-email addresses */
      ]
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: body
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ]
  });
};

const sendEmail = async (recipient, sender, body, subject) => {
  const emailCommand = createSendEmailCommand(recipient, sender, body, subject);

  try {
    const successMessage = `${subject} sent to ${recipient}`;
    await sesClient.send(emailCommand);
    console.log(successMessage);
    return successMessage;
  } catch (e) {
    console.log(e);
    console.error('Failed to send email.', emailCommand);

    // res.send(e.message, e.msg, emailCommand);
    return e.msg + e.message;
  }
};

const baseUrl =
  config.NODE_ENV === 'production'
    ? 'https://earlyparentinghub.org'
    : 'http://localhost:5173';

export const sendWelcomeEmail = async (recipient, id, providerType) => {
  const subject = 'Welcome to earlyparentinghub';
  const body =
    '<p>Thank you for submitting you information to our directory. Your information will be approved shortly.</p>' +
    `<p>Feel free to <a href='${baseUrl}/${providerType}/${id}'>click here</a> in the mean time to see a preview of your profile page.`;
  return sendEmail(recipient, 'welcome@earlyparentinghub.org', body, subject);
};

export const sendRequestEditEmail = async (recipient, userNote, hash, id) => {
  const subject = 'Someone has requested an edit';

  const body = `<p>Someone thinks your information needs to be updated. Here's the note they left: ${userNote}</p>
    <p><a href='${baseUrl}/${id}/edit/${hash}'>Click here</a> to edit your information.</p>
    <p>If you didn't initiate this request, or don't need to update your information, feel free to disregard this email.</p>`;
  console.log(recipient);
  return sendEmail(recipient, 'help@earlyparentinghub.org', body, subject);
};

export const sendEditSuccessEmail = async (recipient, providerType, id) => {
  const subject = 'Your information has been updated';

  const body = `<p>Your information has been updated! <a href='${baseUrl}/${providerType}/${id}'>Click here</a> to preview your changes.</p>`;
  return sendEmail(recipient, 'success@earlyparentinghub.org', body, subject);
};

export const sendBetaLaunchEmail = async (
  recipient,
  providerType,
  id,
  hash
) => {
  const subject = 'Thanks for joining our beta';

  const body = `<p><a href='${baseUrl}'>Click here</a> to check out the new resource directory!</p>
    <p><a href='${baseUrl}/${providerType}/${id}'>Click here</a> to preview your profile with the information you submitted a couple years ago</a></p>
    <p><a href='${baseUrl}/${hash}'>Click here</a> to edit your information. Please update your information and add a photo to your profile, and help us better serve our community.</p>`;

  return sendEmail(recipient, 'success@earlyparentinghub.org', body, subject);
};
