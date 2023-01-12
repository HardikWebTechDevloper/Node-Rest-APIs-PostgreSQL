require('dotenv').config();

module.exports = {
    'driver': 's3',
    'key': process.env.AWS_ACCESS_KEY_ID,
    'secret': process.env.AWS_SECRET_ACCESS_KEY,
    'region': process.env.AWS_DEFAULT_REGION,
    'bucket': process.env.AWS_BUCKET,
    'url': process.env.AWS_URL,
    'endpoint': process.env.AWS_ENDPOINT,
};