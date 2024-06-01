import { uploadFilesToBucket } from "../service/uploadFilesToBucket.js";
export async function handleDownload(req, reply) {
    const files = req.files();
    const u = await uploadFilesToBucket(files);
    reply.send(u);
}
