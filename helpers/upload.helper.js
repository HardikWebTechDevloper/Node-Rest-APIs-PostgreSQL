let AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config();

// AWS S3
const S3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
});

const S3_BUCKET_NAME = process.env.AWS_BUCKET;

module.exports.upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: S3_BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        },
        limits: { fileSize: '200MB' }
    })
});