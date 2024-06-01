import { FastifyReply, FastifyRequest } from "fastify";
import { uploadFilesToBucket } from "../service/uploadFilesToBucket.js";

export async function handleDownload(req: FastifyRequest, reply: FastifyReply){
    const files = req.files()
    const u = await uploadFilesToBucket(files)

    reply.send(u)
}
