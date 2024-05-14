import { uploadFileToGladia } from "../service/UploadFileToGladia.js";
export async function handleDownload(req, reply) {
    const files = await req.file();
    const file = files;
    const u = await uploadFileToGladia('https://api.gladia.io/v2/upload', process.env.API_KEY, file);
    reply.send(u);
}
