const AWS = require('aws-sdk');

// Enable logging for debugging purposes
AWS.config.logger = console;

// Create an S3 instance
const s3 = new AWS.S3();

// List S3 buckets to verify credentials
s3.listBuckets((err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Success:", data.Buckets);
    }
});
