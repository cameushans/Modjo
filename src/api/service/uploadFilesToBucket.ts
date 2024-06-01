import { MultipartFile } from "@fastify/multipart";
import AWS from 'aws-sdk';

const bucket = new AWS.S3({
    region: 'eu-west-3', 
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
})

export async function uploadFilesToBucket(files: AsyncIterable<MultipartFile>): Promise<void> {
    for await (const file of files) {
        const params = {
            Bucket: 'modjo',
            Key: `${file.filename}`,
        }
        const uploadId = await create(params)

        let parts  = 1
        parts = parts ++
    
        const etag = await upload({ 
            ...params,
            UploadId: uploadId as string,
            Key: file.filename, 
            PartNumber: parts,
            Body: await file.toBuffer()
        })
  
       complete({
        ...params,
        UploadId: uploadId as string,
        MultipartUpload: {
            Parts: [{
                ETag: etag,
                PartNumber: parts,
            }],
        },
    })
    }
}


async function create(params: AWS.S3.CreateMultipartUploadRequest): Promise<string | undefined> {
    const createMultipartUploadResponse = await bucket.createMultipartUpload(params).promise()
    const uploadId = createMultipartUploadResponse.UploadId
    return uploadId
}

async function upload(params: AWS.S3.UploadPartRequest): Promise<string | undefined> {
    const completed = await bucket.uploadPart(params).promise()
    const etag = completed.ETag
    return etag
}

async function complete(params: AWS.S3.CompleteMultipartUploadRequest): Promise<number> {
    const good = bucket.completeMultipartUpload(params).promise();
    const code = (await good).$response.httpResponse.statusCode
    return code
}
