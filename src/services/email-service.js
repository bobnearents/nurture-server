import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Set the AWS Region.
const REGION = 'us-east-1';
// Create SES service object.
const sesClient = new SESClient({ region: REGION });

const createSendEmailCommand = (toAddress, fromAddress) => {
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
          Data: '<h3>this is html</h3><p>whoa</p>'
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'this is text'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'THIS IS A VERY COOL EMAIL'
      }
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ]
  });
};

export const run = async () => {
  const sendEmailCommand = createSendEmailCommand(
    'bobnearents@yahoo.com',
    'welcome@earlyparentinghub.org'
  );

  try {
    console.log(sendEmailCommand);
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.log(e);
    console.error('Failed to send email.');
    return e;
  }
};
