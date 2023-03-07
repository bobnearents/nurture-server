import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
// Set the AWS Region.
const REGION = 'us-east-1';
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: 'nurture-provider-photos',
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
    contentType: function (req, file, cb) {
      cb(null, file.mimetype);
    }
  })
});
