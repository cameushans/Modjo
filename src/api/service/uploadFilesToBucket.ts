import { MultipartFile } from "@fastify/multipart";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import AWS from 'aws-sdk';
import { streamToBuffer } from "../utils/stramToBuffer.js";

const bucket = new AWS.S3({
    region: 'eu-west-3', 
    credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test',
    },
    endpoint: "http://s3.localhost.localstack.cloud:4566"
})

export async function uploadFilesToBucket(files: AsyncIterable<MultipartFile>) {
    for await (const file of files) {
        const buffer = await streamToBuffer(file.file);

        const params = {
            Bucket: 'modjo',
            Key: file.filename,
            Body: buffer,
        };

        await bucket.putObject(params)
              .promise()
              .then(result => (`Successfully put object with ${result.$response.httpResponse.statusCode} status code`))
              .catch(e => e)
    }
}
