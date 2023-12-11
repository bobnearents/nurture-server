import { DeleteObjectCommand, S3Client, S3 } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Set the AWS Region.
const REGION = 'us-east-1';
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
const bucketName = 'nurture-provider-photos';

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: bucketName,
    key: function (req, file, cb) {
      const { id } = req.params;
      const fileName = `${file.fieldname}-${id}.jpeg`;
      cb(null, fileName);
    },
    contentType: function (req, file, cb) {
      cb(null, file.mimetype);
    }
  })
});

export const deletePhoto = async (key) => {
  const bucketParams = { Bucket: bucketName, Key: key };

  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
    console.log('Success. Object deleted.', data);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err);
  }
};

//TODO
//delete photos if provider gets deleted
//wipe the whole bucket on refresh
