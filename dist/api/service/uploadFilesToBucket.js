import AWS from 'aws-sdk';
const bucket = new AWS.S3({
    region: 'eu-west-3',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
export async function uploadFilesToBucket(files) {
    for await (const file of files) {
        const params = {
            Bucket: 'modjo',
            Key: `${file.filename}`,
        };
        const uploadId = await create(params);
        let parts = 1;
        parts = parts++;
        const etag = await upload({
            ...params,
            UploadId: uploadId,
            Key: file.filename,
            PartNumber: parts,
            Body: await file.toBuffer()
        });
        complete({
            ...params,
            UploadId: uploadId,
            MultipartUpload: {
                Parts: [{
                        ETag: etag,
                        PartNumber: parts,
                    }],
            },
        });
    }
}
async function create(params) {
    const createMultipartUploadResponse = await bucket.createMultipartUpload(params).promise();
    const uploadId = createMultipartUploadResponse.UploadId;
    return uploadId;
}
async function upload(params) {
    const completed = await bucket.uploadPart(params).promise();
    const etag = completed.ETag;
    return etag;
}
async function complete(params) {
    const good = bucket.completeMultipartUpload(params).promise();
    const code = (await good).$response.httpResponse.statusCode;
    return code;
}
